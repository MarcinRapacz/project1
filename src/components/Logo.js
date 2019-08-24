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

  const handleClick = e => {
    e.preventDefault()
    const element = document.querySelector("#navbar")

    if (!element) return

    const elementScroll = element.offsetTop
    const windowScroll = window.scrollY

    const scroll = (elementScroll - windowScroll) / 10
    for (let i = 0; i < 10; i++) {
      setTimeout(() => window.scrollBy(0, scroll), i * 20)
    }
  }

  return (
    <header className="logo container" id="home">
      <h2 className="logo-header logo-header--h2">What are you waiting for?</h2>
      <h1 className="logo-header logo-header--h1">Let's be creative!</h1>
      <p className="logo-desc">
        <strong>
          <span>U</span>nique,{" "}
        </strong>
        next generation & highly flexible wordpress theme
      </p>
      <Header first={header.first} second={header.second} />
      <Link to="/#" className="logo-link" onClick={handleClick}>
        <FaAngleDown className="logo-arrow" />
      </Link>
    </header>
  )
}

export default Logo
