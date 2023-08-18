import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import ContactUs from '../../Components/ContactUs/ContactUs'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Welcome from '../../Components/Welcome/Welcome'
import Serve from '../../Components/Serve/Serve'

const Home = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Welcome/>
      <Serve/>
      <ContactUs/>
      <Testimonials/>
    </div>
  )
}

export default Home