import React from "react";
import Header from "../components/HeaderComponents/Header";
import Story from "../components/StoryComponent/Story";
import AddStoryBtn from "../components/StoryComponent/AddStoryBtn";

function Stories() {
  return (
    <>
      <Header active="story" />
      <div className="flex mt-4 justify-center">
        <AddStoryBtn />
      </div>
      <div className="flex mt-4 justify-center">
        <Story />
      </div>
    </>
  );
}

export default Stories;
