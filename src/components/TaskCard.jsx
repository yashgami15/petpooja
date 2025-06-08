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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/151d0af47720379fc681aa16518d26d786d79e6c?placeholderIfAbsent=true"
            alt="Count"
            className="count-icon"
          />
          <span>{count}</span>
        </div>
      </div>

      <div className="task-details">
        <div className="task-datetime">
          <div className="date-info">
            <div className="calendar-icon-small"></div>
            <span>{date}</span>
          </div>
          <div className="time-info">
            <img
              src={`URL_${highlighted ? "122" : "120"}`}
              alt="Time"
              className="time-icon"
            />
            <span>{time}</span>
          </div>
        </div>

        <div className="task-tags">
          <div className="task-avatar">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce1d551580ffce19d5b1eec111f9e50089d9f23a?placeholderIfAbsent=true"
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
