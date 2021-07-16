import axios from "axios";

const instance = axios.create({
  baseURL: "https://gradbook-cet.herokuapp.com",
});

export default instance;
