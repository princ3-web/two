import React from 'react';

const Infocard = (prop) => {
  return (
    <div className={Infocard.openingInfo}>
        {openingInfos.map((item, n) => (
          <div className={Infocard.text} key={n}>
            {item}
          </div>
        ))}
      </div>
  )
}

export default Infocard;