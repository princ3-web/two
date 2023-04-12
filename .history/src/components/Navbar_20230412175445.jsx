import React from "react";
import navbar from "../css/navbar.module.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarButtons = [
    {
      name: "Events",
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
    <>
      <div className={navbar.navbar}>
        <Link className={navbar.link} to={"/"}>
          <img className={navbar.logo} src={logo} alt="" />
        </Link>
        <div>
          <div className={navbar.navbarTopButtons}>
            {navbarTopButtons.map((item, n) => (
              <div className={navbar.navbarTopButton} key={n}>{item}</div>
            ))}
          </div>
          <div className={navbar.navbarButtons}>
            {navbarButtons.map((item, n) => (
              <div style={{ display: "block", overflow: "visible" }} key={n}>
                <div className={navbar.navbarButton}>{item.name + (item.menu ? " ⯆" : "")}</div>

                {item.items.length > 0 && (
                  <div className={navbar.navbarButtonDropdown}>
                    {item.items.map((i, n) => (
                      <div className={navbar.navbarButtonDropdownItem} key = {n}>{i}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
