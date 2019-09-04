import React from "react"
import { FaSass, FaNodeJs, FaReact, FaNode } from "react-icons/fa"

const Companies = () => {
  const icons = [FaNode, FaSass, FaNodeJs, FaReact]
  return (
    <section className="companies container">
      <div className="companies__icon-container">
        {icons.map((Icon, index) => (
          <div key={index} className="companies__icon">
            <Icon />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Companies
