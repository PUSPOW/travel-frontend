/** @format */

import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Finding = () => {
  return (
    <div className="relative bg-blue-50 mt-10 h-[650px]">
      <div className="relative h-full max-w-screen-xl mx-auto">
        <img
          src="https://images.pexels.com/photos/6129991/pexels-photo-6129991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Experience"
          className="h-full w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start bg-black/50 p-6 md:p-12 lg:p-20">
          <div className="max-w-3xl">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              A Truly Wonderful Experience
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 opacity-80 text-base md:text-lg lg:text-xl"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanates from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <Link to="/all-cards">
              <Button color="yellow" className="mt-4">
                Find Available Cabins
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finding;
