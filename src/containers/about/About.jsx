import React from 'react';
import { Feature } from '../../components';
import "./about.css";

const About = () => {
  return (
    <div className="__about section__margin" id="aboutUs">
    <div className="__about-feature">
      <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
    </div>
    <div className="__about-heading">
      <h1 className="gradient__text">Our reach is beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="__about-container">
      <Feature 
        title="Chatbots" 
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." 
      />
      <Feature 
        title="Knowledgebase" 
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" 
      />
      <Feature 
        title="Education" 
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" 
      />
    </div>
  </div>
  )
}

export default About