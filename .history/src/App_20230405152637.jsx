import React from 'react';
import app from "./css/app.module.css";
import navbar from "./css/navbar.module.css";

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
"Education"
Donate
Shop
      ];

  return (
    <div className={app.app}>

      <div className={navbar.navbar}>
        <div className={navbar.logo}></div>
        <div className={navbar.navbarButtons}>
          {navbarButtons.map(item => 
          <div className={navbar.navbarButton}>{item}</div>
          )}
        </div>
      </div>

    </div>
  );
}

export default App;