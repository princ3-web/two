import React from 'react';
import card from "../css/card.module.css";
import { Link } from "react-router-dom";

const Cards = () => {

    
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