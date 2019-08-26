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

export default () => (
  <>
    <Logo />
    <Navbar />
    <Offer />
    <Features />
    <FeatureIcons />
    <Skills />
  </>
)
