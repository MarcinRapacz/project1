import React, { useState } from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    const href = e.target.href
    const id = href.slice(href.indexOf("#"))
    const element = document.querySelector(id)

    if (!element) return

    const elementScroll = element.offsetTop
    const windowScroll = window.scrollY

    const scroll = (elementScroll - windowScroll) / 10
    for (let i = 0; i < 10; i++) {
      setTimeout(() => window.scrollBy(0, scroll), i * 20)
    }

    setShowMenu(false)
  }

  return (
    <section className="navbar container" id="navbar">
      <h1 className="navbar-logo">
        backtick<span>.pl</span>
      </h1>
      {!showMenu && (
        <div className="navbar-hamburger">
          <FaBars onClick={() => setShowMenu(true)} />
        </div>
      )}
      <ul className={`navbar-list ${showMenu && "navbar-list--show"}`}>
        <li className="navbar-item">
          <Link onClick={handleClick} className="navbar-link" to="/#home">
            home
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleClick} className="navbar-link" to="/#offer">
            offer
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleClick} className="navbar-link" to="/#features">
            features
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleClick} className="navbar-link" to="/#skills">
            skills
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleClick} className="navbar-link" to="/#works">
            works
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleClick} className="navbar-link" to="/#facts">
            facts
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleClick} className="navbar-link" to="/#team">
            team
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleClick} className="navbar-link" to="/#prices">
            prices
          </Link>
        </li>
        <li className="navbar-item">
          <Link onClick={handleClick} className="navbar-link" to="/#contact">
            contact
          </Link>
        </li>
      </ul>
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="navbar-backdrop"
        ></div>
      )}
    </section>
  )
}

export default Navbar
