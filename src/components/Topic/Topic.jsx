import React from "react";
import "./Topic.css";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo } = topic;
  return (
    <div className="topic">
      <div className="card">
        <img
          src={logo}
          className={`card-img-top ${id == 5 ? "bg-dark" : "bg-light"}`}
          alt="img"
        />
        <div className="card-body">
          <p>{name}</p>
          <Link to={`quizes/${id}`}>
            <button className="btn">{"Start quiz->"}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topic;
