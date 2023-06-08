import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Option from "../Option/option";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { addToDb, getStoredQuiz } from "../../utilities/quizDb";
import { ToastContainer, toast } from "react-toastify";

const Quiz = ({ quiz, idx }) => {
  const { id, question, options } = quiz;

  let answer;
  const handleClickQuiz = (id, str) => {
    addToDb(str);
    if (quiz.correctAnswer === str) {
      toast.success('Correct Answer', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      toast.error('Oops Wrong Answer', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

  const handleAnswer = () =>{
    toast.success(`Answer: ${quiz.correctAnswer}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className="quiz">
      <div className="card">
        <div className="card-body">
          <p className="">
            <span>Quiz {idx + 1}:</span>
            {question}
            <Link>
              <FontAwesomeIcon onClick={handleAnswer} icon={faEye}></FontAwesomeIcon>
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
      <ToastContainer/>
    </div>
  );
};

export default Quiz;
