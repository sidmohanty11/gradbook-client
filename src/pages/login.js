import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { LOGIN, SIGNUP } from "../constants/routes";
import { getUserByUsername } from "../helpers/getUserByUsername";
import axios from "../axios";

function Login({ setActiveUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await axios
      .post(
        "/api/v1/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .catch((err) => setAuthorized(false));
    if (res && res.data.status === "success") {
      const user = await getUserByUsername(res.data.username);
      setActiveUser(user.user);
      sessionStorage.setItem("user", JSON.stringify(user.user));
      history.push("/");
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="w-full md:w-1/3 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="flex font-bold justify-center mt-6">
          <img width="300px" alt="logo" src="./loginlogo.png" />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4">Login</h2>
        {!authorized && (
          <p className="text-center text-red-500">Wrong username or password</p>
        )}
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Username"
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Link to={LOGIN} className="text-xs text-gray-500 mb-4">
              Forgot Password?
            </Link>
            <Link to={SIGNUP} className="text-xs text-gray-500 mb-4">
              Don't have an account?
            </Link>
          </div>
          <button
            onClick={handleLogin}
            type="submit"
            className="w-full py-2 rounded-full bg-green-logo hover:bg-green-forhover text-gray-100 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
