import React from "react";
import "./Quiz.css";
import Option from "../Option/option";

const Quiz = ({ quiz, idx }) => {
  const { question, options } = quiz;
  return (
    <div className="quiz">
      <div className="card">
        <div className="card-body">
          <p className="bg-info">
            <span>Quiz {idx + 1}:</span>
            {question}
          </p>
          <div className="options">
            {options.map((option, idx) => (
              <Option key={idx} option={option}></Option>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
