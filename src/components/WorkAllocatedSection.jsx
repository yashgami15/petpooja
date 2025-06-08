import React, { useState } from "react";
import TaskCard from "./TaskCard";
import "./styles/WorkAllocatedSection.css";

const WorkAllocatedSection = () => {
  const [activeTab, setActiveTab] = useState("tasks");

  const tabs = [
    { id: "tasks", label: "Tasks", count: 10, active: true },
    { id: "issues", label: "Issues", count: 10, active: false },
    { id: "workflows", label: "Workflows", count: 10, active: false },
  ];

  const tasksData = [
    {
      id: "3789",
      title: "How to Manage Stock",
      count: "14",
      date: "22 June, 2024",
      time: "11:00 am",
      status: "Ongoing",
      category: "Inventory",
    },
    {
      id: "3789",
      title: "How to Manage Stock",
      count: "14",
      date: "22 June, 2024",
      time: "11:00 am",
      status: "Ongoing",
      category: "Inventory",
      highlighted: true,
    },
    {
      id: "7182",
      title: "Tracking Daily Earnings",
      count: "18",
      date: "12 October, 2024",
      time: "11:00 am",
      status: "Ongoing",
      category: "Inventory",
    },
    {
      id: "6047",
      title: "Tool for Managing Reservations",
      count: "17",
      date: "",
      time: "",
      status: "",
      category: "",
      simplified: true,
    },
    {
      id: "6047",
      title: "Tool for Managing Reservations",
      count: "17",
      date: "",
      time: "",
      status: "",
      category: "",
      simplified: true,
    },
    {
      id: "4820",
      title: "Coordinating Employee Shifts",
      count: "15",
      date: "",
      time: "",
      status: "",
      category: "",
      simplified: true,
    },
  ];

  return (
    <div className="work-allocated-section">
      <div className="section-header">
        <div className="section-title-area">
          <h2 className="section-title">Work Allocated</h2>
          <div className="section-tabs">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-item ${tab.active ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="tab-content">
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-count">{tab.count}</span>
                </div>
                {tab.active && <div className="tab-indicator"></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="section-controls">
          <div className="employee-selector">
            <div className="selector-field">
              <span>Select Employee</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/16f97f8f5e499466f31ebcf4f2664e374c4e34bd?placeholderIfAbsent=true"
                alt="Dropdown"
                className="dropdown-icon"
              />
            </div>
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
          {tasksData.slice(0, 3).map((task, index) => (
            <TaskCard key={index} {...task} />
          ))}
        </div>
        <div className="tasks-grid">
          {tasksData.slice(3).map((task, index) => (
            <TaskCard key={index + 3} {...task} />
          ))}
        </div>
        <div className="content-scrollbar"></div>
      </div>
    </div>
  );
};

export default WorkAllocatedSection;
