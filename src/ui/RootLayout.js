/** @format */

import React from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <ToastContainer
        autoClose={1000}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
    </>
  );
};

export default RootLayout;
