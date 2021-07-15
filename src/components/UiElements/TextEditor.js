import React, { useCallback, useMemo, useState } from "react";
import imageExtensions from "image-extensions";
import isUrl from "is-url";
import { Editor, Transforms, createEditor, Text } from "slate";
import {
  Slate,
  Editable,
  withReact,
  useSelected,
  useFocused,
} from "slate-react";
import { withHistory } from "slate-history";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import ReactDOMServer from "react-dom/server";

const htmlString = (el) => ReactDOMServer.renderToStaticMarkup(el);

const rules = (arrayOfNodes) => {
  let arrayOfElements = [];
  for (let node of arrayOfNodes) {
    switch (node.type) {
      case "code":
        arrayOfElements.push(
          node.children.map((child) =>
            htmlString(
              <pre>
                <code>{child.text}</code>
              </pre>
            )
          )
        );
        break;
      case "paragraph":
        if (node.children[1] && node.children[1].bold === true) {
          arrayOfElements.push(
            node.children.map((child) =>
              htmlString(<p style={{ fontWeight: "bold" }}>{child.text}</p>)
            )
          );
        } else if (node.children[1] && node.children[1].italic === true) {
          arrayOfElements.push(
            node.children.map((child) =>
              htmlString(<p style={{ fontStyle: "italic" }}>{child.text}</p>)
            )
          );
        } else {
          arrayOfElements.push(
            node.children.map((child) => htmlString(<p>{child.text}</p>))
          );
        }
        break;
      case "image":
        arrayOfElements.push(
          htmlString(<img src={node.url} alt={node.children.text} />)
        );
        break;
    }
  }
  return [].concat(...arrayOfElements);
};

// for code element
export const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

// paragraph element
export const DefaultElement = (props) => {
  return <p {...props.attributes}>{props.children}</p>;
};

// for bold
const Leaf = (props) => {
  return (
    <span
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
        fontStyle: props.leaf.italic ? "italic" : "normal",
      }}
    >
      {props.children}
    </span>
  );
};

const insertImage = (editor, url) => {
  const text = { text: "" };
  const image = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
};

const withImages = (editor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

export const Image = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          className={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "20em",
            boxShadow: `${selected && focused ? "0 0 0 3px #B4D5FF" : "none"}`,
          }}
        />
      </div>
      {children}
    </div>
  );
};

const initialValue = [
  {
    type: "paragraph",
    children: [
      {
        text: "Write your blog here.",
      },
    ],
  },
];

const TextEditor = ({ blogThumbnail, blogTitle, user }) => {
  const editor = useMemo(
    () => withImages(withHistory(withReact(createEditor()))),
    []
  );
  const history = useHistory();
  const [value, setValue] = useState(initialValue);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      case "image":
        return <Image {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  return (
    <div className="flex flex-col justify-center mt-4">
      <div className="p-10 shadow-lg bg-gray-200">
        <div className="flex p-2 bg-gray-400">
          <button
            onClick={(event) => {
              event.preventDefault();
              const [match] = Editor.nodes(editor, {
                match: (n) => n.type === "code",
              });
              Transforms.setNodes(
                editor,
                { type: match ? null : "code" },
                { match: (n) => Editor.isBlock(editor, n) }
              );
            }}
            className="mx-2"
          >
            code
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              Transforms.setNodes(
                editor,
                { italic: true },
                { match: (n) => Text.isText(n), split: true }
              );
            }}
            className="mx-2"
          >
            italic
          </button>
          <button
            onClick={(event) => {
              event.preventDefault();
              Transforms.setNodes(
                editor,
                { bold: true },
                { match: (n) => Text.isText(n), split: true }
              );
            }}
            className="mx-2"
          >
            bold
          </button>
          <button
            onMouseDown={(event) => {
              event.preventDefault();
              const url = window.prompt("Enter the URL of the image:");
              if (url && !isImageUrl(url)) {
                alert("URL is not an image");
                return;
              }
              insertImage(editor, url);
            }}
            className="mx-2"
          >
            image
          </button>
          <button className="mx-2">link</button>
        </div>
        <Slate
          editor={editor}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <Editable
            placeholder="Enter your text here..."
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={(event) => {
              if (!event.ctrlKey) {
                return;
              }

              switch (event.key) {
                case "`": {
                  event.preventDefault();
                  const [match] = Editor.nodes(editor, {
                    match: (n) => n.type === "code",
                  });
                  Transforms.setNodes(
                    editor,
                    { type: match ? null : "code" },
                    { match: (n) => Editor.isBlock(editor, n) }
                  );
                  break;
                }

                case "b": {
                  event.preventDefault();
                  Transforms.setNodes(
                    editor,
                    { bold: true },
                    { match: (n) => Text.isText(n), split: true }
                  );
                  break;
                }

                case "i": {
                  event.preventDefault();
                  Transforms.setNodes(
                    editor,
                    { italic: true },
                    { match: (n) => Text.isText(n), split: true }
                  );
                  break;
                }
              }
            }}
          />
        </Slate>
      </div>
      <div className="flex justify-center">
        <button
          onClick={async () => {
            const val = rules(value).join("");
            await axios.post(
              "/api/v1/blog",
              {
                user_id: user.id,
                blog_title: blogTitle,
                blog_thumbnail: blogThumbnail,
                blog_text: val,
              },
              { withCredentials: true }
            );
            history.push("/blogs");
          }}
          className="bg-gray-900 text-white-normal p-2 mr-2"
        >
          Post!
        </button>
        <button
          onClick={() => history.push("/blogs")}
          className="bg-red-700 text-white-normal p-2"
        >
          Cancel!
        </button>
      </div>
    </div>
  );
};

const isImageUrl = (url) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(".").pop();
  return imageExtensions.includes(ext);
};

export default TextEditor;
