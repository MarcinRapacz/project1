import React from "react"
import { FaStar } from "react-icons/fa"

import Header from "./Header"

const Prices = () => {
  const header = {
    first: { color: "dark", text: "real cheap" },
    second: { color: "primary", text: "prices" },
  }

  const plans = [
    {
      header: "standart",
      price: 19,
      projects: 5,
      storage: 5,
      bandwith: 10,
    },
    {
      header: "premium",
      price: 29,
      projects: 10,
      storage: 15,
      bandwith: 20,
      premium: true,
    },
    {
      header: "advenced",
      price: 49,
      projects: 15,
      storage: 30,
      bandwith: 50,
      stars: true,
    },
    {
      header: "ultimate",
      price: 99,
      projects: "Unlimited",
      storage: "Unlimited",
      bandwith: "Unlimited",
    },
  ]

  return (
    <section className="container prices" id="prices">
      <div className="prices__container">
        <Header first={header.first} second={header.second} />
        <p className="prices__desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="prices__plans-container">
          {plans.map(plan => (
            <div key={plan.header} className="prices__plan">
              <h1
                className={`prices__plan-header ${plan.premium &&
                  "prices__plan-header--premium"} ${plan.stars &&
                  "prices__plan-header--stars"}`}
              >
                <FaStar /> {plan.header} plan <FaStar />
              </h1>
              <p className="prices__plan-price">
                $<span>{plan.price}.</span>
                <span>99</span>Monthly
              </p>
              <hr />
              <p className="prices__plan-desc">{plan.projects} Projects</p>
              <p className="prices__plan-desc">{plan.storage} Storages</p>
              <p className="prices__plan-desc">Unlimited Users</p>
              <p className="prices__plan-desc">{plan.bandwith} GB Bandwith</p>
              <p className="prices__plan-desc">Enhanced Security</p>
              <hr />
              <button className="prices__plan-btn">Sign up now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Prices
