import React from 'react';

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