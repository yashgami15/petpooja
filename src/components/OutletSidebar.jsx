// OutletSidebar.js
import React from "react";
import "./styles/OutletSidebar.css";
import homeicon from "/src/assets/sidebar/Home_Sidebar.svg";

const OutletSidebar = ({ activeTab, onTabChange }) => {
  const menuItems = [
    {
      icon: homeicon,
      label: "Home",
      id: "home"
    },
    {
      icon: "./src/assets/sidebar/Task_Sidebar.svg",
      label: "Tasks",
      id: "tasks"
    },
    {
      icon: "./src/assets/sidebar/Issue_Sidebar.svg",
      label: "Issues",
      id: "issues"
    },
    {
      icon: "./src/assets/sidebar/Forms_Sidebar.svg",
      label: "Forms",
      id: "Forms"
    },
    {
      icon: "./src/assets/sidebar/calender_Sidebar.svg",
      label: "Calendar",
      id: "calendar"
    },
    {
      icon: "./src/assets/sidebar/Browse_Sidebar.svg",
      label: "Browse Templates",
      id: "browse"
    },
    {
      icon: "./src/assets/sidebar/temlate_Sidebar.svg",
      label: "Template Library",
      id: "template"
    },
    {
      icon: "./src/assets/sidebar/User_Sidebar.svg",   
      label: "User Management",
      id: "user-management"
    },
    {
      icon: "./src/assets/sidebar/Report_Sidebar.svg",
      label: "Reports",
      id: "reports"
    },
    {
      icon: "./src/assets/sidebar/Logout_Sidebar.svg",
      label: "Log Out",
      id: "logout"
    }
  ];

  return (
    <aside className="outlet-sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => onTabChange(item.id)}
          >
            {item.icon ? (
              <img src={item.icon} alt={item.label} className="sidebar-icon" />
            ) : (
              <div className="calendar-icon-placeholder"></div>
            )}
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default OutletSidebar;
