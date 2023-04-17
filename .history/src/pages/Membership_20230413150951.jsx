import React from "react";
import subpage from "../css/subpage.module.css";

const Membership = () => {
  return (
    <>
      <div className={subpage.section}>
        <img
          className={subpage.headerImage}
          src={require("../assets/images/headerImage" + Math.floor(Math.random() * 3 + 1) + ".jpg")}
          alt=""
        />
      </div>
    </>
  );
};

export default Membership;
