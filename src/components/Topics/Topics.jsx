import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import './Topics.css'

const Topics = () => {
  const topics = useLoaderData();
  return (
    <div>
      <div className="title">
        <h2>{'<Dev-Quiz/>'}</h2>
        <p>Welcome to Dev-Quiz, the ultimate destination to challenge your knowledge and have a blast!</p>
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
