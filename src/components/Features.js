import React from "react"
import { FaDesktop, FaPuzzlePiece, FaStar, FaKey } from "react-icons/fa"

import Header from "./Header"
import Decorator from "./Decorator"

const Features = () => {
  const header = {
    first: { color: "secondary", text: "amazing" },
    second: { color: "primary", text: "features" },
  }

  return (
    <section className="features container" id="features">
      <Decorator>
        <FaKey className="decorator__icon" />
      </Decorator>
      <Header first={header.first} second={header.second} />
      <p className="features__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        magni a. Quam laborum nihil mollitia nemo corrupti error!
      </p>
      <div className="features__content">
        <div className="features__list">
          <div className="features__item item">
            <FaDesktop className="item__icon" />
            <h1 className="item__title">responsive & multipurpose</h1>
            <p className="item__desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              dignissimos quam laudantium?
            </p>
          </div>
          <div className="features__item item">
            <FaPuzzlePiece className="item__icon" />
            <h1 className="item__title">easy customization</h1>
            <p className="item__desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              dignissimos quam laudantium?
            </p>
          </div>
          <div className="features__item item">
            <FaStar className="item__icon" />
            <h1 className="item__title">unlimited features</h1>
            <p className="item__desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              dignissimos quam laudantium?
            </p>
          </div>
        </div>
        <div className="features__img"></div>
      </div>
    </section>
  )
}

export default Features
