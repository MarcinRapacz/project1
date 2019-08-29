import React from "react"
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"

import Header from "./Header"

// Images
import member1 from "../images/members1.jpg"
import member2 from "../images/members2.jpg"
import member3 from "../images/members3.jpg"
import member4 from "../images/members4.jpg"

const Members = () => {
  const header = {
    first: { color: "primary", text: "team" },
    second: { color: "dark", text: "members" },
  }

  const members = [
    {
      src: member1,
      name: "Ashley Linnon",
      title: "CEO & Developer",
      email: "a.linnon@backtick.pl",
      phone: "+48 700 111 000",
    },
    {
      src: member2,
      name: "Alexis Simpson",
      title: "User Interface Designer",
      email: "a.simpson@backtick.pl",
      phone: "+48 700 111 001",
    },
    {
      src: member3,
      name: "Zara Austin",
      title: "Sales Menager",
      email: "z.austin@backtick.pl",
      phone: "+48 700 111 002",
    },
    {
      src: member4,
      name: "Steven Cole",
      title: "IT Specialist",
      email: "s.cole@backtick.pl",
      phone: "+48 700 111 003",
    },
  ]

  return (
    <section className="members container" id="team">
      <Header first={header.first} second={header.second} />
      <p className="members__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis cumque
        atque eius soluta, ad laborum tenetur.
      </p>
      <div className="members__presons">
        {members.map(member => (
          <div className="members-person" key={member.name}>
            <div className="members-person__img">
              <div className="members-person__social">
                <div className="members-person__icon">
                  <FaFacebookF />
                </div>
                <div className="members-person__icon">
                  <FaTwitter />
                </div>
                <div className="members-person__icon">
                  <FaLinkedin />
                </div>
                <div className="members-person__icon">
                  <FaGoogle />
                </div>
                <div className="members-person__icon">
                  <FaYoutube />
                </div>
              </div>
              <img src={member.src} alt={`${member.name} - member`} />
            </div>
            <div className="members-person__details">
              <h1 className="members-person__name">{member.name}</h1>
              <p className="members-person__title">{member.title}</p>
              <hr />
              <p className="members-person__email">
                <FaEnvelope /> <span>{member.email}</span>
              </p>
              <p className="members-person__phone">
                <FaPhone /> {member.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Members
