import React from "react"
import {
  FaFacebookF,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
  FaYoutube,
  FaGoogle,
  FaShare,
} from "react-icons/fa"

const SocialMedia = () => {
  return (
    <section className="social-media container">
      <h1 className="social-media__header">
        backtick<span>.pl</span>
      </h1>
      <div className="social-media__icons">
        <FaFacebookF className="social-media__icon" />
        <FaTwitter className="social-media__icon" />
        <FaTwitch className="social-media__icon" />
        <FaLinkedin className="social-media__icon" />
        <FaYoutube className="social-media__icon" />
        <FaGoogle className="social-media__icon" />
        <FaShare className="social-media__icon" />
      </div>
    </section>
  )
}

export default SocialMedia
