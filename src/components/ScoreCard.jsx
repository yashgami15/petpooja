import React from "react";
import "./styles/ScoreCard.css";

const ScoreCard = ({ title, icon, stats }) => {
  return (
    <div className="score-card">
      <div className="score-card-header">
        <div className="score-card-icon">
          {icon ? (
            <img src={icon} alt="" className="card-icon" />
          ) : (
            <div className="info-circle-placeholder"></div>
          )}
        </div>
        <h3 className="score-card-title">{title}</h3>
      </div>

      <div className="score-card-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-label">{stat.label}</span>
            <div
              className="stat-count"
              style={{
                color: stat.color,
                backgroundColor: stat.bgColor,
              }}
            >
              {stat.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCard;
