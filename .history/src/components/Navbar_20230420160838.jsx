import React, { useState } from "react";
import navbar from "../css/navbar.module.css";
import logo from "../assets/images/logo.png";
import hamburger from "../assets/images/hamburger.png";
import cross from "../assets/images/cross.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarButtons = [
    {
      name: "Home",
      menu: false,
      items: [],
      link: "/",
    },
    {
      name: "Events",
      menu: true,
      items: [
        "Plan Your Day",
        "What's On",
        "Membership",
        "Vet Hospital",
        "Education",
        "Zoo Map",
      ],
      link: "/Events",
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
      link: "/Education",
    },
    {
      name: "Get involved",
      menu: true,
      items: [
        "What We Do",
        "What You Can Do",
        "Work at the Zoo",
        "Volunteer",
        "Sponsorship",
        "Conservation",
      ],
      link: "/Membership",
    },
    {
      name: "Animals",
      menu: false,
      items: [],
      link: "/Animals",
    },
    {
      name: "News",
      menu: false,
      items: [],
      link: "/News",
    },
  ];

  const navbarTopButtons = ["About us", "Donate", "Shop"];

  const [mobileMenu, toggleMobileMenu] = useState(false);

  return (
    <>
      <div className={navbar.navbar}>
        <Link className={navbar.link} to={"/"}>
          <img className={navbar.logo} src={logo} alt="" />
        </Link>
        <div className={navbar.content}>
          <div className={navbar.navbarTopButtons}>
            {navbarTopButtons.map((item, n) => (
              <div className={navbar.navbarTopButton} key={n}>
                {item}
              </div>
            ))}
          </div>
          <div className={navbar.navbarButtons}>
            {navbarButtons.map((item, n) => (
              <div
                style={{
                  display: "block",
                  overflow: "visible",
                }}
                key={n}
              >
                <div className={navbar.navbarButton}>
                  <Link
                    to={item.link}
                    style={{
                      textDecoration: "none",
                      color: "unset",
                    }}
                  >
                    {item.name + (item.menu ? " ⯆" : "")}
                  </Link>
                </div>

                {item.items.length > 0 && (
                  <div className={navbar.navbarButtonDropdown}>
                    {item.items.map((i, n) => (
                      <Link
                        className={navbar.navbarButtonDropdownItem}
                        key={n}
                        to={item.link}
                      >
                        {i}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <img
          className={navbar.mobileButton}
          src={mobileMenu === true ? cross : hamburger}
          onClick={() =>
            mobileMenu === true ? toggleMobileMenu(false) : toggleMobileMenu(true)
          }
          alt=""
        />
        <div
          className={[navbar.mobileMenu, mobileMenu ? navbar.mobileMenuShow : ""].join(
            " "
          )}
        >
          {navbarButtons.map((item) => (
            <Link to={item.link} className={navbar.mobileMenuItem}>
              <div onClick={() => toggleMobileMenu(false)}>{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
