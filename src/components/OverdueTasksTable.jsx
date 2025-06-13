import React from "react";
import "./styles/OverdueTasksTable.css";
import reassignicon from "../assets/Reassign_icon.svg";

const OverdueTasksTable = () => {
  const tableData = [
    { taskname: "Menu Planning", assignedto: "Ajay", status: "Overdue", duedate: "12-07-2024" },
    { taskname: "Staff Scheduling", assignedto: "Niraj", status: "Overdue", duedate: "01-08-2023" },
    { taskname: "Inventory management", assignedto: "Vijay", status: "Overdue", duedate: "02-09-2022" },
    { taskname: "Customer Feedback Analysis", assignedto: "Arvind", status: "Overdue", duedate: "11-06-2025" },
    { taskname: "Inventory management", assignedto: "Yash", status: "Overdue", duedate: "11-06-2025" },
    { taskname: "Staff Scheduling", assignedto: "Khushi", status: "Overdue", duedate: "12-04-2025" },
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
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8de604c5661f6d047c6945a3c4b13fb1922e8eff?placeholderIfAbsent=true" alt="Control" className="control-icon" />
            </div>
            <div className="control-btn">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/728a0982b757c7c4b5b74ebe14a853936bbd03e3?placeholderIfAbsent=true" alt="Control" className="control-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th className="left">Task Name</th>
              <th className="left">Assigned to</th>
              <th className="center">Status</th>
              <th className="center">Due date</th>
              <th className="center">Reassign</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.taskname}</td>
                <td>{row.assignedto}</td>
                <td className="center">
                  <span className="statuslable">{row.status}</span>
                </td>
                <td className="center">{row.duedate}</td>
                <td className="center">
                  <img src={reassignicon} alt="Reassign" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverdueTasksTable;
