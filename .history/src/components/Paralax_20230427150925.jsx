import React from "react";
import paralax from "../css/paralax.module.css";

const Paralax = () => {
  return (
    <div className={paralax.paralax}>
      <img
        className={paralax.paralaxBackground}
        src={paralaxBackground}
        style={{ top: scrollPos / 4 - 450 + "px" }}
        alt=""
      />
      <img className={paralax.paralaxObject} src={paralaxObject} alt="" />
    </div>
  );
};

export default Paralax;
