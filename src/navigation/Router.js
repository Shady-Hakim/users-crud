import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Users from "../components/dashboard/users";
import SingleUser from "../components/dashboard/users/singleUser";
import UserAuth from "../pages/authPage";
import ErrorPage from "../pages/errorPage";

const isLoggedIn = localStorage.getItem("isLoggedIn");

const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn ? <Navigate to='/users' /> : <UserAuth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: isLoggedIn ? <Users /> : <Navigate to='/' />,
  },
  {
    path: "/users/:userId",
    element: isLoggedIn ? <SingleUser /> : <Navigate to='/' />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
