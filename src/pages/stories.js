import React from "react";
import Header from "../components/HeaderComponents/Header";
import Story from "../components/StoryComponent/Story";
import AddBtn from "../components/UiElements/AddBtn";

function Stories() {
  return (
    <>
      <Header active="story" />
      <div className="flex mt-4 justify-center">
        <AddBtn element="Story" to="/add/story" />
      </div>
      <div className="flex mt-4 justify-center">
        <Story />
      </div>
    </>
  );
}

export default Stories;
