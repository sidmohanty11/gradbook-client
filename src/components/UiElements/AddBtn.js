import React from "react";
import { Link } from "react-router-dom";

function AddBtn({ element, to }) {
  return (
    <Link to={to}>
      <button className="flex p-2 hover:translate-x-2 hover:bg-black-logo hover:text-white border border-black-logo">
        <span className="mr-2">Add {element}</span>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path
            fill="currentColor"
            d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"
          />
        </svg>
      </button>
    </Link>
  );
}

export default AddBtn;
