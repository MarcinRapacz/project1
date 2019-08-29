import React from "react"
import { FaHtml5, FaSass, FaNodeJs, FaReact } from "react-icons/fa"

const Companies = () => {
  const icons = [FaHtml5, FaSass, FaNodeJs, FaReact]
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
