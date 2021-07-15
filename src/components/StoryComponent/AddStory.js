import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserCtx } from "../../context/user";
import axios from "../../axios";

function AddStory() {
  const { id } = useContext(UserCtx);
  const history = useHistory();
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [clubs, setClubs] = useState("");
  const [motto, setMotto] = useState("");
  const [githubLink, setGithubLink] = useState();
  const [linkedinLink, setLinkedinLink] = useState();
  const [youtubeLink, setYouTubeLink] = useState();
  const [journey, setJourney] = useState("");
  const [imageURL, setImageURL] = useState("");

  async function addYourStory(e) {
    e.preventDefault();
    const res = await axios.post(
      "/api/v1/story",
      {
        user_id: id,
        name,
        branch,
        clubs,
        motto,
        github_link: githubLink,
        linkedin_link: linkedinLink,
        youtube_link: youtubeLink,
        journey,
        image_url: imageURL,
      },
      {
        withCredentials: true,
      }
    );
    console.log(`res`, res);
  }
  return (
    <div className="flex items-center justify-center  mt-32 mb-32">
      <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
        <div className="flex justify-center">
          <div className="flex">
            <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
              Tell Your Story
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Your Story Headline
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-2 px-3 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-green-logo focus:border-transparent"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Branch
            </label>
            <input
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="py-2 px-3 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-green-logo focus:border-transparent"
              type="text"
              placeholder="Branch"
              required
            />
          </div>
          <div className="grid grid-cols-1">
            <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
              Clubs
            </label>
            <input
              value={clubs}
              onChange={(e) => setClubs(e.target.value)}
              className="py-2 px-3 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-green-logo focus:border-transparent"
              type="text"
              placeholder="Clubs (if any or write none)"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Your motto
          </label>
          <input
            value={motto}
            onChange={(e) => setMotto(e.target.value)}
            className="py-2 px-3 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-green-logo focus:border-transparent"
            type="text"
            placeholder="Your Motto"
            required
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Github
          </label>
          <input
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            className="py-2 px-3 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-green-logo focus:border-transparent"
            type="text"
            placeholder="Github link (if you want to share else leave empty)"
          />
        </div>
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Youtube
          </label>
          <input
            value={youtubeLink}
            onChange={(e) => setYouTubeLink(e.target.value)}
            className="py-2 px-3 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-green-logo focus:border-transparent"
            type="text"
            placeholder="Youtube Link (if you have a channel else leave empty)"
          />
        </div>
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Linkedin
          </label>
          <input
            value={linkedinLink}
            onChange={(e) => setLinkedinLink(e.target.value)}
            className="py-2 px-3 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-green-logo focus:border-transparent"
            type="text"
            placeholder="Linkedin link (if you want to share else leave empty)"
          />
        </div>
        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Story In Nutshell Image URL
          </label>
          <input
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            className="py-2 px-3 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-green-logo focus:border-transparent"
            type="text"
            placeholder="Story Image"
            required
          />
        </div>

        <div className="grid grid-cols-1 mt-5 mx-7">
          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
            Your journey
          </label>
          <textarea
            value={journey}
            onChange={(e) => setJourney(e.target.value)}
            className="py-2 px-3 rounded-lg border-2 border-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-green-logo focus:border-transparent"
            rows="10"
            type="text"
            placeholder="Journey Till Now"
            required
          />
        </div>

        <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
          <button
            onClick={() => history.push("/stories")}
            className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              addYourStory(e);
              history.push("/stories");
            }}
            className="w-auto bg-green-logo hover:bg-green-forhover rounded-lg shadow-xl font-medium text-white px-4 py-2"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddStory;
