import React from "react";
import subpage from "../css/subpage.module.css";

const Education = () => {
  return (
    <>
      <div className={subpage.section}>
        <div className={subpage.headerImageWrapper}>
          <img
            className={subpage.headerImage}
            src={require("../assets/images/headerImage" + Math.floor(Math.random() * 10 + 1) + ".jpg")}
            alt=""
          />
          <div className={subpage.title}>Events</div>
        </div>
      </div>
    </>
  );
};

export default Education;
