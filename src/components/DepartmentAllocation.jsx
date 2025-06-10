import React from 'react';
import './styles/DepartmentAllocation.css';

const DepartmentAllocation = () => {
  const departmentData = [
    { tasks: 15, overdue: 3 },
    { tasks: 32, overdue: 5 },
    { tasks: 58, overdue: 12 },
    { tasks: 75, overdue: 18 },
    { tasks: 78, overdue: 22 },
    { tasks: 82, overdue: 25 },
    { tasks: 75, overdue: 20 }
  ];

  const maxValue = Math.max(...departmentData.map(d => d.tasks + d.overdue));

  return (
    <div className="department-allocation">
      <div className="allocation-header">
        <h2 className="allocation-title">Department wise allocation</h2>
        <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zM13 12a1 1 0 11-2 0 1 1 0 012 0zM20 12a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </div>
      
      <div className="allocation-content">
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button className="tab-button active">Tasks</button>
          <button className="tab-button">Issues</button>
          <button className="tab-button">Forms</button>
        </div>

        {/* Chart Container */}
        <div className="chart-container">
          {/* Y-axis labels */}
          <div className="y-axis">
            <span className="y-label">100%</span>
            <span className="y-label">80%</span>
            <span className="y-label">60%</span>
            <span className="y-label">40%</span>
            <span className="y-label">20%</span>
            <span className="y-label">0%</span>
          </div>

          {/* Chart bars */}
          <div className="chart-area">
            {departmentData.map((dept, index) => {
              const taskHeight = (dept.tasks / maxValue) * 200;
              const overdueHeight = (dept.overdue / maxValue) * 200;
              
              return (
                <div key={index} className="bar-container">
                  <div className="bar-stack">
                    <div
                      className="bar overdue-bar"
                      style={{ height: `${overdueHeight}px` }}
                    ></div>
                    <div
                      className="bar task-bar"
                      style={{ height: `${taskHeight}px` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* X-axis label */}
        <div className="x-axis-label">
          <span>Departments</span>
        </div>

        {/* Legend */}
        <div className="legend">
          <div className="legend-item">
            <div className="legend-color task-color"></div>
            <span className="legend-text">Tasks</span>
          </div>
          <div className="legend-item">
            <div className="legend-color overdue-color"></div>
            <span className="legend-text">Overdue Tasks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentAllocation;