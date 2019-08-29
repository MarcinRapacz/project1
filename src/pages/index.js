import React from "react"
import "normalize.css"
import "../styles/main.scss"

// Components
import Logo from "../components/Logo"
import Navbar from "../components/Navbar"
import Offer from "../components/Offer"
import Features from "../components/Features"
import FeatureIcons from "../components/FeatureIcons"
import Skills from "../components/Skills"
import Works from "../components/Works"
import Facts from "../components/Facts"
import Question from "../components/Question"
import Members from "../components/Members"
import Comments from "../components/Comments"
import Companies from "../components/Companies"

export default () => (
  <>
    <Logo />
    <Navbar />
    <Offer />
    <Features />
    <FeatureIcons />
    <Skills />
    <Works />
    <Facts />
    <Question />
    <Members />
    <Comments />
    <Companies />
  </>
)
