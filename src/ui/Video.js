/** @format */

import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const Video = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10">
      <div className="w-full md:w-1/2 pl-4 md:pl-12 lg:pl-20 xl:pl-32">
        <Typography
          variant="h3"
          color="black"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          Get ready to unwind
        </Typography>
        <Typography variant="lead" color="black" className="mb-6 opacity-80">
          It is not so much for its beauty that the forest makes a claim upon
          men&apos;s hearts, as for that subtle something, that quality of air
          that emanation from old trees, that so wonderfully changes and renews
          a weary spirit.
        </Typography>
        <Typography variant="lead" color="black" className="mb-12 opacity-80">
          It is not so much for its beauty that the forest makes a claim.
        </Typography>
        <button className="flex items-center font-bold text-blue-600 hover:underline gap-2">
          Learn more{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mt-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <video
          className="w-full max-w-lg rounded-lg shadow-lg shadow-blue-gray-600"
          controls
        >
          <source
            src="https://media.istockphoto.com/id/1494537047/video/beji-griya-waterfall.mp4?s=mp4-640x640-is&k=20&c=BGYZvLMcCi0ExkoTUGTK_Hd4IQj81Wpr6vuxCElV_-s="
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Video;
