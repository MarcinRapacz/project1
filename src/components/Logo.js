import React from "react"
import { FaAngleDown } from "react-icons/fa"
import { Link } from "gatsby"

// Components
import Header from "./Header"

const Logo = () => {
  const header = {
    first: { color: "primary", text: "start" },
    second: { color: "dark", text: "doing that" },
  }

  return (
    <header className="logo container">
      <h2 className="logo-header logo-header--h2">What are you waiting for?</h2>
      <h1 className="logo-header logo-header--h1">Let's be creative!</h1>
      <p className="logo-desc">
        <strong>
          <span>U</span>nique,{" "}
        </strong>
        next generation & highly flexible wordpress theme
      </p>
      <Header first={header.first} second={header.second} />
      <Link to="/#" className="logo-link">
        <FaAngleDown className="logo-arrow" />
      </Link>
    </header>
  )
}

export default Logo
