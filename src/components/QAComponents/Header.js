import React from "react";
import timeSince from "../../helpers/timeSince";
import { Link } from "react-router-dom";

function Header({ question }) {
  return (
    <div className="flex m-2 py-2">
      <div className="ml-2">
        <div className="w-12 h-10 bg-cover bg-center rounded-full mr-3 shadow-inner">
          <img className="rounded-full" src={question.image_url} alt="" />
        </div>
      </div>
      <div>
        <Link to={`/profile/${question.user_id}`}>
          <p className="font-bold">{question.username}</p>
        </Link>
        <div className="flex items-center text-xs text-gray-600">
          <p>{timeSince(new Date(question.created_on))}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
