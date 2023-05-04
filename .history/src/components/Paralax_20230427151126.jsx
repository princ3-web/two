import React, {useEffect, useState} from "react";
import paralax from "../css/paralax.module.css";
import paralaxBackground from "../assets/images/para0.png";
import paralaxObject from "../assets/images/para1.png";

const Paralax = (props) => {

    const [scrollPos, setScrollPos] = useState(false);

    // useEffect for setting useState: scrollPos
    useEffect(() => {
      const handleMouseMove = () => {
        setScrollPos(window.scrollY);
      };
  
      window.addEventListener("scroll", handleMouseMove);
      return () => {
        window.removeEventListener("scroll", handleMouseMove);
      };
    }, []);

  return (
    <div className={paralax.paralax}>
      <img
        className={paralax.paralaxBackground}
        src={paralaxBackground}
        style={{ top: scrollPos / 4 - props.height + "px" }}
        alt=""
      />
      <img className={paralax.paralaxObject} src={props.image} alt="" />
    </div>
  );
};

export default Paralax;
