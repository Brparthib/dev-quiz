import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const quiz = useLoaderData();
  const quizes = quiz.data.questions;
  return (
    <div className="quiz-container">
      {quizes.map((quiz, idx) => (
        <Quiz key={quiz.id} idx={idx} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
