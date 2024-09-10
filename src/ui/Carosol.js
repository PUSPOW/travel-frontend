/** @format */

import React from "react";
import {
  Carousel,
  Typography,
  Button,
  Avatar,
  IconButton,
  Rating,
} from "@material-tailwind/react";

const Carosol = () => {
  return (
    <div className="relative h-[600px] w-full">
      <img
        src="https://images.pexels.com/photos/6129991/pexels-photo-6129991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image 2"
        className="h-full w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-start p-8 md:p-16 lg:p-24 bg-black/50">
        <div className="w-full max-w-3xl">
          <Typography
            variant="h1"
            color="white"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            A truly wonderful experience
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80 mb-6">
            It is not so much for its beauty that the forest makes a claim upon
            men&apos;s hearts, as for that subtle something, that quality of air
            that emanation from old trees, that so wonderfully changes and
            renews a weary spirit.
          </Typography>
          <Typography variant="lead" color="white" className="opacity-80 mb-12">
            It is not so much for its beauty that the forest makes a claim.
          </Typography>
          <div className="flex items-center text-white gap-4">
            <Rating value={4} readonly />
            <p className="text-lg">01 Jan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosol;
