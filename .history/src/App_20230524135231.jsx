import React, { useState, useEff } from "react";
import { Routes, Route } from "react-router-dom";
import app from "./css/app.module.css";
import Navbar from "./components/Navbar.jsx";
import Bottombar from "./components/Bottombar.jsx";
import Main from "./pages/Main.jsx";
import Events from "./pages/Events.jsx";
import Education from "./pages/Education.jsx";
import Membership from "./pages/Membership.jsx";
import Animals from "./pages/Animals.jsx";
import News from "./pages/News.jsx";
import Support from "./pages/Support.jsx";
import Scrolltotop from "./components/Scrolltotop";

function App() {

    const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading process with a timer
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the duration of the loading process

    // Cleanup function to clear the timer
    return () => clearTimeout(loadingTimer);
  }, []);


  return (
    <div className={app.app}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/Events" element={<Events />} exact />
        <Route path="/Education" element={<Education />} exact />
        <Route path="/Membership" element={<Membership />} exact />
        <Route path="/Animals" element={<Animals />} exact />
        <Route path="/News" element={<News />} exact />
        <Route path="/Support" element={<Support />} exact />
      </Routes>
      <Bottombar />
      <Scrolltotop />
    </div>
  );
}

export default App;
