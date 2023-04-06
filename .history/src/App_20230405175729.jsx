import React from 'react';
import app from "./css/app.module.css";
import navbar from "./css/navbar.module.css";
import background from "./css/background.module.css";
import video from "./assets/videos/1.mp4";
import logo from "./assets/images/logo.png";

function App() {

  const navbarButtons = [
   { name: "Visit", menu: true},
   { name: "Experiences", menu: true},
   { name: "Get involved", menu: true},
   { name: "Animals", menu: false},
   { name: "News", menu: false},
    ];
    
  const navbarTopButtons = [
    "About us",
    "Education",
    "Donate",
    "Shop"
    ];

  return (
    <div className={app.app}>

      <div className={navbar.navbar}>
        <img className={navbar.logo} src={logo} alt=""/>
        <div>
          <div className={navbar.navbarTopButtons}>
            {navbarTopButtons.map(item => 
            <div className={navbar.navbarTopButton}>{item}</div>
            )}
          </div>
          <div className={navbar.navbarButtons}>
            {navbarButtons.map(item => 
            <>
            <div className={navbar.navbarButton}>{item.name + (item.menu ? " ⯆" : "")}</div>
            <div className={navbar.menu}></div>
            </>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
