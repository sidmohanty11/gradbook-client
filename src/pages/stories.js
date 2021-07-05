import React, { useState, useContext, useEffect } from "react";
import Header from "../components/HeaderComponents/Header";
import Story from "../components/StoryComponent/Story";
import AddBtn from "../components/UiElements/AddBtn";
import { UserCtx } from "../context/user";
import axios from "../axios";

function Stories() {
  const [stories, setStories] = useState(null);
  const user = useContext(UserCtx);

  useEffect(() => {
    async function callStories() {
      const res = await axios.get("/api/v1/stories");
      if (res.status === 200) {
        const storyArr = await res.data.stories;
        setStories(storyArr);
      }
    }
    callStories();
  }, []);

  return (
    <>
      <Header active="story" user={user} />
      <div className="flex mt-4 justify-center">
        <AddBtn element="Story" to="/add/story" />
      </div>
      <div className="flex mt-4 justify-center">
        {stories?.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>
    </>
  );
}

export default Stories;
