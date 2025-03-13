import React from 'react'
import { FaHeartbeat, FaUtensils, FaShoppingCart, FaCarBattery, FaPlane, FaMusic, FaUsers, FaGlobe, FaHome, FaLeaf, FaGasPump, FaCar, FaUmbrella, FaIndustry, FaGraduationCap, FaNetworkWired, FaBoxes, FaTractor,FaPython,  FaDatabase, FaRobot, FaServer, FaBox, FaProjectDiagram, FaChartLine, FaTable, FaChartBar, FaBrain, FaCloud, FaAws, FaCode, FaTools, FaInfinity, FaBook, FaCubes  } from "react-icons/fa";
import '../Section5/Section5.css'
import Ai_card from '../Ai_cards/Ai_card';


const techStack = [
  { icon: <FaPython />, title: "Python" },
  { icon: <FaDatabase />, title: "Big Data" },
  { icon: <FaRobot />, title: "Machine Learning" },
  { icon: <FaServer />, title: "ETL" },
  { icon: <FaBox />, title: "Databricks" },
  { icon: <FaProjectDiagram />, title: "OpenCV" },
  { icon: <FaChartLine />, title: "Scikit-learn" },
  { icon: <FaTable />, title: "Pandas" },
  { icon: <FaChartBar />, title: "Tableau" },
  { icon: <FaBrain />, title: "Tensorflow" },
  { icon: <FaChartBar />, title: "Grafana" },
  { icon: <FaCloud />, title: "Azure" },
  { icon: <FaAws />, title: "AWS" },
  { icon: <FaCode />, title: "API" },
  { icon: <FaTools />, title: "DevOps" },
  { icon: <FaInfinity />, title: "Oracle" },
  { icon: <FaBook />, title: "Jupyter" },
  { icon: <FaCubes />, title: "Kubernetes" },
];



const Section6 = () => {
  return (
    <div className="ai_cards">
      <h1>AI Tech Stack Cluster We Use for Intelligent Model Development</h1>
      <p>
      Our custom AI solutions for businesses are meticulously crafted using an ideal technology stack tailored to meet every requirement of your business. From advanced machine learning frameworks to cloud-based platforms, we utilize the best tools to ensure scalable, stable, efficient, and innovative AI-oriented outcomes.
      </p>
      <div className="grid-container">
        {techStack.map((item, index) => (
          <Ai_card key={index} icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Section6