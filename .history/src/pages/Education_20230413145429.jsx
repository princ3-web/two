import React from "react";
import subpage from "../css/subpage.module.css";
import headerImage1 from "../assets/images/headerImage1.jpg";
import headerImage2 from "../assets/images/headerImage2.jpg";
import headerImage3 from "../assets/images/headerImage3.jpg";

const Education = () => {

  return (
    <>
      <div className={subpage.section}>
        <img className={subpage.headerImage} src={headerImage1} alt="" />
      </div>
    </>
  );
};

export default Education;
