import React, { useContext, useEffect } from 'react'
import HeroSection from '../components/Herosection'
import { AppContext, useGlobalContext } from "./context";

const About = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(()=> {
    updateAboutPage();
  }, []);

  return (
    <HeroSection />
  )
}

export default About
