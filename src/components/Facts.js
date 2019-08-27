import React from "react"
import {
  FaRegCheckSquare,
  FaBriefcase,
  FaTelegramPlane,
  FaRegClock,
  FaRegThumbsUp,
} from "react-icons/fa"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

// Components
import Header from "./Header"
import Decorator from "./Decorator"

const Facts = () => {
  const header = {
    first: { color: "secondary", text: "company" },
    second: { color: "primary", text: "facts" },
  }

  return (
    <section className="facts container" id="facts">
      <Decorator>
        <FaBriefcase />
      </Decorator>
      <Header first={header.first} second={header.second} />
      <p className="facts-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
        mollitia.
      </p>
      <div className="facts-container">
        <div className="counter">
          <div className="counter-header">
            <span className="counter-square"></span>
            <h1 className="counter-number">
              <VisibilitySensor>
                {({ isVisible }) => <CountUp end={isVisible ? 218 : 0} />}
              </VisibilitySensor>
            </h1>
            <span className="counter-square"></span>
          </div>
          <div className="counter-icon">
            <span className="counter-line"></span>
            <FaRegCheckSquare />
            <span className="counter-line"></span>
          </div>
          <p className="counter-desc">Completed projects</p>
        </div>
        <div className="counter">
          <div className="counter-header">
            <span className="counter-square counter-square--primary"></span>
            <h1 className="counter-number">
              <VisibilitySensor>
                {({ isVisible }) => <CountUp end={isVisible ? 360 : 0} />}
              </VisibilitySensor>
            </h1>
            <span className="counter-square counter-square--primary"></span>
          </div>
          <div className="counter-icon">
            <span className="counter-line"></span>
            <FaRegClock />
            <span className="counter-line"></span>
          </div>
          <p className="counter-desc">
            hours of work/<small>month</small>
          </p>
        </div>
        <div className="counter">
          <div className="counter-header">
            <span className="counter-square"></span>
            <h1 className="counter-number">
              <VisibilitySensor>
                {({ isVisible }) => <CountUp end={isVisible ? 135 : 0} />}
              </VisibilitySensor>
            </h1>
            <span className="counter-square"></span>
          </div>
          <div className="counter-icon">
            <span className="counter-line"></span>
            <FaTelegramPlane />
            <span className="counter-line"></span>
          </div>
          <p className="counter-desc">Solved tickets</p>
        </div>
        <div className="counter">
          <div className="counter-header">
            <span className="counter-square"></span>
            <h1 className="counter-number">
              <VisibilitySensor>
                {({ isVisible }) => <CountUp end={isVisible ? 174 : 0} />}
              </VisibilitySensor>
            </h1>
            <span className="counter-square"></span>
          </div>
          <div className="counter-icon">
            <span className="counter-line"></span>
            <FaRegThumbsUp />
            <span className="counter-line"></span>
          </div>
          <p className="counter-desc">Satisfied clients</p>
        </div>
      </div>
    </section>
  )
}

export default Facts
