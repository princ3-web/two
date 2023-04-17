import React from "react";
import subpage from "../css/subpage.module.css";

const Support = () => {
  return (
    <>
       <div className={subpage.section}>
        <div className={subpage.headerImageWrapper}>
          <img
            className={subpage.headerImage}
            src={require("../assets/images/headerImage" + Math.floor(Math.random() * 10 + 1) + ".jpg")}
            alt=""
          />
          <div className={subpage.imageTitle}>Support</div>
        </div>
      </div>
    </>
  );
};

export default Support;
