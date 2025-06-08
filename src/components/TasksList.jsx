import React, { useState } from "react";
import "./styles/TasksList.css";

const TasksList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  const [sortBy, setSortBy] = useState("allocatedAt");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredAndSortedTasks = tasks
    .filter((task) => filterStatus === "all" || task.status === filterStatus)
    .sort((a, b) => {
      if (sortBy === "allocatedAt") {
        return new Date(b.allocatedAt) - new Date(a.allocatedAt);
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === "status") {
        return a.status.localeCompare(b.status);
      }
      return 0;
    });

  const getStatusColor = (status) => {
    const statusColors = {
      Ongoing: "#D9A541",
      Completed: "#039855",
      Assigned: "#7955A3",
      Overdue: "#D92D20",
      "": "#6B7280",
    };
    return statusColors[status] || "#6B7280";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not set";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleStatusChange = (taskId, newStatus) => {
    onUpdateTask(taskId, { status: newStatus });
  };

  return (
    <div className="tasks-list-container">
      <div className="tasks-list-header">
        <div className="filter-controls">
          <div className="filter-group">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="allocatedAt">Date Allocated</option>
              <option value="title">Title</option>
              <option value="status">Status</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Filter by Status:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Assigned">Assigned</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
        </div>
        <div className="tasks-count">
          {filteredAndSortedTasks.length} task
          {filteredAndSortedTasks.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="tasks-list">
        <div className="tasks-list-table">
          <div className="table-header">
            <div className="header-cell task-id-header">ID</div>
            <div className="header-cell task-title-header">Task Title</div>
            <div className="header-cell assigned-to-header">Assigned To</div>
            <div className="header-cell status-header">Status</div>
            <div className="header-cell category-header">Category</div>
            <div className="header-cell date-header">Date Allocated</div>
            <div className="header-cell actions-header">Actions</div>
          </div>

          <div className="table-body">
            {filteredAndSortedTasks.map((task) => (
              <div key={task.id} className="table-row">
                <div className="table-cell task-id-cell">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/da23fd6e3dcdb09d3b2b510316c42b504e37ddbe?placeholderIfAbsent=true"
                    alt="ID"
                    className="id-icon"
                  />
                  #{task.id}
                </div>
                <div className="table-cell task-title-cell">
                  <h4 className="task-title">{task.title}</h4>
                  {task.count && (
                    <span className="task-count-badge">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/151d0af47720379fc681aa16518d26d786d79e6c?placeholderIfAbsent=true"
                        alt="Count"
                        className="count-icon"
                      />
                      {task.count}
                    </span>
                  )}
                </div>
                <div className="table-cell assigned-to-cell">
                  <div className="assignee-info">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce1d551580ffce19d5b1eec111f9e50089d9f23a?placeholderIfAbsent=true"
                      alt="User"
                      className="assignee-avatar"
                    />
                    <span>{task.assignedTo}</span>
                  </div>
                </div>
                <div className="table-cell status-cell">
                  <select
                    value={task.status}
                    onChange={(e) =>
                      handleStatusChange(task.id, e.target.value)
                    }
                    className="status-select"
                    style={{ color: getStatusColor(task.status) }}
                  >
                    <option value="Assigned">Assigned</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Completed">Completed</option>
                    <option value="Overdue">Overdue</option>
                  </select>
                </div>
                <div className="table-cell category-cell">
                  <span className="category-badge">
                    {task.category || "General"}
                  </span>
                </div>
                <div className="table-cell date-cell">
                  <div className="date-info">
                    <div className="date-allocated">
                      {formatDate(task.allocatedAt)}
                    </div>
                    {task.date && (
                      <div className="due-date">
                        Due: {task.date} {task.time}
                      </div>
                    )}
                  </div>
                </div>
                <div className="table-cell actions-cell">
                  <button
                    className="edit-btn"
                    onClick={() => {
                      // You can implement edit functionality here
                      console.log("Edit task:", task.id);
                    }}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/edit-icon.svg?placeholderIfAbsent=true"
                      alt="Edit"
                      className="action-icon"
                    />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/delete-icon.svg?placeholderIfAbsent=true"
                      alt="Delete"
                      className="action-icon"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {filteredAndSortedTasks.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/empty-tasks.svg?placeholderIfAbsent=true"
                alt="No tasks"
                className="empty-icon"
              />
            </div>
            <h3>No tasks found</h3>
            <p>
              No tasks match your current filters. Try adjusting your filters or
              allocate new work.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TasksList;
