/** @format */

import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router";

const Questions = () => {
  const nav = useNavigate();
  return (
    <div className="space-y-8 p-10">
      <Typography
        color="black"
        className="text-3xl font-bold mb-8 md:text-4xl lg:text-5xl"
      >
        Frequently Asked Questions
      </Typography>

      <div className="space-y-6">
        <div className="p-6 bg-gray-100 rounded-lg flex flex-col md:flex-row justify-between items-start">
          <div className="space-y-4 md:w-2/3">
            <h2 className="text-lg font-semibold text-gray-700">
              1. About Unwind Cabins
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>How long have you been in business?</li>
              <li>Why did you start this journey?</li>
            </ul>
          </div>
          <button
            onClick={() => nav("/about")}
            className="mt-4 md:mt-0 h-12 px-6 rounded-lg text-white bg-blue-500 flex items-center justify-between"
          >
            <p>About Unwind Cabins</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg flex flex-col md:flex-row justify-between items-start">
          <div className="space-y-4 md:w-2/3">
            <h2 className="text-lg font-semibold text-gray-700">
              2. Tell me more about your Cabins
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>What do I need to bring?</li>
              <li>How do I get to the cabin?</li>
            </ul>
          </div>
          <button
            onClick={() => nav("/about")}
            className="mt-4 md:mt-0 h-12 px-6 rounded-lg text-white bg-blue-500 flex items-center justify-between"
          >
            <p>Tell me more about your Cabins</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg flex flex-col md:flex-row justify-between items-start">
          <div className="space-y-4 md:w-2/3">
            <h2 className="text-lg font-semibold text-gray-700">
              3. Pets, Family, and Friends
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Can I bring my dog?</li>
              <li>How many people do your cabins sleep?</li>
            </ul>
          </div>
          <button
            onClick={() => nav("/about")}
            className="mt-4 md:mt-0 h-12 px-6 rounded-lg text-white bg-blue-500 flex items-center justify-between"
          >
            <p>Pets, Family, and Friends</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Still have a question?
            </h2>
            <p className="text-gray-600">
              If you still have a question, contact a member of the team via
              live chat, and we'd be more than happy to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
