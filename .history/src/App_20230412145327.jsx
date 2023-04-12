import React, { useState } from "react";
import app from "./css/app.module.css";
import Navbar from "./components/Navbar.jsx";
import Bottombar from "./components/Bottombar.jsx";
import Main from "./pages/Main.jsx";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className={app.app}>
      <Navbar />
      <Routes>
        <Route path="/" component={Main} exact />
      </Routes>
      <Bottombar />
    </div>
  );
}

export default App;
