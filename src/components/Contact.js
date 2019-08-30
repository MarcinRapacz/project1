import React from "react"

const Contact = () => {
  return (
    <section className="contact container" id="contact">
      <div className="contact__content">
        <form action="#" className="contact__form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="contact__input"
          />
          <input
            type="email"
            placeholder="Email adress"
            name="name"
            className="contact__input"
          />
          <textarea
            name="desc"
            placeholder="Message..."
            className="contact__textarea"
          ></textarea>
          <button type="submit" className="contact__btn">
            Submit message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
