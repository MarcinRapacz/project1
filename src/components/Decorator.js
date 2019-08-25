import React from "react"

const Decorator = props => {
  return (
    <div className={`decorator ${props.dark && "decorator--darker"}`}>
      {props.children}
    </div>
  )
}

export default Decorator
