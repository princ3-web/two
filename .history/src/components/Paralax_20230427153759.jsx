import React, { useEffect, useState } from "react";
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
        src={props.background}
        style={{ top: scrollPos / 4 * m - props.height + "px"}}
        alt=""
      />
      <img
        className={paralax.paralaxObject}
        src={props.object}
        style={{ right: props.right + "rem", width: props.width + "%"  }}
        alt=""
      />
    </div>
  );
};

export default Paralax;
