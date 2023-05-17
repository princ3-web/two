import React, { useEffect, useState } from "react";
import paralax from "../css/paralax.module.css";

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
        style={{ top: (scrollPos / 4) * props.multiplier - props.height + "px" }}
        alt=""
      />
      <img
        className={paralax.paralaxObject}
        src={props.object}
        style={{ right: props.right + "rem", width: props.objectWidth + "%" }}
        alt=""
      />
    </div>
  );
};

export default Paralax;
