/** @format */

import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./ui/RootLayout";
import Home from "./ui/Home";
import Login from "./features/auth/Login";
import SignUp from "./features/auth/SignUp";
import UserRoutes from "./ui/UserRoutes";
import Detail from "./ui/Detail";
import AdminProducts from "./features/admin/ProductAdmin";
import ProductForm from "./features/admin/ProductForm";
import ProductEdit from "./features/admin/ProductEdit/ProductEdit";
import CartPage from "./features/user/CartPage";
import UserProfile from "./features/user/UserProfile";
import AdminRoutes from "./ui/AdminRoutes";
import UserSecRoutes from "./ui/UserSecRoutes";
import OrderDetail from "./features/orders/OrderDetail";
import SearchPage from "./ui/SearchPage";
import AllCards from "./ui/AllCards";
import Video from "./ui/Video";
import Finding from "./ui/Finding";
import AboutUs from "./ui/AboutUs";
import Contact from "./ui/Contact";

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "product/:id", element: <Detail /> },

        {
          element: <UserRoutes />,
          children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <SignUp /> },
          ],
        },

        {
          element: <AdminRoutes />,
          children: [
            { path: "allProducts", element: <AdminProducts /> },
            { path: "add-Products", element: <ProductForm /> },
            { path: "edit-Products/:id", element: <ProductEdit /> },
          ],
        },

        {
          element: <UserSecRoutes />,
          children: [
            { path: "carts", element: <CartPage /> },
            { path: "userProfile", element: <UserProfile /> },
            { path: "orders/:id", element: <OrderDetail /> },
          ],
        },
        {
          path: "/search-page/:query/:startDate/:endDate/:people/:rooms",
          element: <SearchPage />,
        },
        { path: "all-cards", element: <AllCards /> },
        { path: "questions-section", element: <Video /> },
        { path: "video", element: <Finding /> },
        { path: "about", element: <AboutUs /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
