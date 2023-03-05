import React from 'react';
import './pyramid.css';

export default function Pyramid() {
  return (
    <div className="PyramidContainer">
      <div className="funnelLeft">
        <h1 className="funnelHeader">
          Our funnel strategy helps grow your community and drive retention.
        </h1>
        <p className="funnelInfo">
          Systemize the growth of referrals, sponsors, and community members
          using our funnel system
        </p>
        <button className="funnelBtn">Schedule a Call</button>
      </div>
      <div className="funnelRight">
        <img
          src="https://img.pagecloud.com/w1Vn_g1oNsCpGQF8QY_6VOiOnkc=/464x0/filters:no_upscale()/rays-website-3454/images/image-i8edb.png"
          alt=""
          className="funnelImg"
        />
      </div>
    </div>
  );
}
