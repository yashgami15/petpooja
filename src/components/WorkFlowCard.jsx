import React from "react";
import "./styles/WorkFlowCard.css";

const WorkFlowCard = ({
  title,
  responses,
  responsescount,
  tasks,
  taskscount,
  highlighted = false,
}) => {
  return (
    <div className={`workflow-task-card ${highlighted ? "highlighted" : ""}`}>
      <div className="task-card-header">
        <div className="task-info">
          <h4 className="task-title">{title}</h4>
        </div>
      </div>

      <div className="task-details">
        <div className="task-datetime">
          <div className="date-info">
            <span>{responses}</span>
            <div className="count">
              <span>{responsescount}</span>
            </div>
          </div>
          <div className="time-info">
            <span>{tasks}</span>
            <div className="count">
              <span>{taskscount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlowCard;
