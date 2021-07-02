import React from "react";
import { Link } from "react-router-dom";
import { LOGIN, SIGNUP } from "../constants/routes";

function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <form className="w-full md:w-1/3 bg-white rounded-lg shadow-lg border border-gray-200">
        <div className="flex font-bold justify-center mt-6">
          <img width="300px" alt="logo" src="./loginlogo.png" />
        </div>
        <h2 className="text-3xl text-center text-gray-700 mb-4">Login</h2>
        <div className="px-12 pb-10">
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
