import React, { useEffect } from "react"
import ReactDOM  from "react-dom/client"
import { useState, useEffect } from "react";
import Header from "./Components/header";
import Card from "./Components/RestaurantsCard";
import Body from "./Components/Body";


const AppLayout=()=>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  )
};

  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(<AppLayout/>);