import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex m-2 py-2">
      <div className="ml-2">
        <div className="w-10 h-10 bg-cover bg-center rounded-full mr-3 shadow-inner">
          <img className="rounded-full" src="./me.jpg" alt="" />
        </div>
      </div>
      <div>
        <p className="font-bold">sidharth</p>
        <div className="flex items-center text-xs text-gray-600">
          <p>3 hours ago</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
