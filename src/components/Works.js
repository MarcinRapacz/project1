import React from "react"
import { FaHeart, FaPaperclip, FaSearch } from "react-icons/fa"
import Header from "./Header"
import works1 from "../images/works1.jpg"
import works2 from "../images/works2.jpg"
import works3 from "../images/works3.jpg"
import works4 from "../images/works4.jpg"
import works5 from "../images/works5.jpg"
import works6 from "../images/works6.jpg"
import works7 from "../images/works7.jpg"
import works8 from "../images/works8.jpg"
import works9 from "../images/works9.jpg"
import works10 from "../images/works10.jpg"
import works11 from "../images/works11.jpg"
import works12 from "../images/works12.jpg"

const Works = () => {
  const header = {
    first: { color: "dark", text: "sample" },
    second: { color: "primary", text: "works" },
  }

  return (
    <section className="works container" id="works">
      <Header first={header.first} second={header.second} />
      <p className="works-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deleniti.
      </p>
      <div className="works-container">
        <div className="works-item">
          <img src={works1} alt="person1" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works2} alt="person2" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works3} alt="person3" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works4} alt="person4" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works5} alt="person5" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works6} alt="person6" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works7} alt="person7" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works8} alt="person8" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works9} alt="person9" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works10} alt="person10" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works11} alt="person11" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
        <div className="works-item">
          <img src={works12} alt="person12" className="works-img" />
          <div className="works-hover">
            <div className="works-icon">
              <FaPaperclip />
            </div>
            <div className="works-icon works-icon--secound">
              <FaSearch />
            </div>
            <h1 className="works-hover-header">Corporate Brochure</h1>
            <h2 className="works-hover-secondheader">Illustration / Print</h2>
            <p className="works-hover-likes">
              <FaHeart /> 138
            </p>
          </div>
        </div>
      </div>
      <button className="works-btn">View all works</button>
    </section>
  )
}

export default Works
