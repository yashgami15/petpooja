import React, { useState } from "react";
import "./styles/TaskAllocationForm.css";

const TaskAllocationForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    assignedTo: "",
    category: "",
    priority: "Medium",
    dueDate: "",
    dueTime: "",
    description: "",
    count: "",
  });

  const [errors, setErrors] = useState({});

  const employees = [
    "John Doe",
    "Jane Smith",
    "Mike Johnson",
    "Sarah Wilson",
    "David Brown",
    "Lisa Anderson",
  ];

  const categories = [
    "Inventory",
    "Customer Service",
    "Kitchen Operations",
    "Cleaning",
    "Administration",
    "Training",
    "Maintenance",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Task title is required";
    }

    if (!formData.assignedTo) {
      newErrors.assignedTo = "Please select an employee";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const taskData = {
        ...formData,
        date: formData.dueDate,
        time: formData.dueTime,
        status: "Assigned",
      };
      onSubmit(taskData);
    }
  };

  return (
    <div className="task-allocation-overlay">
      <div className="task-allocation-form">
        <div className="form-header">
          <h2>Allocate New Work</h2>
          <button className="close-btn" onClick={onCancel}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/close-icon.svg?placeholderIfAbsent=true"
              alt="Close"
              className="close-icon"
            />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="allocation-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Task Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={errors.title ? "error" : ""}
                placeholder="Enter task title"
              />
              {errors.title && (
                <span className="error-message">{errors.title}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="count">Count/Quantity</label>
              <input
                type="number"
                id="count"
                name="count"
                value={formData.count}
                onChange={handleInputChange}
                placeholder="e.g., 15"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="assignedTo">Assign To *</label>
              <select
                id="assignedTo"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleInputChange}
                className={errors.assignedTo ? "error" : ""}
              >
                <option value="">Select Employee</option>
                {employees.map((employee) => (
                  <option key={employee} value={employee}>
                    {employee}
                  </option>
                ))}
              </select>
              {errors.assignedTo && (
                <span className="error-message">{errors.assignedTo}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={errors.category ? "error" : ""}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="error-message">{errors.category}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dueTime">Due Time</label>
              <input
                type="time"
                id="dueTime"
                name="dueTime"
                value={formData.dueTime}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter task description or instructions"
              rows="3"
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/check-icon.svg?placeholderIfAbsent=true"
                alt="Submit"
                className="btn-icon"
              />
              Allocate Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskAllocationForm;
