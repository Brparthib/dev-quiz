import React from "react";
import "./Quiz.css";
import Option from "../Option/option";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz, idx }) => {
  const { question, options } = quiz;
  return (
    <div className="quiz">
      <div className="card">
        <div className="card-body">
          <p className="">
            <span>Quiz {idx + 1}:</span>
            {question}
            <Link>
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Link>
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
