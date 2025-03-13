import React from 'react'
import './Section4.css'
import raveena from '../../assets/Raveena.jpeg'
import manthan from '../../assets/Manthan.jpeg'
import sanskar from '../../assets/Sanskar.jpeg'

const Section4 = () => {
  return (
    <div className="our_team_section">
          <h2>Meet Our Experts Members</h2>
          <div className="member">
            <div className="profile">
              <div className="img_person">
              <img src= {sanskar} alt="" />
              </div>
          
              <div className="intro">
              <h2>Sanskaar Dubey</h2>
              <p>Founder</p>
    
              </div>
              
    
            </div>
            <div className="about">
              <p>Sanskar Dubey is the founder of Step Consultancy, the parent company of Step Tech, a venture dedicated to building innovative, scalable, and business-centric technology solutions. With a vision to bridge the gap between businesses and digital transformation, Step Tech focuses on creating high-performance web and mobile applications, enterprise software, and AI-driven automation tools that drive efficiency and growth. </p>
            </div>
    
            
          </div>
    
          <div className="member">
            <div className="profile">
              <div className="img_person">
              <img src= {raveena} alt="" />
              </div>
          
              <div className="intro">
              <h2>Raveena Mishra </h2>
              <p>Project Associate | Tech Management Lead</p>
    
              </div>
              
    
            </div>
            <div className="about">
              <p>Raveena ensures the seamless execution of tech projects by streamlining processes, optimizing team collaboration, and maintaining on-time delivery. She plays a key role in project planning, resource management, and agile implementation while ensuring quality and efficiency throughout the development cycle.</p>
            </div>
    
            
          </div>
    
    
          <div className="member">
            <div className="profile"> 
              <div className="img_person">
              <img src= {manthan} alt="" />
              </div>
          
              <div className="intro">
              <h2>Manthan Jethwani</h2>
              <p>AI Engineer | AI Agents | AI Automation</p>
              
    
    
              </div>
              
    
            </div>
            <div className="about">
              <p>Manthan designs and builds intelligent AI solutions and Ai agents. He empowers businesses to reclaim valuable time by automating repetitive tasks, optimizing processes, reducing overhead, and accelerating growth.</p>
            </div>
    
            
          </div>
    
          
    
      
    
    
        </div>
  )
}

export default Section4