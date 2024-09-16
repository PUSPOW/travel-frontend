/** @format */

import React from "react";
import Skeleton from "./Skeleton";
import {
  Carousel,
  Typography,
  Button,
  Avatar,
  IconButton,
  Rating,
} from "@material-tailwind/react";

const Carosul = ({ isLoading }) => {
  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <div className="relative h-full w-full">
      <img
        src="https://images.pexels.com/photos/6129991/pexels-photo-6129991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image 2"
        className="h-[600px] w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
        <div className="w-3/4 px-4 md:w-2/4 md:px-8 lg:px-16 xl:px-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Leave the office behind and{" "}
            <span className="text-yellow-700">unwind</span>
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-8 opacity-80 text-sm md:text-base lg:text-lg xl:text-xl"
          >
            It is not so much for its beauty that the forest makes a claim upon
            men&apos;s hearts, as for that subtle something, that quality of air
            that emanation from old trees, that so wonderfully changes and
            renews a weary spirit.
          </Typography>
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex -space-x-4 overflow-x-auto">
              <Avatar
                variant="circular"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 2"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 3"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 4"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 5"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
              />
            </div>
            <div className="mt-6 md:mt-0 md:ml-6 text-center md:text-left">
              <Typography
                color="blue-gray"
                className="flex items-center text-white justify-center md:justify-start"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                Trustpilot
              </Typography>
              <div className="flex items-center justify-center md:justify-start mt-3 text-white">
                <Rating value={4} readonly />
                <p className="ml-2">4/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosul;
