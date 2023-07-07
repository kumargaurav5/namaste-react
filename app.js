import React from "react"
import ReactDOM  from "react-dom/client"
import { useState, useEffect } from "react";
import Header from "./Components/header";
import Body from "./Components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./Components/contact";
import About from "/Components/about";
import RestaurantMenu from "./Components/RestaurantMenu";

const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
      <Outlet/>

    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[

    { path: "/",
      element: <Body/>
    },

    {
      path: "/about",
      element: <About/>,
    },

    {
      path: "/contact",
      element: <Contact/>,
    },

    {
      path: "/restaurant/:id",
      element: <RestaurantMenu/>,
    },
  ]

  },



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
