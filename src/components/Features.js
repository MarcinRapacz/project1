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
        <FaKey className="decorator-icon" />
      </Decorator>
      <Header first={header.first} second={header.second} />
      <p className="features-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        magni a. Quam laborum nihil mollitia nemo corrupti error!
      </p>
      <div className="features-content">
        <div className="features-list">
          <div className="features-item item">
            <FaDesktop className="item-icon" />
            <h1 className="item-title">responsive & multipurpose</h1>
            <p className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              dignissimos quam laudantium?
            </p>
          </div>
          <div className="features-item item">
            <FaPuzzlePiece className="item-icon" />
            <h1 className="item-title">easy customization</h1>
            <p className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              dignissimos quam laudantium?
            </p>
          </div>
          <div className="features-item item">
            <FaStar className="item-icon" />
            <h1 className="item-title">unlimited features</h1>
            <p className="item-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              dignissimos quam laudantium?
            </p>
          </div>
        </div>
        <div className="features-img"></div>
      </div>
    </section>
  )
}

export default Features
