import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Option from "../Option/option";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { addToDb, getStoredQuiz } from "../../utilities/quizDb";

const Quiz = ({ quiz, idx }) => {
  const {id, question, options} = quiz;

  const [quest, setQuest] = useState([])

  useEffect(() => {
    fetch('')
  })

  const handleClickQuiz = (id, str) => {
    addToDb(str);

    const storedQuiz = getStoredQuiz()
    


  };

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
              <Option
                key={idx}
                id={id}
                option={option}
                handleClickQuiz={handleClickQuiz}
              ></Option>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
