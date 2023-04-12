import React, { useState } from "react";
import app from "./css/app.module.css";


import bottombar from "./css/bottombar.module.css";
import logobw from "./assets/images/logobw.png";
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

      <div className={bottombar.bottomBar}>
        <div className={bottombar.socials}>
          {socials.map((item) => (
            <img className={bottombar.socialButton} src={item} alt="" />
          ))}
        </div>
        <div className={bottombar.links}>
          {links.map((item) => (
            <div className={bottombar.link}>{item}</div>
          ))}
        </div>
        <img className={bottombar.logo} src={logobw} alt="" onClick={() => window.scrollTo(0, 0)} />
        <div className={bottombar.signature}>web design by princ3</div>
      </div>
    </div>
  );
}

export default App;
