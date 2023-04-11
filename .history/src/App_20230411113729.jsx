import React, { useState } from "react";
import app from "./css/app.module.css";
import navbar from "./css/navbar.module.css";
import background from "./css/background.module.css";
import openingInfo from "./css/openingInfo.module.css";
import card from "./css/card.module.css";
import bottombar from "./css/bottombar.module.css";
import video from "./assets/videos/1.mp4";
import logo from "./assets/images/logo.png";
import instagram from "./assets/images/instagram.png";
import facebook from "./assets/images/facebook.png";
import tiktok from "./assets/images/tiktok.png";
import youtube from "./assets/images/youtube.png";

function App() {
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

  const cards = [
    {
      title: "Events",
      text: "Find information on upcoming events at the zoo, such as animal feedings, live shows, and educational programs.",
      img: require("./assets/images/image1.jpg"),
    },
    {
      title: "Education",
      text: "Search resources and information for teachers, students, and other educational groups who are interested in visiting the zoo and learning about animals and their habitats.",
      img: require("./assets/images/image2.jpg"),
    },
    {
      title: "Membership",
      text: "This subpage provides information on the different membership options available to zoo visitors, including annual passes and special benefits such as free admission and discounts on zoo merchandise.",
      img: require("./assets/images/image3.jpg"),
    },
    {
      title: " Our animals",
      text: "Check our different animal species that are on display in the zoo, as well as information about the exhibits and habitats that have been created to replicate their natural environments.",
      img: require("./assets/images/image4.jpg"),
    },
    {
      title: "Latest news",
      text: "Stay updated with the most recent information on our animals, personnel, veterinary hospital, and our participation in conservation fieldwork in Tanzania.",
      img: require("./assets/images/image5.jpg"),
    },
    {
      title: "Support our ZOO",
      text: "Discover our programs to support our work and provide well-being for our pets.",
      img: require("./assets/images/image6.jpg"),
    },
  ];

  const socials = [
    
  ]

  return (
    <div className={app.app}>
      <div className={navbar.navbar}>
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
                <div className={navbar.navbarButton}>{item.name + (item.menu ? " ⯆" : "")}</div>

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
      <div className={openingInfo.openingInfo}>
        <div className={openingInfo.text}>OPENING HOURS:</div>
        <div className={openingInfo.text}>Open daily from 9.30am – 6.00 AM</div>
        <div className={openingInfo.text}>Last admission is 5.00 PM</div>
      </div>
      <div className={app.section}>
        <div className={card.cardContainer}>
          {cards.map((item) => (
            <div className={card.card}>
              <img className={card.cardImage} src={item.img} alt="" />
              <div className={card.cardText}>
                <div className={card.cardTextTitle}>{item.title}</div>
                <div className={card.cardTextContent}>{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={bottombar.bottom}>
        <div className={bottombar.socials}>
          {<img className={bottombar.socialButton} src={""}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
