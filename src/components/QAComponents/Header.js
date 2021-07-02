import React from "react";

function Header() {
  return (
    <div className="flex m-2 py-2">
      <div className="ml-2">
        <div className="w-12 h-10 bg-cover bg-center rounded-full mr-3 shadow-inner">
          <img className="rounded-sm" src="./m.jpeg" alt="" />
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
