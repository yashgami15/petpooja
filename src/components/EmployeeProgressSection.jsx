import React, { useState } from "react";
import "./styles/EmployeeProgressSection.css";

const EmployeeProgressSection = () => {
  const [activeTab, setActiveTab] = useState("tasks");

  const tabs = [
    { id: "tasks", label: "Tasks", count: 10, active: true },
    { id: "issues", label: "Issues", count: 10, active: false },
    { id: "workflows", label: "Workflows", count: 10, active: false },
  ];

  const tableData = [
    {
      name: "Anita",
      department: "IT Services",
      assigned: "90",
      ongoing: "90",
      overdue: "90",
      completed: "90%",
    },
  ];

  return (
    <div className="employee-progress-section">
      <div className="section-header">
        <div className="section-title-area">
          <h2 className="section-title">Employee wise progress</h2>
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
          <div className="control-buttons">
            <div className="control-btn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8de604c5661f6d047c6945a3c4b13fb1922e8eff?placeholderIfAbsent=true"
                alt="Control"
                className="control-icon"
              />
            </div>
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

      <div className="table-container">
        <div className="table-header">
          <div className="table-cell header-cell">Name</div>
          <div className="table-cell header-cell">Department</div>
          <div className="table-cell header-cell center">Assigned</div>
          <div className="table-cell header-cell center">Ongoing</div>
          <div className="table-cell header-cell center">Overdue</div>
          <div className="table-cell header-cell center">Completed</div>
        </div>

        <div className="table-body">
          {tableData.map((row, index) => (
            <div key={index} className="table-row">
              <div className="table-cell">{row.name}</div>
              <div className="table-cell">{row.department}</div>
              <div className="table-cell center">{row.assigned}</div>
              <div className="table-cell center">{row.ongoing}</div>
              <div className="table-cell center">{row.overdue}</div>
              <div className="table-cell center">{row.completed}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProgressSection;
