import React from "react";
import "./Section7.css";

const Section7 = () => {
  return (
    <section className="section7">
      <div className="section7-container">
        <h2 className="section7-title">
          Our AI Solutions <span>Empowering Businesses</span>
        </h2>

        <div className="solutions-grid">
          <div className="solution-card">
            <h3>Conversational AI</h3>
            <p>Automate customer interactions with smart chatbots.</p>
          </div>

          <div className="solution-card">
            <h3>AI Agents</h3>
            <p>End-to-end automation for content, social media, and customer support.</p>
          </div>

          <div className="solution-card">
            <h3>Custom AI Solutions</h3>
            <p>Tailored AI innovations for industry-specific challenges.</p>
          </div>
        </div>

        <p className="section7-cta">
          Join <span>100+ businesses</span> already leveraging <strong>Step AI</strong> for growth and efficiency.
        </p>
        <button className="button_sec7">Get Started</button>

      </div>
    </section>
  );
};

export default Section7;
