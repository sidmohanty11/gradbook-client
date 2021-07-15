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

// for code element
const CodeElement = (props) => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
};

// paragraph element
const DefaultElement = (props) => {
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
const Image = ({ attributes, children, element }) => {
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
        text: "In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.",
      },
    ],
  },
  {
    type: "image",
    url: "https://source.unsplash.com/kFrdX5IeQzI",
    children: [{ text: "" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above, or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!",
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
            const res = await axios.post(
              "/api/v1/blog",
              {
                user_id: user.id,
                blog_title: blogTitle,
                blog_thumbnail: blogThumbnail,
                blog_text: JSON.stringify(value).toString(),
              },
              { withCredentials: true }
            );
            console.log(`res`, res);
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
