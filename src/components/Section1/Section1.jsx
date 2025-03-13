import React from 'react'
import './Section1.css'
import c1 from "../../assets/client1.jpeg";
import c2 from "../../assets/client2.jpeg";
import c3 from "../../assets/client3.jpeg";
import c4 from "../../assets/client4.jpeg";
import c5 from "../../assets/client5.jpeg";

const Section1 = () => {

  const clients = [c1, c2, c3, c4, c5];
  

  return (
    <div className="section1">

    
    <div className="heading_tagline">
    <h1>Empowering Autonomous Growth <br /> with Time-Tested AI Services and Solutions</h1>
    <h3>
      Unlock new potential and upgrade existing business capabilities with AI services that streamline operations, <br />
      elevate customer experience, and drive innovation.
    </h3>
    <button className='cta_ai'>AI CTA</button>

    <div className="clients-section">
  <h2>Trusted by</h2>
  <div className="clients-grid">
    {clients.map((logo, index) => (
      <div key={index} className="client-logo">
        <img src={logo} alt={`Client ${index + 1}`} />
      </div>
    ))}
  </div>
</div>
  </div>
  </div>
  )
}

export default Section1