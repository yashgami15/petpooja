import React, { useState } from 'react';
import './styles/DepartmentAllocation.css';

const DepartmentAllocation = () => {

  const [activeTab, setActiveTab] = useState("tasks");
  
    const tabs = [
      { id: "tasks", label: "Tasks", count: 10 },
      { id: "issues", label: "Issues", count: 10 },
      { id: "workflows", label: "Workflows", count: 10 },
    ];

  const departmentData = [
    { tasks: 15, overdue: 3 },
    { tasks: 32, overdue: 5 },
    { tasks: 58, overdue: 12 },
    { tasks: 75, overdue: 18 },
    { tasks: 78, overdue: 22 },
    { tasks: 82, overdue: 25 },
    { tasks: 75, overdue: 20 }
  ];

  const maxValue = Math.max(...departmentData.map(d => d.tasks + d.overdue));

  return (
    <div className="department-allocation">
      <div className="section-header">
        <div className="section-title-area">
          <h2 className="section-title">Employee wise progress</h2>
          <div className="section-tabs">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)} // Update activeTab state on click
              >
                <div className="tab-content">
                  <span className="tab-label">{tab.label}</span>
                  <span className="tab-count">{tab.count}</span>
                </div>
                {activeTab === tab.id && <div className="tab-indicator"></div>} {/* Indicator for active tab */}
              </div>
            ))}
          </div>
        </div>

        <div className="section-controls">
          <div className="control-buttons">
            <div className="control-btn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/728a0982b757c7c4b5b74ebe14a853936bbd03e3?placeholderIfAbsent=true"
                alt="Control"
                className="control-icon"
              />
            </div>
          </div>
        </div>
      </div>
      

        
      
      {/* Conditional rendering based on activeTab */}
      {activeTab === "tasks" && (

        <div>
        {/* Legend */}
        <div className="legend">
          <div className="legend-item">
            <div className="legend-color task-color"></div>
            <span className="legend-text">Tasks</span>
          </div>
          <div className="legend-item">
            <div className="legend-color overdue-color"></div>
            <span className="legend-text">Overdue Tasks</span>
          </div>
        </div>
        <div className="chart-container">
          {/* Y-axis labels */}
          <div className="y-axis">
            <span className="y-label">100%</span>
            <span className="y-label">80%</span>
            <span className="y-label">60%</span>
            <span className="y-label">40%</span>
            <span className="y-label">20%</span>
            <span className="y-label">0%</span>
          </div>

          {/* Chart bars */}
          <div className="chart-area">
            {departmentData.map((dept, index) => {
              const taskHeight = (dept.tasks / maxValue) * 200;
              const overdueHeight = (dept.overdue / maxValue) * 200;
              
              return (
                <div key={index} className="bar-container">
                  <div className="bar-stack">
                    <div
                      className="bar overdue-bar"
                      style={{ height: `${overdueHeight}px` }}
                    ></div>
                    <div
                      className="bar task-bar"
                      style={{ height: `${taskHeight}px` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* X-axis label */}
        <div className="x-axis-label">
          <span>Departments</span>
        </div>
        </div>
      )}

      {activeTab === "issues" && (
        <div className="table-container">
          {/* Placeholder for issues */}
          <p>No issues data available</p>
        </div>
      )}

      {activeTab === "workflows" && (
        <div className="table-container">
          {/* Placeholder for workflows */}
          <p>No workflows data available</p>
        </div>
      )}
    </div>
  );
};

export default DepartmentAllocation;