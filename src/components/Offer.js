import React from "react"
import Header from "./Header"

import { FaDesktop, FaPuzzlePiece, FaUserCircle } from "react-icons/fa"

const Offer = () => {
  const header = {
    first: { color: "dark", text: "what we" },
    second: { color: "primary", text: "offer" },
  }

  return (
    <section className="container offer">
      <Header first={header.first} second={header.second} />
      <p className="offer-desc">
        We offer our customers the bestg services & solutions, this is our main
        services list
      </p>
      <div className="offer-items">
        <div className="item">
          <div className="item-icon-container">
            <FaDesktop className="item-icon" />
          </div>
          <h1 className="item-title">Responsive & Multipurpose</h1>
          <p className="item-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium consequatur odit illo nesciunt nulla? Fuga, nisi.
          </p>
          <button className="item-btn">Read more</button>
        </div>
        <div className="item">
          <div className="item-icon-container item-icon-container--primary">
            <FaPuzzlePiece className="item-icon" />
          </div>
          <h1 className="item-title">Easy customization</h1>
          <p className="item-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium consequatur odit illo nesciunt nulla? Fuga, nisi.
          </p>
          <button className="item-btn">Read more</button>
        </div>
        <div className="item">
          <div className="item-icon-container">
            <FaUserCircle className="item-icon" />
          </div>
          <h1 className="item-title">Awsome friendly support</h1>
          <p className="item-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam optio
            quaerat alias, quae assumenda temporibus dolor.
          </p>
          <button className="item-btn">Read more</button>
        </div>
      </div>
    </section>
  )
}

export default Offer
