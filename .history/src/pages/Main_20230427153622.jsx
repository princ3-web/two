import React, { useEffect, useState } from "react";
import app from "../css/app.module.css";
import openingInfo from "../css/openingInfo.module.css";
import card from "../css/card.module.css";
import { Link } from "react-router-dom";
import Paralax from "../components/Paralax";

const Main = () => {
  const openingInfos = [
    "OPENING HOURS:",
    "Open daily: 9.30am – 6.00am",
    "Last admission is 5.00pm",
  ];

  const cards = [
    {
      title: "Events",
      text: "Find information on upcoming events at the zoo, such as animal feedings, live shows, and educational programs.",
      img: require("../assets/images/image1.jpg"),
      link: "/Events",
    },
    {
      title: "Education",
      text: "Search resources and information for teachers, students, and other educational groups who are interested in visiting the zoo and learning about animals and their habitats.",
      img: require("../assets/images/image2.jpg"),
      link: "/Education",
    },
    {
      title: "Membership",
      text: "Information on the different membership options available to zoo visitors, annual passes and special benefits such as free admission and discounts on zoo merchandise.",
      img: require("../assets/images/image3.jpg"),
      link: "/Membership",
    },
    {
      title: " Our animals",
      text: "Check our different animal species that are on display in the zoo, infos about the exhibits and habitats that have been created to replicate their natural environments.",
      img: require("../assets/images/image4.jpg"),
      link: "/Animals",
    },
    {
      title: "Latest news",
      text: "Stay updated with the most recent information on our animals, personnel, veterinary hospital, and our participation in conservation fieldwork in Tanzania.",
      img: require("../assets/images/image5.jpg"),
      link: "/News",
    },
    {
      title: "Support our ZOO",
      text: "Discover our programs to support our work and provide well-being for our pets.",
      img: require("../assets/images/image6.jpg"),
      link: "/Support",
    },
  ];

  return (
    <>
      <Paralax
        height={50}
        background={require("../assets/images/para0.png")}
        object={require("../assets/images/para1.png")}
        right={2}
        width={50}
      />

      <div className={openingInfo.openingInfo}>
        {openingInfos.map((item, n) => (
          <div className={openingInfo.text} key={n}>
            {item}
          </div>
        ))}
      </div>

      <div className={app.section}>
        <div className={card.cardContainer}>
          {cards.map((item, n) => (
            <div className={card.card} key={n}>
              <Link to={item.link} className={card.link}>
                <img className={card.cardImage} src={item.img} alt="" />
                <div className={card.cardText}>
                  <div className={card.cardTextTitle}>{item.title}</div>
                  <div className={card.cardTextContent}>{item.text}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Paralax
        height={450}
        background={require("../assets/images/para2.png")}
        object={require("../assets/images/para3.png")}
        right={0}
        width={30}
      />
    </>
  );
};

export default Main;
