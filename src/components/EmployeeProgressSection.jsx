import React, { useState } from "react";
import "./styles/EmployeeProgressSection.css";

const EmployeeProgressSection = () => {
  const [activeTab, setActiveTab] = useState("tasks");

  const tabs = [
    { id: "tasks", label: "Tasks", count: 10 },
    { id: "issues", label: "Issues", count: 10 },
    { id: "workflows", label: "Workflows", count: 10 },
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
    {
      name: "Rahul",
      department: "Human Resources",
      assigned: "31",
      ongoing: "31",
      overdue: "31",
      completed: "31%",
    },
    {
      name: "Priya",
      department: "Sales Division",
      assigned: "45",
      ongoing: "45",
      overdue: "45",
      completed: "45%",
    },
    {
      name: "Vikram",
      department: "Research and Development",
      assigned: "79",
      ongoing: "79",
      overdue: "79",
      completed: "79%",
    },
    {
      name: "Yash",
      department: "Devloper",
      assigned: "99",
      ongoing: "99",
      overdue: "99",
      completed: "99%",
    },
    {
      name: "Khushi",
      department: "Designer",
      assigned: "66",
      ongoing: "66",
      overdue: "66",
      completed: "66%",
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

      {/* Conditional rendering based on activeTab */}
      {activeTab === "tasks" && (
  <div className="employee-wise-table  employee-table">
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <th className="th">Name</th>
          <th className="th">Department</th>
          <th className="th">Assigned</th>
          <th className="th">Ongoing</th>
          <th className="th">Overdue</th>
          <th className="th">Completed</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {tableData.map((employee, index) => (
          <tr className="tr" key={index}>
            <td className="td">{employee.name}</td>
            <td className="td">{employee.department}</td>
            <td className="td">{employee.assigned}</td>
            <td className="td">{employee.ongoing}</td>
            <td className="td">{employee.overdue}</td>
            <td className="td">{employee.completed}</td>
          </tr>
        ))}
      </tbody>
    </table>
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

export default EmployeeProgressSection;