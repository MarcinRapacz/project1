import React from "react"

const Header = ({ first = {}, second = {} }) => {
  return (
    <h1 className="header">
      <span className="header__line"></span>
      <div className="header__squares">
        <span className="header__square header__square--s"></span>
        <span className="header__square header__square--m"></span>
        <span className="header__square header__square--l"></span>
      </div>
      <p className="header__text">
        <span className={`header__text--${first.color}`}>{first.text}</span>{" "}
        <span className={`header__text--${second.color}`}>{second.text}</span>
      </p>
      <div className="header__squares">
        <span className="header__square header__square--l"></span>
        <span className="header__square header__square--m"></span>
        <span className="header__square header__square--s"></span>
      </div>
      <span className="header__line"></span>
    </h1>
  )
}

export default Header
