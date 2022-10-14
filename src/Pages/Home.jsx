import React, { useEffect } from 'react'
import HeroSection from '../components/Herosection'
import { useGlobalContext } from './context'
import Services from './Services';

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);

  return (
    <div>
      <HeroSection />
      <Services/>
    </div>
  )
}

export default Home
