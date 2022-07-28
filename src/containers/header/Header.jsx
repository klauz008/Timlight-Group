import React from 'react';
import "./header.css";
import surveyman from "../../assets/surveyman.jpg"
import sparks from "../../assets/sparks.jpg"

const Header = () => {
  return (
    <div>
      <div className="__header section__padding" id='home'>
        <div className="__header-content">
          <h1 className="gradient__text">
            Lets Build something amazing for you and your conglomerate!
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, est. Reiciendis numquam blanditiis repellendus dolorum sint. Tenetur voluptas explicabo aut!</p>

          <div className="__header-content__input">
            <input type="email" placeholder='Your email ddress' />
            <button type='button'>Subscribe to our newsletters</button>
          </div>
        </div>
        <div className="__header-image">
          <img src={surveyman} alt= 'worker'/>
          {/* <img src={sparks} alt= 'worker'/> */}
        </div>
      </div> 
    </div>
  )
}

export default Header