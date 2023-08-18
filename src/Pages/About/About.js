import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Aboutt from '../../Components/Aboutt/Aboutt'
import Groupe from '../../Components/Groupe/Groupe'
import Values from '../../Components/Values/Values'
import Compete from '../../Components/Compete/Compete'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Aboutt/>
        <Groupe/>
        <Values
        home1 = "Our Core Values"
        home2 = "Honesty"
        home3 = "For us as a company, it is very important that the information provided to our customer is honest and true.  This value is what makes us different and help us to make decisions based on firm and true facts."
        home4 = "Teamwork"
        home5 = "We built a team that works result-oriented, unifying talent and give and take to respect and join different opinions, knowledge and abilities because teamwork and mutual support build the foundation of our relationship."
        home6 = "Liberty"
        home7 = "Our team member must show loyalty, referring to faithfulness, commitment, and interest defense in any moment for and in the name of the company."
        home8 = "Communication"
        home9 = "Each one of us must interact transparently and appropriately, trying to strengthen our interpersonal relations and the image of the company"
        home10 = "Service Quality"
        home11 = "Service quality is one of our most important values which demands all our effort, determination and courage to be successful in what we are doing and the services we are providing."
        home12 = "Constructive Spirit"
        home13 = "Our team member must show loyalty, referring to faithfulness, commitment, and interest defense in any moment for and in the name of the company."
        />
        <Compete/>
    </div>
  )
}

export default About