import React from "react";
import "./Option.css";

const Option = ({ option }) => {
  return (
    <div className="option">
        <input
          className="form-check-input me-2"
          type="checkbox"
          id="checkboxNoLabel"
          value=""
        />
        <span>{option}</span>
    </div>
  );
};

export default Option;
