/** @format */

import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const Cabinfind = () => {
  return (
    <div>
      <div className="relative h-[600px] w-full ">
        <img
          src="https://images.pexels.com/photos/6129991/pexels-photo-6129991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image 2"
          className="h-[600px] w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-start items-center bg-black/50">
          <div className="w-3/4 pl-12 mt-20 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Escape from endless zoom calls{" "}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Descover the wonders of spending time offline and away from the
              office with our 3 day weekend gataway cabin retreats.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              <Button color="green">Find the perfect getaway </Button>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabinfind;
