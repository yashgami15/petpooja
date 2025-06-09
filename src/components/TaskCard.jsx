import React from "react";
import "./styles/TaskCard.css";

const TaskCard = ({
  id,
  title,
  count,
  date,
  time,
  status,
  category,
  highlighted = false,
}) => {
  return (
    <div className={`task-card ${highlighted ? "highlighted" : ""}`}>
      <div className="task-card-header">
        <div className="task-info">
          <div className="task-id">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da23fd6e3dcdb09d3b2b510316c42b504e37ddbe?placeholderIfAbsent=true"
              alt="ID"
              className="id-icon"
            />
            <span>ID #{id}</span>
          </div>
          <h4 className="task-title">{title}</h4>
        </div>
        <div className="task-count">
          <img
            src="./src/assets/message.svg"
            alt="Count"
            className="count-icon"
          />
          <span>{count}</span>
        </div>
      </div>

      <div className="task-details">
        <div className="task-datetime">
          <div className="date-info">
            <img
              src='./src/assets/calendar.svg'
              alt="Time"
              className="time-icon"
            />
            <span>{date}</span>
          </div>
          <div className="time-info">
            <img
              src='./src/assets/clock.svg'
              alt="Time"
              className="time-icon"
            />
            <span>{time}</span>
          </div>
        </div>

        <div className="task-tags">
          <div className="task-avatar">
            <img src="./src/assets/dataflow.svg"
              alt="User"
              className="avatar-icon"
            />
          </div>
          <div className="task-labels">
            <span className="status-tag">{status}</span>
            <span className="category-tag">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
