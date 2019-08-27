import React, { useState } from "react"
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

  const [counters, setCounters] = useState([
    {
      number: 218,
      icon: <FaRegCheckSquare />,
      desc: "Completed projects",
      active: true,
    },
    {
      number: 360,
      icon: <FaRegClock />,
      desc: "hours of work",
      desc2: "/month",
      active: true,
    },
    {
      number: 135,
      icon: <FaTelegramPlane />,
      desc: "Solved tickets",
      active: true,
    },
    {
      number: 174,
      icon: <FaRegThumbsUp />,
      desc: "Satisfied clients",
      active: true,
    },
  ])

  const unactiveSensor = unactiveCounter => {
    if (unactiveCounter.active) {
      unactiveCounter.active = false
      const updatedArr = counters.map(counter =>
        counter.desc === unactiveCounter.desc ? unactiveCounter : counter
      )
      setCounters(updatedArr)
    }
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
        {counters.map(conter => (
          <div className="counter" key={conter.desc}>
            <div className="counter-header">
              <span className="counter-square"></span>
              <h1 className="counter-number">
                <VisibilitySensor active={conter.active}>
                  {({ isVisible }) => {
                    isVisible && unactiveSensor(conter)

                    return <CountUp end={isVisible ? conter.number : 0} />
                  }}
                </VisibilitySensor>
              </h1>
              <span className="counter-square"></span>
            </div>
            <div className="counter-icon">
              <span className="counter-line"></span>
              {conter.icon}
              <span className="counter-line"></span>
            </div>
            <p className="counter-desc">
              {conter.desc}
              <small>{conter.desc2}</small>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Facts
