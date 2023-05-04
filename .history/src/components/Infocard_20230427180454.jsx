import React from 'react';

const Infocard = (props) => {
  return (
    <div className={Infocard.openingInfo}>
        {infos.map((item, n) => (
          <div className={Infocard.text} key={n}>
            {item}
          </div>
        ))}
      </div>
  )
}

export default Infocard;