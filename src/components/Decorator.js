import React from "react"

const Decorator = props => {
  return (
    <div
      onClick={props.onClick}
      className={`decorator ${props.dark && "decorator--darker"}`}
    >
      {props.children}
    </div>
  )
}

export default Decorator
