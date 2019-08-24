import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <section className="navbar container">
      <h1 className="navbar-logo">Logo</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/#home">
            home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/#offer">
            offer
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/#features">
            features
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/#skills">
            skills
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/#works">
            works
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/#facts">
            facts
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/#team">
            team
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/#prices">
            prices
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/#contact">
            contact
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Navbar
