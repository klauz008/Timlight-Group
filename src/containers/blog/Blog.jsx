import React from 'react';
import { Article } from '../../components';
import "./blog.css";
import { const1, const6, const3, const4, const5 } from './import';

const Blog = () => {
  return (
    <>
     <div className="__blog section__padding" id="blog">
        <div className="__blog-heading">
          <h1 className="gradient__text">A lot is happening, <br /> We want to tell you about everything.</h1>
        </div>
        <div className="__blog-container">
          <div className="__blog-container_groupA">
            <Article img={const1} date="July 28, 2022" text="Timlight Group is the future of modern architecture and homes. Comfort at it's best" />
          </div>
          <div className="__blog-container_groupB">
            <Article img={const6} date="July 28, 2022" text="Timlight Group is the future of modern architecture and homes. Comfort at it's best" />
            <Article img={const3} date="July 28, 2022" text="Timlight Group is the future of modern architecture and homes. Comfort at it's best" />
            <Article img={const4} date="July 28, 2022" text="Timlight Group is the future of modern architecture and homes. Comfort at it's best" />
            <Article img={const5} date="July 28, 2022" text="Timlight Group is the future of modern architecture and homes. Comfort at it's best" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog