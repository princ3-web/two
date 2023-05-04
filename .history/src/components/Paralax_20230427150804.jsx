import React from 'react'

const Paralax = () => {
  return (
    <div className={app.paralax}>
    <img
      className={app.paralaxBackground}
      src={paralaxBackground}
      style={{ top: scrollPos / 4 - 450 + "px" }}
      alt=""
    />
    <img className={app.paralaxObject} src={paralaxObject} alt="" />
  </div>
  )
}

export default Paralax