import React from "react";
import './Topic.css'

const Topic = ({ topic }) => {
  return (
    <div className="topic">
      <div className="card">
        <img src={topic.logo} className={`card-img-top ${topic.id == 5 ? "bg-dark" : "bg-light"}`} alt="img" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topic;
