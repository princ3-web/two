import React from 'react';
import app from "./css/app.module.css";
import navbar from "./css/navbar.module.css";
import background from "./css/background.module.css";
import video from "./assets/videos/1.mp4";

function App() {

  const navbarButtons = [
    "Visit",
    "Experiences",
    "Get involved",
    "Animals",
    "News"
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
        <img className={navbar.logo} src={logo} alt="">
        <div>
          <div className={navbar.navbarTopButtons}>
            {navbarTopButtons.map(item => 
            <div className={navbar.navbarTopButton}>{item}</div>
            )}
          </div>
          <div className={navbar.navbarButtons}>
            {navbarButtons.map(item => 
            <div className={navbar.navbarButton}>{item}</div>
            )}
          </div>
        </div>
      </div>

      <video autoPlay muted className={background.video} src={video}/>
    </div>
  );
}

export default App;
