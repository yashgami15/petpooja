import React, { useState } from 'react';
import './styles/PersonalNotepad.css';

const PersonalNotepad = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Make shift & assign",
      description: "Assign individuals to specific shifts based on availability and role requirements",
      completed: false
    },
    {
      id: 2,
      text: "Menu correction",
      description: "Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options.",
      completed: false
    }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="personal-notepad">
      <div className="section-header">
        <div className="section-title-area">
          <h2 className="section-title">Personal Notepad</h2>
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
      
      <div className="notepad-content">
        {tasks.map((task) => (
          <div key={task.id} className="task-item">
            <button
              onClick={() => toggleTask(task.id)}
              className={`task-checkbox ${task.completed ? 'completed' : ''}`}
            >
              {task.completed && (
                <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            
            <div className="task-content">
              <h3 className={`task-title ${task.completed ? 'completed' : ''}`}>
                {task.text}
              </h3>
              <p className={`task-description ${task.completed ? 'completed' : ''}`}>
                {task.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalNotepad;