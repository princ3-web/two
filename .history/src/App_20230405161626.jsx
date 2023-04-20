import React from 'react';
import app from "./css/app.module.css";
import navbar from "./css/navbar.module.css";
import video from "./assets/videos"

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
        <div className={navbar.logo}>LOGO</div>
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

    </div>
  );
}

export default App;