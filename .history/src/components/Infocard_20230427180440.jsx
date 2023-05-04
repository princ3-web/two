import React from 'react';

const Infocard = () => {
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