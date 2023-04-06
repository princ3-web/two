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
    ]

  return (
    <div className={app.app}>

      <div className={navbar.navbar}>
          <div className={navbar.navbarButtons}>
            {navbarButtons.map(item => 
            <div className={navbar.navbarButton}>{item}</div>
            )
            }
          </div>
      </div>

    </div>
  );
}

export default App;
