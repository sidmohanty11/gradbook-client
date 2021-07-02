import React from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "../constants/routes";

function Signup() {
  return (
    <div className="w-full flex items-center justify-center">
      <form className="w-full md:w-1/3 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="flex font-bold justify-center mt-6">
          <img width="300px" alt="logo" src="./loginlogo.png" />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4 mt-2">Signup</h2>
        <div className="px-12 pb-10 mt-4">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Username"
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="profilepicURL"
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email"
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
