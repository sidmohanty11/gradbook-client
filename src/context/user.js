import { createContext } from "react";

const initialValue = {
  id: "",
  username: "",
  email: "",
  story: {
    name: "",
    branch: "",
    clubs: "",
    motto: "",
    github: "",
    youtube: "",
    linkedin: "",
    imageURL: "",
    journey: "",
  },
  blogs: [],
};

export const UserCtx = createContext(initialValue);
