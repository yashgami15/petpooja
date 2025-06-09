// OutletSidebar.js
import React from "react";
import "./styles/OutletSidebar.css";

const OutletSidebar = ({ activeTab, onTabChange }) => {
  const menuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4d63f3e7314725fe9cb2836d194f992c37f257a?placeholderIfAbsent=true",
      label: "Home",
      id: "home"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be6354dcffc2571bd2971a6722f02a7205b30952?placeholderIfAbsent=true",
      label: "Tasks",
      id: "tasks"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7cba796dd0d07b56044c4214dfb890bbc47cd0f?placeholderIfAbsent=true",
      label: "Issues",
      id: "issues"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/060ebd63ce24050a250be001e310a9e43c7441ed?placeholderIfAbsent=true",
      label: "Workflow",
      id: "workflow"
    },
    {
      icon: null,
      label: "Calendar",
      id: "calendar"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1684d4a739ff9c07606400b609a429e46b34a8c7?placeholderIfAbsent=true",
      label: "Browse Templates",
      id: "browse"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7363bc9c1695419bcc9d6d73d4737330efc4ec1d?placeholderIfAbsent=true",
      label: "Template Library",
      id: "template"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1067e3c3ba733dc779f654a28d56d0864166e43?placeholderIfAbsent=true",
      label: "User Management",
      id: "user-management"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/434b39903d104565601e13b2fcf8081b81584173?placeholderIfAbsent=true",
      label: "Reports",
      id: "reports"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36b7c60cef9bdccfee1af5b9af61c7ef2b16b99d?placeholderIfAbsent=true",
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
