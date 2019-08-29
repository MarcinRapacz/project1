import React from "react"
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaCaretLeft,
  FaCaretRight,
} from "react-icons/fa"

import Decorator from "../components/Decorator"

const Comments = () => {
  return (
    <section className="comments container">
      <Decorator dark>
        <FaQuoteLeft />
      </Decorator>
      <p className="comments__name">
        Ashley Linnon<span className="comments__title"> - CEO & Developer</span>
      </p>
      <p className="comments__comment">
        <FaQuoteLeft /> Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Ratione, deleniti accusamus quidem perferendis quisquam molestiae
        iusto necessitatibus sed rem quam! <FaQuoteRight />
      </p>
      <div className="comments__arrows">
        <FaCaretLeft className="comments__arrow" />
        <FaCaretRight className="comments__arrow" />
      </div>
    </section>
  )
}

export default Comments
