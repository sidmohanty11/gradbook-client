import axios from "../axios";

export async function getUserByUsername(uname) {
  const res = await axios.get(`/api/v1/user/${uname}`);
  return res.data;
}
