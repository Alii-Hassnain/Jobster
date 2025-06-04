"use client";
import React from "react";
import { useRouter } from "next/navigation";

const JobBox = ({
  _id,
  company,
  createdAt,
  jobLocation,
  jobStatus,
  jobType,
  position,
}) => {
  const router = useRouter()

  const handleEdit = () => {
  const jobData = {
    _id,
    position,
    company,
    jobLocation,
    jobStatus,
    jobType,
  };
  localStorage.setItem("editJobData", JSON.stringify(jobData));
  router.push("/add-jobs"); // navigate to the add job page
};
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xl p-6">
      {/* Header Section */}
      <div className="flex items-center space-x-4 border-b pb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full">
          <h1 className="text-white text-xl font-bold">H</h1>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{company}</h2>
          <h3 className="text-sm text-gray-500">{jobLocation}</h3>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-700">
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>My City</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{jobType}</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>
            {new Date(createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span className="text-red-500 font-medium">{jobStatus}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-6">
        <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
        onClick={handleEdit}
        >
          Edit
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors duration-200 cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobBox;
