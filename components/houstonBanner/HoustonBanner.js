import React from 'react';
import './houstonBanner.css';

export default function HoustonBanner() {
  return (
    <div className="houstonBannerContainer">
      <div className="houstonBannerContent">
        <img
          src="https://img.pagecloud.com/akekHugbJO0RDpIHUXgkGQOesPA=/0x0:6652x2128/1083x0/filters:no_upscale()/rays-website-3454/a8-e4d27.png"
          alt=""
          className="Houston"
        />
        <div className="bannerForeground">
          <img
            src="https://img.pagecloud.com/Sbyd-2qmNZoB-utbqqdHZEZdyN8=/63x88:447x332/153x0/filters:no_upscale()/rays-website-3454/houston_podcast-re1b6.png"
            alt=""
            className="heartHouston"
          />
          <img
            src="https://img.pagecloud.com/vimX8dkb0OSmBQTOezVHDNjAtFc=/0x0:512x447/196x0/filters:no_upscale()/rays-website-3454/hosuton_podcast_editing-464ef.png"
            alt=""
            className="beSomeone"
          />
        </div>
      </div>
    </div>
  );
}
