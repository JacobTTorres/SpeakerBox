import React from 'react';
import './webinar.css';

export default function Webinar() {
  return (
    <div className="webinarContainer">
      <div className="webiContent">
        <div className="webiLeft">
          <h1 className="webiHeader">
            Sign up for our<br></br> latest webinar
          </h1>
          <p className="webiUnderHeader">
            Integrating Podcast Into Your Content Marketing Strategy<br></br>
            will walk you through every step of involve with launching a
            <br></br> podcast for your business.
          </p>
          <button className="learnMoreBtn">Learn More</button>
        </div>
        <div className="webiRight">
          <img
            src="https://img.pagecloud.com/J0HWILurdiJencxD0UUHJpciZ3w=/464x0/filters:no_upscale()/rays-website-3454/YT_Thumbnail_v2.png"
            alt=""
            class="webiImg"
          />
        </div>
      </div>
    </div>
  );
}
