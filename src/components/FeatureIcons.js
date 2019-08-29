import React from "react"
import {
  FaDesktop,
  FaPuzzlePiece,
  FaStar,
  FaUser,
  FaShoppingCart,
  FaCode,
} from "react-icons/fa"

const FeatureIcons = () => {
  return (
    <section className="feature-icons container">
      <div className="feature-icons__container">
        <div className="feature-icons__item">
          <div className="feature-icons__icon">
            <FaDesktop />
          </div>
          <div className="feature-icons__content">
            <h1 className="feature-icons__title">responsive & multipurpose</h1>
            <h2 className="feature-icons__subtitle">
              Desktop, Tablets & Phones
            </h2>
            <p className="feature-icons__desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons__item">
          <div className="feature-icons__icon feature-icons__icon--reverse">
            <FaPuzzlePiece />
          </div>
          <div className="feature-icons__content">
            <h1 className="feature-icons__title">easy customizaion</h1>
            <h2 className="feature-icons__subtitle">
              One Click Demo Contetn Installation
            </h2>
            <p className="feature-icons__desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons__item">
          <div className="feature-icons__icon">
            <FaStar />
          </div>
          <div className="feature-icons__content">
            <h1 className="feature-icons__title">unlimited features</h1>
            <h2 className="feature-icons__subtitle">
              Shortcodes, Typography & Different Layouts
            </h2>
            <p className="feature-icons__desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons__item">
          <div className="feature-icons__icon">
            <FaCode />
          </div>
          <div className="feature-icons__content">
            <h1 className="feature-icons__title">clean & modular coding</h1>
            <h2 className="feature-icons__subtitle">
              100% Clean, Valid & Well-Commented Coding
            </h2>
            <p className="feature-icons__desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons__item">
          <div className="feature-icons__icon">
            <FaShoppingCart />
          </div>
          <div className="feature-icons__content">
            <h1 className="feature-icons__title">
              the best e-commerce solutions
            </h1>
            <h2 className="feature-icons__subtitle">
              WooCommerce Full Integration
            </h2>
            <p className="feature-icons__desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons__item">
          <div className="feature-icons__icon">
            <FaUser />
          </div>
          <div className="feature-icons__content">
            <h1 className="feature-icons__title">awsome friendly support</h1>
            <h2 className="feature-icons__subtitle">
              Free Lifetime Support & Updates
            </h2>
            <p className="feature-icons__desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureIcons
