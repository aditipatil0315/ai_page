import React, { useState } from 'react'
import './Section3.css'

const Section3 = () => {


const [openIndex, setOpenIndex] = useState(null);



const questions = [
  { id: 1, title: "Comprehensive and Tailored AI Services", content: "We offer AI services that are customized to meet your specific business needs." },
  { id: 2, title: "Compliance-First Approach", content: "Our AI solutions prioritize compliance with industry standards and regulations." },
  { id: 3, title: "Innovation-Inclusive Culture", content: "We foster an environment where innovation drives AI advancements." },
  { id: 4, title: "Proven Track Record", content: "Our AI implementations have consistently delivered impactful results." },
];

const toggleDropdown = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


  return (
    
    <div className="faq-container">
      {/* Left Side Text Section */}
      <div className="faq-left">
        <h2>What Makes Our AI Services <span>Ideal for You?</span></h2>
        <p>
          As a premium AI services company, we provide tailored AI solutions designed for your business needs.
          Our expertise ensures custom AI solutions that are strategically developed to deliver exceptional results.
        </p>
      </div>

      {/* Right Side Accordion Section */}
      <div className="faq-right">
        {questions.map((item, index) => (
          <div key={item.id} className="faq-item">
            <div className="faq-question" onClick={() => toggleDropdown(index)}>
              <span>{index + 1}/ {item.title}</span>
              <span className="arrow">{openIndex === index ? "▲" : "▶"}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section3