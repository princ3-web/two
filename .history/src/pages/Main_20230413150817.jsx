import React from "react";
import app from "../css/app.module.css";
import background from "../css/background.module.css";
import openingInfo from "../css/openingInfo.module.css";
import card from "../css/card.module.css";
import video1 from "../assets/videos/1.mp4";
import video2 from "../assets/videos/2.mp4";
import video3 from "../assets/videos/3.mp4";
import { Link } from "react-router-dom";

const Main = () => {
  const openingInfos = ["OPENING HOURS:", "Open daily from 9.30am – 6.00 AM", "Last admission is 5.00 PM"];


  return (
    <>
      <video loop autoPlay muted className={background.video} src={require("../assets/videos/" + Math.floor(Math.random()*3 + 1) + ".mp4")} />

      <div className={openingInfo.openingInfo}>
        {openingInfos.map((item, n) => (
          <div className={openingInfo.text} key={n}>{item}</div>
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
    </>
  );
};

export default Main;
