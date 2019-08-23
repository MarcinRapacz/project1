import React from "react"

const Header = ({ first = {}, second = {} }) => {
  return (
    <h1 className="header">
      <span className="header-square"></span>
      <span className={`header-text header-text--${first.color}`}>
        {first.text}
      </span>{" "}
      <span className={`header-text header-text--${second.color}`}>
        {second.text}
      </span>
      <span className="header-square"></span>
    </h1>
  )
}

export default Header
