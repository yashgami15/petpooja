import React, { useState } from "react";
import TaskCard from "./TaskCard";
import "./styles/WorkAllocatedSection.css";

const WorkAllocatedSection = () => {
  const [activeTab, setActiveTab] = useState("tasks");

  // Task data with allocated information
  const [allocatedTasks] = useState([
    {
      id: "3789",
      title: "How to Manage Stock",
      count: "14",
      date: "22 June, 2024",
      time: "11:00 am",
      status: "Ongoing",
      category: "Inventory",
      assignedTo: "John Doe",
      allocatedAt: "2024-06-08 10:30 AM",
    },
    {
      id: "3790",
      title: "How to Manage Stock",
      count: "14",
      date: "22 June, 2024",
      time: "11:00 am",
      status: "Ongoing",
      category: "Inventory",
      highlighted: true,
      assignedTo: "Jane Smith",
      allocatedAt: "2024-06-08 11:15 AM",
    },
    {
      id: "7182",
      title: "Tracking Daily Earnings",
      count: "18",
      date: "12 October, 2024",
      time: "11:00 am",
      status: "Ongoing",
      category: "Inventory",
      assignedTo: "Mike Johnson",
      allocatedAt: "2024-06-08 09:45 AM",
    },
    {
      id: "6047",
      title: "Tool for Managing Reservations",
      count: "17",
      date: "",
      time: "",
      status: "Assigned",
      category: "Operations",
      simplified: true,
      assignedTo: "Sarah Wilson",
      allocatedAt: "2024-06-08 08:20 AM",
    },
    {
      id: "6048",
      title: "Tool for Managing Reservations",
      count: "17",
      date: "",
      time: "",
      status: "Assigned",
      category: "Operations",
      simplified: true,
      assignedTo: "David Brown",
      allocatedAt: "2024-06-08 07:30 AM",
    },
    {
      id: "4820",
      title: "Coordinating Employee Shifts",
      count: "15",
      date: "",
      time: "",
      status: "Completed",
      category: "Management",
      simplified: true,
      assignedTo: "Lisa Anderson",
      allocatedAt: "2024-06-07 16:45 PM",
    },
  ]);

  const tabs = [
    {
      id: "tasks",
      label: "Tasks",
      count: allocatedTasks.length,
      active: activeTab === "tasks",
    },
    {
      id: "issues",
      label: "Issues",
      count: 10,
      active: activeTab === "issues",
    },
    {
      id: "workflows",
      label: "Workflows",
      count: 10,
      active: activeTab === "workflows",
    },
    {
      id: "taskslist",
      label: "Tasks List",
      count: allocatedTasks.length,
      active: activeTab === "taskslist",
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Ongoing: "#D9A541",
      Completed: "#039855",
      Assigned: "#7955A3",
      Overdue: "#D92D20",
    };
    return colors[status] || "#6B7280";
  };

  const renderTasksList = () => {
    return (
      <div className="tasks-list-view">
        <div className="tasks-list-header">
          <h3>All Allocated Tasks</h3>
          <p>{allocatedTasks.length} total tasks</p>
        </div>

        <div className="tasks-table">
          <div className="table-header">
            <div>Task ID</div>
            <div>Title</div>
            <div>Assigned To</div>
            <div>Status</div>
            <div>Category</div>
            <div>Allocated At</div>
          </div>

          {allocatedTasks.map((task) => (
            <div key={task.id} className="table-row">
              <div className="task-id-col">#{task.id}</div>
              <div className="task-title-col">
                <strong>{task.title}</strong>
                {task.count && (
                  <span className="count-badge">{task.count}</span>
                )}
              </div>
              <div className="assigned-to-col">{task.assignedTo}</div>
              <div className="status-col">
                <span
                  className="status-badge"
                  style={{
                    backgroundColor: getStatusColor(task.status) + "20",
                    color: getStatusColor(task.status),
                    border: `1px solid ${getStatusColor(task.status)}40`,
                  }}
                >
                  {task.status}
                </span>
              </div>
              <div className="category-col">{task.category}</div>
              <div className="allocated-at-col">{task.allocatedAt}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

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
        {activeTab === "tasks" && (
          <>
            <div className="tasks-grid">
              {allocatedTasks.slice(0, 3).map((task, index) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
            <div className="tasks-grid">
              {allocatedTasks.slice(3).map((task, index) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </>
        )}

        {activeTab === "taskslist" && renderTasksList()}

        {activeTab === "issues" && (
          <div className="tab-content-placeholder">
            <p>Issues content will be displayed here</p>
          </div>
        )}

        {activeTab === "workflows" && (
          <div className="tab-content-placeholder">
            <p>Workflows content will be displayed here</p>
          </div>
        )}

        <div className="content-scrollbar"></div>
      </div>
    </div>
  );
};

export default WorkAllocatedSection;
