import React, { useEffect, useState } from "react";
import app from "../css/app.module.css";
import Paralax from "../components/Paralax";
import Infocard from "../components/Infocard";
import Cards from "../components/Cards";
import background from "../css/background.module.css";

const Main = () => {
  const openingInfos = [
    "OPENING HOURS:",
    "Open daily: 9.30am – 6.00am",
    "Last admission is 5.00pm",
  ];

  const moreInfos = [
    "Find out more about our animals",
    "latest media",
    "Donate our animals",
  ];

  const supportInfos = [
    "Support our ZOO",
    "Check our subscription options",
    "Donate our animals",
  ];

  return (
    <>
      <div style={{ display: "block", position: "relative" }}>
        <Paralax
          height={50}
          multiplier={1}
          background={require("../assets/images/para0.webp")}
          object={require("../assets/images/para1.webp")}
          right={3}
          objectWidth={45}
        />
        <Infocard info={openingInfos} left={"5rem"} right={"unset"} top={"70vh"} />
      </div>

      <div className={app.section}>
        <Cards />
      </div>

      <div style={{ display: "block", position: "relative" }}>
        <video
          loop
          autoPlay
          muted
          className={background.video}
          src={require("../assets/videos/" + Math.floor(Math.random() * 3 + 1) + ".mp4")}
        />
        <Infocard info={supportInfos} left={"unset"} right={"25rem"} top={"25rem"} />
      </div>

      <div style={{ display: "block", position: "relative" }}>
        <Paralax
          height={650}
          multiplier={1}
          background={require("../assets/images/para2.webp")}
          object={require("../assets/images/para4.webp")}
          right={55}
          objectWidth={20}
        />

        <Infocard info={supportInfos} left={"unset"} right={"5rem"} top={"10rem"} />
      </div>
    </>
  );
};

export default Main;
