import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"

// Components
import Header from "./Header"

// Progress Bars
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Skills = () => {
  const header = {
    first: { color: "secondary", text: "our powerful" },
    second: { color: "primary", text: "skills" },
  }
  const primaryColor = "#00a99c"
  const secondaryColor = "#e4e4e4"

  const progressBars = [
    { percentage: 75, desc: "web design" },
    { percentage: 92, desc: "web development" },
    { percentage: 68, desc: "speed optimization" },
    { percentage: 100, desc: "customer support" },
    { percentage: 83, desc: "marketing" },
    { percentage: 50, desc: "advertisement" },
  ]

  return (
    <section className="skills container" id="skills">
      <Header first={header.first} second={header.second} />
      <p className="skills-desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsam
        aliquam est temporibus sint, numquam harum.
      </p>
      <div className="skills-container">
        {progressBars.map((progressBar, index) => (
          <VisibilitySensor key={index}>
            {({ isVisible }) => (
              <div className="skills-progress-bar">
                <CircularProgressbar
                  styles={buildStyles({
                    textColor: secondaryColor,
                    pathColor: primaryColor,
                    trailColor: secondaryColor,
                    rotation: 0.75,
                  })}
                  value={isVisible ? progressBar.percentage : "0"}
                  text={`${progressBar.percentage}%`}
                  strokeWidth="1"
                />
                <h1 className="skills-header">{progressBar.desc}</h1>
              </div>
            )}
          </VisibilitySensor>
        ))}
      </div>
      ;
    </section>
  )
}

export default Skills
