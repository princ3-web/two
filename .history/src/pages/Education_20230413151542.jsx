import React from "react";
import subpage from "../css/subpage.module.css";

const Education = () => {
  return (
    <>
      <div className={subpage.section}>
        <img
          className={subpage.headerImage}
          src={require("../assets/images/headerImage" + Math.floor(Math.random() * 9 + 1) + ".jpg")}
          alt=""
        />
      </div>
    </>
  );
};

export default Education;
