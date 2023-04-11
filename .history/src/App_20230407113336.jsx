import React, { useState } from "react";
import app from "./css/app.module.css";
import navbar from "./css/navbar.module.css";
import background from "./css/background.module.css";
import video from "./assets/videos/1.mp4";
import logo from "./assets/images/logo.png";

function App() {
  const [menu, toggleMenu] = useState(false);

  const navbarButtons = [
    {
      name: "Visit",
      menu: true,
      items: ["Plan Your Day", "What's On", "Membership", "Vet Hospital", "Education", "Zoo Map"],
    },
    {
      name: "Education",
      menu: true,
      items: [
        "Read for Adventure",
        "Educational Field Trips",
        "Self-Guided Field Trips",
        "Nature Explorers Preschool",
        "Schools Out Day Camps",
        "Spring Break Camp",
        "Summer Camps",
        "After Hours",
        "Conservation Club",
      ],
    },
    {
      name: "Get involved",
      menu: true,
      items: ["What We Do", "What You Can Do", "Work at the Zoo", "Volunteer", "Sponsorship", "Conservation"],
    },
    { name: "Animals", menu: false, items: [] },
    { name: "News", menu: false, items: [] },
  ];

  const navbarTopButtons = ["About us", "Education", "Donate", "Shop"];

  return (
    <div className={app.app}>
      <div className={navbar.navbar} onMouseLeave={() => toggleMenu(false)}>
        <img className={navbar.logo} src={logo} alt="" />
        <div>
          <div className={navbar.navbarTopButtons}>
            {navbarTopButtons.map((item) => (
              <div className={navbar.navbarTopButton}>{item}</div>
            ))}
          </div>
          <div className={navbar.navbarButtons}>
            {navbarButtons.map((item) => (
              <div style={{ display: "block", overflow: "visible" }}>
                <div
                  className={navbar.navbarButton}
                  onMouseOver={() => (item.menu ? toggleMenu(true) : toggleMenu(false))}
                >
                  {item.name + (item.menu ? " ⯆" : "")}
                </div>

                {item.items.length > 0 && (
                  <div className={navbar.navbarButtonDropdown}>
                    {item.items.map((i) => (
                      <div className={navbar.navbarButtonDropdownItem}>{i}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <video loop autoPlay muted className={background.video} src={video} />
      <div className={background.openingInfo}>
        <div>OPENING HOURS: Open daily from 9.30am – 6.00pm</div>
        <div>Last admission is 5.00pm</div>
      </div>
      <div className={background.whitespace}></div>
    </div>
  );
}

export default App;
