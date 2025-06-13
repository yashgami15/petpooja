// OutletSidebar.js
import React from "react";
import "./styles/OutletSidebar.css";
import homeicon from "../assets/Sidebar/Home_Sidebar.svg";
import taskicon from "../assets/Sidebar/Task_Sidebar.svg";
import issueicon from "../assets/Sidebar/Issue_Sidebar.svg";
import formsicon from "../assets/Sidebar/Forms_Sidebar.svg";
import calendericon from "../assets/Sidebar/calender_Sidebar.svg";
import browseicon from "../assets/Sidebar/Browse_Sidebar.svg";
import temlateicon from "../assets/Sidebar/temlate_Sidebar.svg";
import usericon from "../assets/Sidebar/User_Sidebar.svg";
import reporticon from "../assets/Sidebar/Report_Sidebar.svg";
import logoutticon from "../assets/Sidebar/Logout_Sidebar.svg";

const OutletSidebar = ({ activeTab, onTabChange }) => {
  const menuItems = [
    {
      icon: homeicon,
      label: "Home",
      id: "home"
    },
    {
      icon: taskicon,
      label: "Tasks",
      id: "tasks"
    },
    {
      icon: issueicon,
      label: "Issues",
      id: "issues"
    },
    {
      icon: formsicon,
      label: "Forms",
      id: "Forms"
    },
    {
      icon: calendericon,
      label: "Calendar",
      id: "calendar"
    },
    {
      icon: browseicon,
      label: "Browse Templates",
      id: "browse"
    },
    {
      icon: temlateicon,
      label: "Template Library",
      id: "template"
    },
    {
      icon: usericon,   
      label: "User Management",
      id: "user-management"
    },
    {
      icon: reporticon,
      label: "Reports",
      id: "reports"
    },
    {
      icon: logoutticon,
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
