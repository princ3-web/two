import React from 'react';
import card from "../css/card.module.css";
import { Link } from "react-router-dom";

const Cards = () => {

    const cards = [
        {
          title: "Events",
          text: "Find information on upcoming events at the zoo, such as animal feedings, live shows, and educational programs.",
          img: require("../assets/images/image1.webp"),
          link: "/Events",
        },
        {
          title: "Education",
          text: "Search resources and information for teachers, students, and other educational groups who are interested in visiting the zoo and learning about animals and their habitats.",
          img: require("../assets/images/image2.webp"),
          link: "/Education",
        },
        {
          title: "Membership",
          text: "Information on the different membership options available to zoo visitors, annual passes and special benefits such as free admission and discounts on zoo merchandise.",
          img: require("../assets/images/image3.webp"),
          link: "/Membership",
        },
        {
          title: " Our animals",
          text: "Check our different animal species that are on display in the zoo, infos about the exhibits and habitats that have been created to replicate their natural environments.",
          img: require("../assets/images/image4.webp"),
          link: "/Animals",
        },
        {
          title: "Latest news",
          text: "Stay updated with the most recent information on our animals, personnel, veterinary hospital, and our participation in conservation fieldwork in Tanzania.",
          img: require("../assets/images/image5.webp"),
          link: "/News",
        },
        {
          title: "Support our ZOO",
          text: "Discover our programs to support our work and provide well-being for our pets.",
          img: require("../assets/images/image6.webp"),
          link: "/Support",
        },
      ];
      
  return (
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
  )
}

export default Cards