import React, { useEffect, useState } from "react";
import app from "../css/app.module.css";
import Paralax from "../components/Paralax";
import Infocard from "../components/Infocard";
import Cards from "../components/Cards";

const Main = () => {
  const openingInfos = [
    "OPENING HOURS:",
    "Open daily: 9.30am – 6.00am",
    "Last admission is 5.00pm",
  ];

  return (
    <>
      <Paralax
        height={50}
        multiplier={1}
        background={require("../assets/images/para0.webp")}
        object={require("../assets/images/para1.webp")}
        right={2}
        width={50}
      />

      <Infocard info={openingInfos} />

      <div className={app.section}>
        <Cards />
      </div>

      <Paralax
        height={450}
        multiplier={1}
        background={require("../assets/images/para2.webp")}
        object={require("../assets/images/para4.webp")}
        right={55}
        width={20}
      />
    </>
  );
};

export default Main;
