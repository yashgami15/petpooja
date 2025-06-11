import React from "react";
import TaskCard from "./TaskCard";
import "./styles/Workflows.css";
import WorkFlowCard from "./WorkFlowCard";

const Workflows = () => {
  const tasksData = [
    {
      title: "Stock Control Strategies",
      responses: "Responses",
      responsescount: "47",
      tasks: "Tasks",
      taskscount: "22",
    },
    {
      title: "How to Handle Inventory",
      responses: "Responses",
      responsescount: "23",
      tasks: "Tasks",
      taskscount: "15",
    },
    {
      title: "Inventory Management Tips",
      responses: "Responses",
      responsescount: "42",
      tasks: "Tasks",
      taskscount: "42",
    },
    {
      title: "Managing Your Stock Effectively",
      responses: "Responses",
      responsescount: "43",
      tasks: "Tasks",
      taskscount: "56",
    },
    {
      title: "Optimizing Your Inventory",
      responses: "Responses",
      responsescount: "47",
      tasks: "Tasks",
      taskscount: "22",
    },
    {
      title: "Stock Management Techniques",
      responses: "Responses",
      responsescount: "47",
      tasks: "Tasks",
      taskscount: "22",
    },
    {
      title: "Stock Control Strategies",
      responses: "Responses",
      responsescount: "47",
      tasks: "Tasks",
      taskscount: "22",
    },
    {
      title: "How to Handle Inventory",
      responses: "Responses",
      responsescount: "23",
      tasks: "Tasks",
      taskscount: "15",
    },
    {
      title: "Inventory Management Tips",
      responses: "Responses",
      responsescount: "42",
      tasks: "Tasks",
      taskscount: "42",
    },
    {
      title: "Managing Your Stock Effectively",
      responses: "Responses",
      responsescount: "43",
      tasks: "Tasks",
      taskscount: "56",
    },
    {
      title: "Optimizing Your Inventory",
      responses: "Responses",
      responsescount: "47",
      tasks: "Tasks",
      taskscount: "22",
    },
    {
      title: "Stock Management Techniques",
      responses: "Responses",
      responsescount: "47",
      tasks: "Tasks",
      taskscount: "22",
    },
  ];

  return (
    <div className="workflows-section">
      <div>
        <div className="section-header">
          <div className="section-title-area">
            <h2 className="section-title">Workflows</h2>
          </div>

          <div className="section-controls">
          <div className="control-btn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8de604c5661f6d047c6945a3c4b13fb1922e8eff?placeholderIfAbsent=true"
                alt="Control"
                className="control-icon"
              />
            </div>
            <div className="more-options">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a721d2436e0295da18675dafaf46440e30e2e5bc?placeholderIfAbsent=true"
                alt="More"
                className="more-icon"
              />
            </div>
          </div>
        </div>  
      <div className="section-content">
        <div className="tasks-grid">
          {tasksData.map((task, index) => (
            <WorkFlowCard key={index} {...task} />
          ))}
        </div>
      </div>
      </div>

    </div>
  );
};

export default Workflows;
