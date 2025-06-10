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
      <div className="notepad-header">
        <h2 className="notepad-title">Personal Notepad</h2>
        <div className="notepad-actions">
          <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zM13 12a1 1 0 11-2 0 1 1 0 012 0zM20 12a1 1 0 11-2 0 1 1 0 012 0z" />
          </svg>
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