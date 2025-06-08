import React, { useState } from "react";
import TaskCard from "./TaskCard";
import TaskAllocationForm from "./TaskAllocationForm";
import TasksList from "./TasksList";
import "./styles/WorkAllocatedSection.css";

const WorkAllocatedSection = () => {
  const [activeTab, setActiveTab] = useState("tasks");
  const [showAllocationForm, setShowAllocationForm] = useState(false);
  const [allocatedTasks, setAllocatedTasks] = useState([
    {
      id: "3789",
      title: "How to Manage Stock",
      count: "14",
      date: "22 June, 2024",
      time: "11:00 am",
      status: "Ongoing",
      category: "Inventory",
      assignedTo: "John Doe",
      allocatedAt: new Date().toISOString(),
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
      allocatedAt: new Date().toISOString(),
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
      allocatedAt: new Date().toISOString(),
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
      assignedTo: "Sarah Wilson",
      allocatedAt: new Date().toISOString(),
    },
    {
      id: "6048",
      title: "Tool for Managing Reservations",
      count: "17",
      date: "",
      time: "",
      status: "",
      category: "",
      simplified: true,
      assignedTo: "David Brown",
      allocatedAt: new Date().toISOString(),
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
      assignedTo: "Lisa Anderson",
      allocatedAt: new Date().toISOString(),
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

  const handleTaskAllocation = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: Date.now().toString(),
      allocatedAt: new Date().toISOString(),
      status: "Assigned",
    };
    setAllocatedTasks((prev) => [...prev, taskWithId]);
    setShowAllocationForm(false);
  };

  const handleDeleteTask = (taskId) => {
    setAllocatedTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleUpdateTask = (taskId, updates) => {
    setAllocatedTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, ...updates } : task)),
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
          <button
            className="allocate-work-btn"
            onClick={() => setShowAllocationForm(true)}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b888deff3c1af1b5f841505117da2f720afb35?placeholderIfAbsent=true"
              alt="Add"
              className="btn-icon"
            />
            Allocate Work
          </button>
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

        {activeTab === "taskslist" && (
          <TasksList
            tasks={allocatedTasks}
            onDeleteTask={handleDeleteTask}
            onUpdateTask={handleUpdateTask}
          />
        )}

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

      {showAllocationForm && (
        <TaskAllocationForm
          onSubmit={handleTaskAllocation}
          onCancel={() => setShowAllocationForm(false)}
        />
      )}
    </div>
  );
};

export default WorkAllocatedSection;
