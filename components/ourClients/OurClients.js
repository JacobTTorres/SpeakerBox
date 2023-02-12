import React from 'react';

export default function OurClients() {
  return (
    <div className="clientsContainer">
      <h1 className="clientsHeader">What our clients are saying</h1>
      <div className="clientContent">
        <div className="clients">
          <img
            src="https://img.pagecloud.com/hPtvZkw21vSjK2cmV2Q41ouMuWs=/95x95:992x992/122x0/filters:no_upscale()/rays-website-3454/1-82513.png"
            alt=""
            className="clientImg"
          />
          <h3 className="cliHeader">HAILEY THOMAS</h3>
          <a href="" className="cliBusniessLink">
            Brainspace Optimized
          </a>
          <p className="cliQuote">
            The Speakerbox team makes it really easy for me to use podcasting as
            a major part of my marketing strategy. They do the editing so I can
            focus on creating great content that serves current and potential
            clients. I’ve closed at least $20,000 of new business just in the
            last six months by regularly producing podcast episodes.
          </p>
        </div>
        <div className="clients">
          <img
            src="https://img.pagecloud.com/V-TsbHR_wa3PJ1H8R2DdVbtGUGM=/139x0/filters:no_upscale()/rays-website-3454/2-v495a.png"
            alt=""
            className="clientImg"
          />
          <h3 className="cliHeader">MARTIN HOLSINGER</h3>
          <a href="" className="cliBusniessLink">
            Hillvalley Marketing
          </a>
          <p className="cliQuote">
            I've been doing all my own editing for my podcast. I hired
            Speakerbox Media because I was looking for help from someone who has
            experience with editing audio. Their editing has been a huge boost
            in helping me to produce our podcast. If you are looking to
            outsource your audio editing, I highly recommend hiring Speakerbox
            Media
          </p>
        </div>
        <div className="clients">
          <img
            src="https://img.pagecloud.com/-Y7EqG6VAfRtab6pZ7sxn5aXYfI=/86x86:993x1010/126x0/filters:no_upscale()/rays-website-3454/4-s21dc.png"
            alt=""
            className="clientImg"
          />
          <h3 className="cliHeader">AIMEE FREDERICK</h3>
          <a href="" className="cliBusniessLink">
            Blockhouse Coffee {'&'} Kitchen
          </a>
          <p className="cliQuote">
            Before starting Born in the Bend, I had not even listened to a
            podcast, but working with Speakerbox Media made that detail a
            non-issue. Hiring them to handle the technical parts of podcasting
            allowed us to focus on being the best show hosts we can be. Not
            having to stress over editing, uploading, SEO, or anything
            behind-the-scenes, has made starting our podcast a ton of fun.
          </p>
        </div>
      </div>
    </div>
  );
}
