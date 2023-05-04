import React from 'react';
import Infocard from "../css/Infocard.module.css";


const Infocard = (props) => {
  return (
    <div className={Infocard.openingInfo}>
        {props.info.map((item, n) => (
          <div className={Infocard.text} key={n}>
            {item}
          </div>
        ))}
      </div>
  )
}

export default Infocard;