import React from 'react';
import './leverage.css';

export default function Leverage() {
  return (
    <div className="leverageContainer">
      <div>
        <h1 className="leverageHeader">
          Leverage our suite of podcast services to build a magnetic community
        </h1>
        <p className="leaverageUnder">Host engaging conversations</p>
        <p>
          <strong className="UnderStrong">
            We'll handle EVERYTHING else for you!
          </strong>
        </p>
      </div>
      <div>
        <div>
          <img
            src="https://img.pagecloud.com/d6ybxZUc5VG90e4YGg1U7WClOXU=/167x0/filters:no_upscale()/rays-website-3454/4693249.png"
            alt=""
            className="leverageImg"
          />
          <h1 className="leverHeader">Research</h1>
          <p className="leverInfo">Concept Development</p>
          <p className="leverInfo">GAP Analysis</p>
          <p className="leverInfo">Topic Research</p>
          <p className="leverInfo">Competitor Analysis</p>
          <button>
            <a href="" className="leverBtn">
              LearnMore
            </a>
          </button>
        </div>
        <div>
          <img
            src="https://img.pagecloud.com/SI0JCpWd9ZTP6V6IE9syhar3B8k=/160x0/filters:no_upscale()/rays-website-3454/4693266.png"
            alt=""
            className="leverageImg"
          />
          <h1 className="leverHeader">Strategy</h1>
          <p className="leverInfo">Content Mapping</p>
          <p className="leverInfo">Promotional Plan</p>
          <p className="leverInfo">Consulting Sessions</p>
          <p className="leverInfo">Analytics Review</p>
          <button>
            <a href="" className="leverBtn">
              Learn More
            </a>
          </button>
        </div>
        <div>
          <img
            src="https://img.pagecloud.com/td8APug3Ck5iiPS1LhjPgZnuwuM=/163x0/filters:no_upscale()/rays-website-3454/4693080.png"
            alt=""
            className="leverageImg"
          />
          <h1 className="leverHeader">Production</h1>
          <p className="leverInfo">Audio Editing</p>
          <p className="leverInfo">Video Editing</p>
          <p className="leverInfo">Podcast Studio Setup</p>
          <p className="leverInfo">Webcast</p>
          <button>
            <a href="" className="leverBtn">
              Learn More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
