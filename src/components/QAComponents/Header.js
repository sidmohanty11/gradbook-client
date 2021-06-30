import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex justify-between p-3">
      <div className="flex">
        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img src="./me.jpg" alt="profilepic" />
        </div>
        <Link to="/p/">
          <span className="pt-1 ml-2 font-bold text-sm">sidharth</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
