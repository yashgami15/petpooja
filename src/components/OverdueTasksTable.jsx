import React from "react";
import "./styles/OverdueTasksTable.css";

const OverdueTasksTable = () => {
    const tableData = [
      {
        taskname: "Menu Planning",
        assignedto: "Ajay",
        status: "Overdue",
        duedate: "12-07-2024",
      },
      {
        taskname: "Staff Scheduling",
        assignedto: "Niraj",
        status: "Overdue",
        duedate: "01-08-2023",
      },
      {
        taskname: "Inventory management",
        assignedto: "Vijay",
        status: "Overdue",
        duedate: "02-09-2022",
      },
      {
        taskname: "Customer Feedback Analysis",
        assignedto: "Arvind",
        status: "Overdue",
        duedate: "11-06-2025",
      },
      {
        taskname: "Inventory management",
        assignedto: "Yash",
        status: "Overdue",
        duedate: "11-06-2025",
      },
      {
        taskname: "Staff Scheduling",
        assignedto: "khushi",
        status: "Overdue",
        duedate: "12-04-2025",
      },
    ];
  
    return (
      <div className="overdue-task-section">
        <div className="section-header">
          <div className="section-title-area">
            <h2 className="section-title">Overdue tasks</h2>
          </div>
  
          <div className="section-controls">
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
              <div className="table-cell header-cell">Task Name</div>
              <div className="table-cell header-cell">Assigned to</div>
              <div className="table-cell header-cell center">Status</div>
              <div className="table-cell header-cell center">Due date</div>
              <div className="table-cell header-cell center">Reassign</div>
            </div>
  
            <div className="table-body">
              {tableData.map((row, index) => (
                <div key={index} className="table-row">
                  <div className="table-cell">{row.taskname}</div>
                  <div className="table-cell">{row.assignedto}</div>
                  <div className="table-cell center"><span className="statuslable">{row.status}</span></div>
                  <div className="table-cell center">{row.duedate}</div>
                  <div className="table-cell center">aa</div>
                </div>
              ))}
            </div>
          </div>
      </div>
    );
};

export default OverdueTasksTable;
