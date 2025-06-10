import React, { useState } from 'react';
// Import icons if you still want them for the header actions, or use inline SVGs as discussed before.
// For simplicity, I'm keeping the inline SVGs for now, as you expressed not wanting external icon libraries.

// We'll create a new CSS file or integrate these styles into an existing global one.
import './styles/TaskWorkflowDashboard.css'; // New CSS file for dashboard-specific styles

const TaskWorkflowDashboard = () => {
  const [overdueTasks, setOverdueTasks] = useState([
    {
      id: 1, // Added ID for key and toggle functionality
      taskName: "Customer Feedback Analysis",
      assignedTo: "Arvind",
      status: "Overdue",
      dueDate: "11-06-2025",
      completed: false // Added completion state
    },
    {
      id: 2,
      taskName: "Budget Forecasting",
      assignedTo: "Priya",
      status: "Overdue",
      dueDate: "04-11-2020",
      completed: false
    },
    {
      id: 3,
      taskName: "Marketing Strategy Development",
      assignedTo: "Suresh",
      status: "Overdue",
      dueDate: "10-05-2026",
      completed: false
    },
    {
      id: 4,
      taskName: "Quality Assurance Testing",
      assignedTo: "Fatima",
      status: "Overdue",
      dueDate: "03-10-2021",
      completed: false
    }
  ]);

  const workflows = [
    {
      title: "Stock Control Strategies",
      responses: 47,
      tasks: 22
    },
    {
      title: "How to Handle Inventory",
      responses: 23,
      tasks: 15
    },
    {
      title: "Inventory Management Tips",
      responses: 56,
      tasks: 30
    },
    {
      title: "Managing Your Stock Effectively",
      responses: 89,
      tasks: 5
    },
    {
      title: "Optimizing Your Inventory",
      responses: null,
      tasks: null
    },
    {
      title: "Stock Management Techniques",
      responses: null,
      tasks: null
    }
  ];

  const toggleTaskCompletion = (id) => {
    setOverdueTasks(
      overdueTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const totalOverdueTasks = overdueTasks.filter(task => !task.completed).length; // Count incomplete tasks

  return (
    <div className="dashboard-container"> {/* Renamed main div class */}
      {/* Overdue Tasks Card */}
      <div className="dashboard-card"> {/* Renamed card class */}
        <div className="card-header"> {/* Renamed header class */}
          <div className="header-left">
            <h2 className="card-title">Overdue tasks</h2>
            <span className="task-count-badge">
              {totalOverdueTasks} {/* Dynamic count */}
            </span>
          </div>
          <div className="header-actions"> {/* Renamed actions class */}
            {/* External Link Icon */}
            <button className="action-button">
              <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </button>
            {/* More Horizontal Icon */}
            <button className="action-button">
              <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </button>
          </div>
        </div>
        
        <div className="card-content"> {/* Renamed content class */}
          {overdueTasks.map((task) => (
            <div key={task.id} className="task-item">
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                className={`task-checkbox ${task.completed ? 'completed' : ''}`}
              >
                {task.completed && (
                  <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
              
              <div className="task-details">
                <h3 className={`task-name ${task.completed ? 'completed-text' : ''}`}>
                  {task.taskName}
                </h3>
                <p className={`task-meta ${task.completed ? 'completed-text' : ''}`}>
                  Assigned to: {task.assignedTo} | Due: {task.dueDate}
                </p>
                <p className={`task-status ${task.completed ? 'completed-text' : ''}`}>
                   Status: <span className="status-badge">{task.status}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Workflows Card - Remains largely the same, but adjusted classes for consistency */}
      <div className="dashboard-card"> {/* Renamed card class */}
        <div className="card-header"> {/* Renamed header class */}
          <h2 className="card-title">Workflows</h2>
          <div className="header-actions"> {/* Renamed actions class */}
            {/* External Link Icon */}
            <button className="action-button">
              <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </button>
            {/* More Horizontal Icon */}
            <button className="action-button">
              <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </button>
          </div>
        </div>
        
        <div className="card-content"> {/* Renamed content class */}
          <div className="workflow-grid"> {/* Renamed grid class */}
            {workflows.map((workflow, index) => (
              <div key={index} className="workflow-item"> {/* Renamed item class */}
                <h3 className="workflow-title">{workflow.title}</h3>
                <div className="workflow-meta">
                  <div className="meta-item">
                    <span className="meta-label">Responses</span>
                    <span className="meta-value">
                      {workflow.responses || '-'}
                    </span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Tasks</span>
                    <span className="meta-value">
                      {workflow.tasks || '-'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskWorkflowDashboard;