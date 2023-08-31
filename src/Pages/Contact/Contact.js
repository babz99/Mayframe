import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Property from '../../Components/Property/Property'
import Choose from '../../Components/Choose/Choose'
import Testimonials from '../../Components/Testimonials/Testimonials'

const Contact = () => {
  return (
    <div>
     <Navbar/>
     <Property/>
     <Choose
        home1 = "Why Choose Us"
        home2 = "Long-Term Value"
        home3 = "We are focus on creating properties  that not only provide immediate value but also appreciate in value over time, ensuring a solid investment for buyers."
        home4 = "Attention to Detail"
        home5 = "We emphasize a meticulous approach to design, construction, and project management, ensuring every aspect is carefully considered and executed with precision."
        home6 = "Safety "
        home7 = " We communicate a strong commitment to ensuring safety protocols, adhering to building codes, and maintaining a safe working environment for construction personnel and future occupants."
        home8 = "Design Excellence"
        home9 = "At Mayframe property, we Showcase a passion for architectural excellence and innovative design, creating visually stunning and functional spaces."
        home10 = "Reliability"
        home11 = "We emphasize a track record of delivering projects on time and within budget, instilling confidence in clients about the company's reliability and dependability."
        home12 = "Customer Focus"
        home13 = "We demonstrate a customer-centric approach, prioritizing customer satisfaction, personalized service, and attentiveness to their needs and preferences."
        />
        <Testimonials/>
    </div>
  )
}

export default Contact