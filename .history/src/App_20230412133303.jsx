import React, { useState } from "react";
import app from "./css/app.module.css";
import instagram from "./assets/images/instagram.png";
import facebook from "./assets/images/facebook.png";
import tiktok from "./assets/images/tiktok.png";
import youtube from "./assets/images/youtube.png";
import Main from "./pages/Main.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const socials = [instagram, facebook, tiktok, youtube];
  const links = ["CONTACT", "ZOO", "TRUST", "SITEMAP", "CAREERS", "MEDIA"];

  return (
    <div className={app.app}>
      <Navbar />
      <Main />
      <Bottombar />


    </div>
  );
}

export default App;
