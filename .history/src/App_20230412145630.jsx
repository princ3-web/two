import React, { useState } from "react";
import app from "./css/app.module.css";
import Navbar from "./components/Navbar.jsx";
import Bottombar from "./components/Bottombar.jsx";
import Main from "./pages/Main.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={app.app}>
      <Routes>
        <Route path="/" element={<Main/>} exact />
      </Routes>
    </div>
  );
}

export default App;
