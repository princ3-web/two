import React from 'react';
import InfocardStyle from "../css/Infocard.module.css";

const Infocard = (props) => {
  return (
    <div className={InfocardStyle.openingInfo} style={{left: props}}>
        {props.info.map((item, n) => (
          <div className={InfocardStyle.text} key={n}>
            {item}
          </div>
        ))}
      </div>
  )
}

export default Infocard;