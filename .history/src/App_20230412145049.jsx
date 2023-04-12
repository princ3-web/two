import React, { useState } from "react";
import app from "./css/app.module.css";
import Navbar from "./components/Navbar.jsx";
import Bottombar from "./components/Bottombar.jsx";
import Main from "./pages/Main.jsx";
import Switch

function App() {
  return (

      <div className={app.app}>
        <Navbar />
        <Switch></Switch>
        <Main />
        <Bottombar />
      </div>

  );
}

export default App;
