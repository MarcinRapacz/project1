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
      <div className="feature-icons-container">
        <div className="feature-icons-item">
          <div className="feature-icons-icon">
            <FaDesktop />
          </div>
          <div className="feature-icons-content">
            <h1 className="feature-icons-title">responsive & multipurpose</h1>
            <h2 className="feature-icons-subtitle">
              Desktop, Tablets & Phones
            </h2>
            <p className="feature-icons-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons-item">
          <div className="feature-icons-icon feature-icons-icon--reverse">
            <FaPuzzlePiece />
          </div>
          <div className="feature-icons-content">
            <h1 className="feature-icons-title">easy customizaion</h1>
            <h2 className="feature-icons-subtitle">
              One Click Demo Contetn Installation
            </h2>
            <p className="feature-icons-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons-item">
          <div className="feature-icons-icon">
            <FaStar />
          </div>
          <div className="feature-icons-content">
            <h1 className="feature-icons-title">unlimited features</h1>
            <h2 className="feature-icons-subtitle">
              Shortcodes, Typography & Different Layouts
            </h2>
            <p className="feature-icons-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons-item">
          <div className="feature-icons-icon">
            <FaCode />
          </div>
          <div className="feature-icons-content">
            <h1 className="feature-icons-title">clean & modular coding</h1>
            <h2 className="feature-icons-subtitle">
              100% Clean, Valid & Well-Commented Coding
            </h2>
            <p className="feature-icons-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons-item">
          <div className="feature-icons-icon">
            <FaShoppingCart />
          </div>
          <div className="feature-icons-content">
            <h1 className="feature-icons-title">
              the best e-commerce solutions
            </h1>
            <h2 className="feature-icons-subtitle">
              WooCommerce Full Integration
            </h2>
            <p className="feature-icons-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos molestiae amet eligendi placeat hic rem.
            </p>
          </div>
        </div>
        <div className="feature-icons-item">
          <div className="feature-icons-icon">
            <FaUser />
          </div>
          <div className="feature-icons-content">
            <h1 className="feature-icons-title">awsome friendly support</h1>
            <h2 className="feature-icons-subtitle">
              Free Lifetime Support & Updates
            </h2>
            <p className="feature-icons-desc">
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
