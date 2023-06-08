import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const quiz = useLoaderData();
  const quizes = quiz.data.questions;
  return (
    <div className="quiz-container">
      <div className="title">
        <h2>{quiz.data.name}</h2>
      </div>
      <div>
      {quizes.map((quiz, idx) => (
        <Quiz key={quiz.id} idx={idx} quiz={quiz}></Quiz>
      ))}
      </div>
    </div>
  );
};

export default Quizes;
