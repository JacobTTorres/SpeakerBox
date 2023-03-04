import React from 'react';
import './howWeWork';

export default function HowWeWork() {
  return (
    <div className="workContainer">
      <h1 className="workHeader">HOW WE WORK</h1>
      <div className="workContent">
        <div className="workLeft">
          <img
            src="https://img.pagecloud.com/OLMkCkXoRwmJM2lF-5vdSUL64jc=/0x341:355x689/248x0/filters:no_upscale()/rays-website-3454/Untitled-2-l3e21.png"
            alt=""
            classname="workImg"
          />
        </div>
        <div className="workRight">
          <div className="rightBox">
            <h1 className="workLabel">1</h1>
            <h2 className="workHeader">Market Research</h2>
            <p className="workInfo">
              We will research competitors and similar shows to find a GAP that
              will allow us to properly position your show in the market and
              across channels.
            </p>
          </div>
        </div>
      </div>
      <div className="workContent">
        <div className="workLeft">
          <h1 className="workLabel">2</h1>
          <h2 className="workHeader">Record Your Podcast</h2>
          <p className="workInfo">
            We will assist you with the setup and recording of your podcast by
            selecting the appropriate equipment and facilitating production.
          </p>
        </div>
        <div className="workRight">
          <div className="rightBox">
            <img
              src="https://img.pagecloud.com/9QxsXMmKWdEuBYgQBBGIMjQW0JA=/725x347:1046x662/253x0/filters:no_upscale()/rays-website-3454/Untitled-2-l3e21.png"
              alt=""
              classname="workImg"
            />
          </div>
        </div>
      </div>
      <div className="workContent">
        <div className="workLeft">
          <img
            src="https://img.pagecloud.com/F4OuwJGQkznheiWhAM8IAMUZ_NQ=/381x344:702x660/259x0/filters:no_upscale()/rays-website-3454/Untitled-2-l3e21.png"
            alt=""
            classname="workImg"
          />
        </div>
        <div className="workRight">
          <div className="rightBox">
            <h1 className="workLabel">3</h1>
            <h2 className="workHeader">Refine Your Podcast</h2>
            <p className="workInfo">
              We will clean up and polish each recording using state of the art
              equipment to ensure that your podcast meets broadcast standards.
            </p>
          </div>
        </div>
      </div>
      <div className="workContent">
        <div className="workLeft">
          <h1 className="workLabel">4</h1>
          <h2 className="workHeader">Release Your Podcast</h2>
          <p className="workInfo">
            We will coordinate with your internal marketing team the release of
            episodes, assets, and continuing production schedule for your show.
          </p>
        </div>
        <div className="workRight"></div>
      </div>
    </div>
  );
}
