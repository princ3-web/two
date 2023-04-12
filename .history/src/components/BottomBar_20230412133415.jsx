import React from "react";
import bottombar from "../css/bottombar.module.css";
import logobw from "../assets/images/logobw.png";

const Bottombar = () => {
  const socials = [instagram, facebook, tiktok, youtube];
  const links = ["CONTACT", "ZOO", "TRUST", "SITEMAP", "CAREERS", "MEDIA"];

  return (
    <>
      <div className={bottombar.bottomBar}>
        <div className={bottombar.socials}>
          {socials.map((item) => (
            <img className={bottombar.socialButton} src={item} alt="" />
          ))}
        </div>
        <div className={bottombar.links}>
          {links.map((item) => (
            <div className={bottombar.link}>{item}</div>
          ))}
        </div>
        <img className={bottombar.logo} src={logobw} alt="" onClick={() => window.scrollTo(0, 0)} />
        <div className={bottombar.signature}>web design by princ3</div>
      </div>
    </>
  );
};

export default Bottombar;
