import React from "react"
import Header from "./Header"

import { FaDesktop, FaPuzzlePiece, FaUserCircle } from "react-icons/fa"

const Offer = () => {
  const header = {
    first: { color: "dark", text: "what we" },
    second: { color: "primary", text: "offer" },
  }

  return (
    <section className="container offer" id="offer">
      <Header first={header.first} second={header.second} />
      <p className="offer__desc">
        We offer our customers the bestg services & solutions, this is our main
        services list
      </p>
      <div className="offer__items">
        <div className="item">
          <div className="item__icon-container">
            <FaDesktop className="item__icon" />
          </div>
          <h1 className="item__title">Responsive & Multipurpose</h1>
          <p className="item__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium consequatur odit illo nesciunt nulla? Fuga, nisi.
          </p>
          <button className="item__btn">Read more</button>
        </div>
        <div className="item">
          <div className="item__icon-container item__icon-container--primary">
            <FaPuzzlePiece className="item__icon" />
          </div>
          <h1 className="item__title">Easy customization</h1>
          <p className="item__desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium consequatur odit illo nesciunt nulla? Fuga, nisi.
          </p>
          <button className="item__btn">Read more</button>
        </div>
        <div className="item">
          <div className="item__icon-container">
            <FaUserCircle className="item__icon" />
          </div>
          <h1 className="item__title">Awsome friendly support</h1>
          <p className="item__desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam optio
            quaerat alias, quae assumenda temporibus dolor.
          </p>
          <button className="item__btn">Read more</button>
        </div>
      </div>
    </section>
  )
}

export default Offer
