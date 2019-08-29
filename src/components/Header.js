import React from "react"

const Header = ({ first = {}, second = {} }) => {
  return (
    <h1 className="header">
      <span className="header__square"></span>
      <span className={`header__text header__text--${first.color}`}>
        {first.text}
      </span>{" "}
      <span className={`header__text header__text--${second.color}`}>
        {second.text}
      </span>
      <span className="header__square"></span>
    </h1>
  )
}

export default Header
