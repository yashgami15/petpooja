import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`col-2`}
      style={{
        position: 'sticky',  // Makes the sidebar sticky
        top: 0,              // Keeps it at the top of the screen
        minHeight: '100vh',  // Ensures it takes the full screen height
        transition: 'width 0.3s ease',
        width: collapsed ? '80px' : '250px',
        zIndex: 1000,        // Ensures it stays above other content
      }}
    >
      <ul className="list-unstyled">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/issues">Issues</Link></li>
        <li><Link to="/workflow">Workflow</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/logout">Log Out</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
