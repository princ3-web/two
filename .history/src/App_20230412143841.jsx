import React, { useState } from "react";
import app from "./css/app.module.css";
import Navbar from "./components/Navbar.jsx";
import Bottombar from "./components/Bottombar.jsx";
import Main from "./pages/Main.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
    <div className={app.app}>
      <Navbar />
      <Main />
      <Bottombar />
    </div>
  );
}

export default App;
