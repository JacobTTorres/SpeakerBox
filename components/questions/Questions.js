import React from 'react';
import './questions.css';
import Accordion from './Accordion';
import { questionData } from './utils/questionData';

const Questions = () => {
  return (
    <React.Fragment>
      <div className="accordionContainer">
        <h1 className="questionHeader">Frequently Asked Questions</h1>
        <div className="accordion">
          {questionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Questions;
