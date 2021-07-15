import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";

function Story() {
  const [story, setStory] = useState();
  const { id } = useParams();
  useEffect(() => {
    const callTheStory = async () => {
      const res = await axios.get(`/api/v1/story/${id}`, {
        withCredentials: true,
      });
      setStory(res.data);
    };
    callTheStory();
  }, [id]);

  return (
    <div className="bg-white-mywhite">
      <div className="w-full h-screen container md:max-w-3xl mx-auto">
        <Link to="/stories" className="underline">
          Back
        </Link>
        <h1 className="text-center text-4xl mb-4">The CET Times</h1>
        <div className="border-t border-b border-black-dark py-2">
          <ul
            className="flex items-center justify-around md:justify-center space-x-12  
                    uppercase tracking-widest border-t border-b border-gray-500 font-semibold text-xs text-gray-600"
          >
            <li className="-mt-px text-gray-700">
              <span className="inline-block p-3">ISSUE #{story?.id}</span>
            </li>
            <li>
              <span className="inline-block p-3">{story?.username}</span>
            </li>
            <li>
              <span className="inline-block p-3">CET bhubaneswar</span>
            </li>
          </ul>
        </div>
        <h2 className="text-center text-4xl italic">{story?.name}</h2>
        <img src={story?.image_url} alt={story?.name} />
        <blockquote className="text-lg font-bold italic">
          "{story?.motto}"
        </blockquote>
        <p>{story?.journey}</p>
        <div className="flex justify-center space-x-1 text-gray-400">
          {story?.github_link.length > 0 && (
            <a href={story?.github_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-black hover:text-green-forhover"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
          )}
          {story?.linkedin_link.length > 0 && (
            <a href={story?.linkedin_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-black hover:text-green-forhover"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
          )}
          {story?.youtube_link.length > 0 && (
            <a href={story?.youtube_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-black hover:text-green-forhover"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Story;
