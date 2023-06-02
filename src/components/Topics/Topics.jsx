import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import './Topics.css'

const Topics = () => {
  const topics = useLoaderData();
  return (
    <div>
      <div className="title">
        <h2>This is Topics!</h2>
      </div>
      <div className="topic-container">
        {
            topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
        }
      </div>
    </div>
  );
};

export default Topics;
