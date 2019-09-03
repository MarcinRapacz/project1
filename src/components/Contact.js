import React, { useState } from "react"
import { FaAtom } from "react-icons/fa"
import axios from "axios"
import validator from "validator"

const Contact = () => {
  const defaultForm = {
    name: {
      value: "",
      error: false,
    },
    email: {
      value: "",
      error: false,
    },
    message: {
      value: "",
      error: false,
    },
  }
  const [data, setData] = useState(defaultForm)
  const [message, setMessage] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    let isValid = false
    let error = true
    switch (e.target.name) {
      case "name":
        isValid = validator.isLength(e.target.value, { min: 2, max: 64 })
        error = isValid ? false : "Enter the correct name"
        break
      case "email":
        isValid = validator.isEmail(e.target.value)
        error = isValid ? false : "Enter the correct email"
        break
      case "message":
        isValid = validator.isLength(e.target.value, { min: 2, max: 400 })
        error = isValid ? false : "Enter the correct message"
        break
      default:
        break
    }

    setData({
      ...data,
      [e.target.name]: {
        value: e.target.value,
        error,
      },
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const dataToSend = {}
    const errors = []

    setLoading(true)

    for (const field in data) {
      dataToSend[field] = data[field].value
      if (data[field].error) errors.push(data[field].error)
      if (!data[field].value) errors.push(data[field].error)
    }

    if (errors.length) {
      setMessage("Complete all fields")
    } else {
      await axios
        .post("https://microservice-send-email.herokuapp.com/api/sendEmail", {
          data: dataToSend,
          API_KEY:
            "c9047f6cd74f2aa734ffca287eef938ad89552c273b38f5911e3b60857995493",
        })
        .then(res => {
          setData(defaultForm)
          setMessage("Message was sent")
        })
        .catch(err => {
          setMessage("Something went wrong. Try again")
        })
    }
    setTimeout(() => setMessage(false), 5000)

    setLoading(false)
  }

  return (
    <section className="contact container" id="contact">
      <div className="contact__content">
        <form onSubmit={handleSubmit} className="contact__form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="contact__input"
            value={data.name.value}
            onChange={handleChange}
          />
          <p
            className={`contact__error ${data.name.error &&
              "contact__error--show"}`}
          >
            {data.name.error}
          </p>
          <input
            type="email"
            placeholder="Email adress"
            name="email"
            className="contact__input"
            value={data.email.value}
            onChange={handleChange}
          />
          <p
            className={`contact__error ${data.email.error &&
              "contact__error--show"}`}
          >
            {data.email.error}
          </p>

          <textarea
            name="message"
            placeholder="Message..."
            className="contact__textarea"
            value={data.message.value}
            onChange={handleChange}
          ></textarea>
          <p
            className={`contact__error ${data.message.error &&
              "contact__error--show"}`}
          >
            {data.message.error}
          </p>

          {loading ? (
            <FaAtom className="contact__icon" />
          ) : (
            <button type="submit" className="contact__btn">
              {message ? message : "Submit message"}
            </button>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
