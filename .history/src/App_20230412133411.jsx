import React, { useState } from "react";
import app from "./css/app.module.css";
import instagram from "./assets/images/instagram.png";
import facebook from "./assets/images/facebook.png";
import tiktok from "./assets/images/tiktok.png";
import youtube from "./assets/images/youtube.png";
import Main from "./pages/Main.jsx";
import Navbar from "./components/Navbar.jsx";
import Bottombar from "./components/Bottombar.jsx";

function App() {


  return (
    <div className={app.app}>
      <Navbar />
      <Main />
      <Bottombar />


    </div>
  );
}

export default App;
