import React from "react"
import { FaCaretUp } from "react-icons/fa"

import Decorator from "./Decorator"

const Footer = () => {
  const date = new Date().getFullYear()

  const handleClick = e => {
    e.preventDefault()
    const element = document.querySelector("#home")

    if (!element) return

    const elementScroll = element.offsetTop
    const windowScroll = window.scrollY

    const scroll = (elementScroll - windowScroll) / 10
    for (let i = 0; i < 10; i++) {
      setTimeout(() => window.scrollBy(0, scroll), i * 20)
    }
  }

  return (
    <footer className="container footer">
      <Decorator onClick={handleClick} pulse>
        <FaCaretUp />
      </Decorator>
      <p className="footer__desc">
        Marcin Rapacz &copy; {date} - wykonano na podstawie szablonu
        znalezionego w sieci w celach edukacyjnych
      </p>
    </footer>
  )
}

export default Footer
