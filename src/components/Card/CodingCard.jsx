import React from "react";
import { Link } from "react-router-dom";

const CodingCard = () => {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Coding related consept
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            For interview preparation
          </p>
          <Link to="/CodingContent">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodingCard;
