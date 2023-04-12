import React, { useState } from "react";
import app from "./css/app.module.css";
import Navbar from "./components/Navbar.jsx";
import Bottombar from "./components/Bottombar.jsx";
import Main from "./pages/Main.jsx";
import Events from "./pages/Events.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={app.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} exact />
        <Route path="/Events" element={<Events/>} exact />
        <Route path="/Education" element={<Education/>} exact />
        <Route path="/Membership" element={<Membership/>} exact />
      </Routes>
      <Bottombar />
    </div>
  );
}

export default App;
