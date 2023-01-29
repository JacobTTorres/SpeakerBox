import React from 'react';
import './struggle.css';

export default function Struggle() {
  return (
    <div className="struggleContainer">
      <div className="left">
        <img
          src="https://img.pagecloud.com/6lIILIbZjeMVWKT8jGl_lcm_WTA=/323x0/filters:no_upscale()/rays-website-3454/images/image-t0557.png"
          alt="Woman with Mic"
        />
      </div>
      <div className="right">
        <h1 className="struggleHeader">
          Brands come to us when they're
          <br /> struggling with...
        </h1>
        <div className="struggleInfoContainer">
          <p className="struggleInfo">
            ✖ Crating content for a diverse audience of consumers
          </p>
        </div>
        <div className="struggleInfoContainer">
          <p className="struggleInfo">
            ✖ Keeping their communities <strong>consistently</strong> engaged
            and growing
          </p>
        </div>
        <div className="struggleInfoContainer">
          <p className="struggleInfo">
            ✖ Producing high-quality content that gets engagement
          </p>
        </div>
        <div className="struggleInfoContainer">
          <p className="struggleInfo">
            ✖ Distributing information across multiple online channels
          </p>
        </div>
        <div className="struggleInfoContainer">
          <p className="struggleInfo">
            ✖ Choosing topics your preferred audience wants to learn about
          </p>
        </div>
      </div>
    </div>
  );
}
