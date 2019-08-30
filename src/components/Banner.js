import React from "react"
import { FaHeart, FaShoppingCart } from "react-icons/fa"

const Banner = () => {
  return (
    <section className="banner container">
      <div className="banner__content">
        <p className="banner__title">
          <span>Starturr!</span> We do <FaHeart className="banner__heart" /> it
          and hope you too
        </p>
        <button className="banner__btn">
          purchase it now <FaShoppingCart />
        </button>
      </div>
    </section>
  )
}

export default Banner
