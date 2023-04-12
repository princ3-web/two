import React from "react";

const Main = () => {
  return (
    <div>
      <video loop autoPlay muted className={background.video} src={video} />
      <div className={openingInfo.openingInfo}>
        {openingInfos.map((item) => (
          <div className={openingInfo.text}>{item}</div>
        ))}
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
    </div>
  );
};

export default Main;
