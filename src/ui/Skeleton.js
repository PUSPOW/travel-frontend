/** @format */

import React from "react";

const Spinner = () => {
  return (
    <div className="h-[400px] w-[400px] mx-auto">
      <dotlottie-player
        src="https://lottie.host/7c907fed-73d0-44b4-9197-505792ef483c/sambbcz3w7.json"
        background="transparent"
        speed="1"
        className="width: 300px; height: 300px;"
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Spinner;
