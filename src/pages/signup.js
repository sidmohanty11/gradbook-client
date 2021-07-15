import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LOGIN } from "../constants/routes";
import axios from "../axios";

function Signup({ setActiveUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [email, setEmail] = useState("");
  const [magicWord, setMagicWord] = useState("");
  const [authorized, setAuthorized] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await axios
      .post(
        "/api/v1/register",
        {
          username,
          password,
          image_url: imageURL,
          email,
          passcode: magicWord,
        },
        { withCredentials: true }
      )
      .catch((err) => setAuthorized(false));
    if (res && res.data.status === "success") {
      history.push("login");
    }
  };
  return (
    <div className="w-full flex items-center justify-center">
      <form className="w-full md:w-1/3 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="flex font-bold justify-center mt-6">
          <img width="300px" alt="logo" src="./loginlogo.png" />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4 mt-2">Signup</h2>
        {!authorized && (
          <p className="text-center text-red-500">Invalid Details.</p>
        )}
        <div className="px-12 pb-10 mt-4">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="profilepicURL(prefer github avatar image)"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="text"
                value={magicWord}
                onChange={(e) => setMagicWord(e.target.value)}
                placeholder="Magic Word"
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <Link to={LOGIN} className="text-xs text-gray-500 mb-4">
              Already have an account?
            </Link>
          </div>
          <button
            onClick={handleRegister}
            type="submit"
            className="w-full py-2 rounded-full bg-green-logo hover:bg-green-forhover text-gray-100 focus:outline-none"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
