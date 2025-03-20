import React from 'react'
import './Section5.css' 
import { FaHeartbeat, FaUtensils, FaShoppingCart, FaCarBattery, FaPlane, FaMusic, FaUsers, FaGlobe, FaHome, FaLeaf, FaGasPump, FaCar, FaUmbrella, FaIndustry, FaGraduationCap, FaNetworkWired, FaBoxes, FaTractor,FaPython,  FaDatabase, FaRobot, FaServer, FaBox, FaProjectDiagram, FaChartLine, FaTable, FaChartBar, FaBrain, FaCloud, FaAws, FaCode, FaTools, FaInfinity, FaBook, FaCubes  } from "react-icons/fa";
import Ai_card from '../Ai_cards/Ai_card';


const ai_cardData = [
  { icon: <FaHeartbeat />, title: "Healthcare" },
  { icon: <FaChartLine />, title: "Finance" },
  { icon: <FaUtensils />, title: "Restaurant" },
  { icon: <FaShoppingCart />, title: "eCommerce" },
  { icon: <FaCarBattery />, title: "Electric Vehicle (EV)" },
  { icon: <FaCloud />, title: "SaaS" },
  { icon: <FaPlane />, title: "Travel" },
  { icon: <FaMusic />, title: "Entertainment" },
  { icon: <FaUsers />, title: "On-Demand" },
  { icon: <FaGlobe />, title: "Social Media" },
  { icon: <FaBoxes />, title: "Logistics" },
  { icon: <FaGraduationCap />, title: "Education" },
  { icon: <FaHome />, title: "Real Estate" },
  { icon: <FaLeaf />, title: "Aviation" },
  { icon: <FaNetworkWired />, title: "Telecom" },
  { icon: <FaTractor />, title: "Agriculture" },
  { icon: <FaGasPump />, title: "Oil and Gas" },
  { icon: <FaCar />, title: "Automotive" },
  { icon: <FaUmbrella />, title: "Insurance" },
  { icon: <FaIndustry />, title: "Manufacturing" },
]; 



const Section5 = () => {
  return (
    <div className="ai_cards">
      <h1><span>Industries We Empower </span>and Transform with Our AI Services</h1>
      <p>
        Our AI services redefine businesses across industries by driving innovation, improving efficiency, and unlocking new growth opportunities. From healthcare, finance, retail, and real estate to travel and hospitality, we empower businesses to stay ahead of the competition with cutting-edge AI business solutions tailored to their unique needs.
      </p>
      <div className="grid-container">
        {ai_cardData.map((item, index) => (
          <Ai_card key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Section5