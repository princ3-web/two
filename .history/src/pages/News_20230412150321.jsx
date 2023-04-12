import React from "react";
import app from "../css/app.module.css";
import card from "../css/card.module.css";

const News = () => {


    const cards = [
      {
        title: "Events",
        text: "Find information on upcoming events at the zoo, such as animal feedings, live shows, and educational programs.",
        img: require("../assets/images/image1.jpg"),
      },
      {
        title: "Education",
        text: "Search resources and information for teachers, students, and other educational groups who are interested in visiting the zoo and learning about animals and their habitats.",
        img: require("../assets/images/image2.jpg"),
      },
      {
        title: "Membership",
        text: "This subpage provides information on the different membership options available to zoo visitors, including annual passes and special benefits such as free admission and discounts on zoo merchandise.",
        img: require("../assets/images/image3.jpg"),
      },
      {
        title: " Our animals",
        text: "Check our different animal species that are on display in the zoo, as well as information about the exhibits and habitats that have been created to replicate their natural environments.",
        img: require("../assets/images/image4.jpg"),
      },
      {
        title: "Latest news",
        text: "Stay updated with the most recent information on our animals, personnel, veterinary hospital, and our participation in conservation fieldwork in Tanzania.",
        img: require("../assets/images/image5.jpg"),
      },
      {
        title: "Support our ZOO",
        text: "Discover our programs to support our work and provide well-being for our pets.",
        img: require("../assets/images/image6.jpg"),
      },
    ];

  return (
    <>
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
    </>
  );
};

export default News;
