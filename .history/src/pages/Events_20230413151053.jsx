import React from "react";
import subpage from "../css/subpage.module.css";

const Events = () => {
  return (
    <>
      <div className={subpage.section}>
        <img
          className={subpage.headerImage}
          src={require("../assets/images/headerImage" + Math.floor(Math.random() * 8 + 1) + ".jpg")}
          alt=""
        />
      </div>
    </>
  );
};

export default Events;
