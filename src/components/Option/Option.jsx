import React from "react";
import "./Option.css";

const Option = ({ option, id, handleClickQuiz}) => {
  return (
    <div className="option" onClick={() => handleClickQuiz(id,option)}>
        <input className="form-check-input me-2" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
        <span>{option}</span>
    </div>
  );
};

export default Option;
