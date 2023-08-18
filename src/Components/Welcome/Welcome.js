import React from 'react'
import classes from '../Welcome/Welcome.module.css'
import Safe from '../../assets/safe.png'
import Brief from '../../assets/briefcase.png'
import Phone from '../../assets/phone.png'
import Chart from '../../assets/chart.png'
import Car from '../../assets/car.png'
import Man from '../../assets/man.png'


const Welcome = () => {
  return (
    <div className= {classes.container}>
        <div className= {classes.innerContainer}>
            <div className= {classes.welcome}>
            <h2>Welcome to Mayframe Driving Academy</h2>
            <p>Mayframe operates a leading driving academy that aims to provide comprehensive and professional driver training. Whether it's for beginners or experienced drivers looking to enhance their skills, the academy offers a structured curriculum and qualified instructors to ensure safe and confident driving. The driving academy covers both theoretical knowledge and practical training, equipping individuals with the necessary skills to navigate the roads with responsibility.</p>
        </div>
          <div className= {classes.safeContainer}>
            <div className= {classes.safe1}>
              <div className= {classes.safety}>
                <div className= {classes.safety1}>
                <img src = {Safe} alt='Safe'/>
                </div>
                <div className= {classes.safety2}>
                    <h3>Safety</h3>
                </div>
                  </div>
                <p>We teach our students how to drive responsibly, follow traffic rules, and minimize risks on road.</p>
             </div>
         <div className= {classes.prof1}>
              <div className= {classes.professional}>
                <div className= {classes.professional1}>
                <img src = {Brief} alt='briefcase'/>
                </div>
                <div className= {classes.professional2}>
                    <h3>Professionalism</h3>
                </div>
                  </div>
                <p>We maintain high level of professionalism in all aspect of our operations.</p>
         </div>
      </div>
      <div className= {classes.innerContainer1}>
            <div className= {classes.customerService}>
            <div className= {classes.cust1}>
              <div className= {classes.customer}>
                <div className= {classes.customer1}>
                <img src = {Phone} alt='Phone'/>
                </div>
                <div className= {classes.customer2}>
                    <h3>Customer Service</h3>
                </div>
                  </div>
                <p>We aim to be responsive, attentive, and accommodating to the needs and concerns of students and their families.</p>
             </div>
            </div>
            <div className= {classes.continousImp}>
            <div className= {classes.cont1}>
              <div className= {classes.continous}>
                <div className= {classes.continous1}>
                <img src = {Chart} alt='Chart'/>
                </div>
                <div className= {classes.continous2}>
                    <h3>Continuous Improvement</h3>
                </div>
                  </div>
                <p>We stay updated with the latest traffic laws and regulations, incorporate new technologies, and seek feedback to enhance the learning experience.</p>
             </div>
            </div>
         </div>
        </div>
        <div className= {classes.frame}>
            <div classname = {classes.car}>
                <img src = {Car} alt='Car'/>
            </div>
            <div className= {classes.cat}>
             <img src = {Man} alt='Man'/>
            </div>
        </div>
    </div>
  )
}

export default Welcome