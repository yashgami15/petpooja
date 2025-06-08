import React from "react";
import "./styles/OutletSidebar.css";

const OutletSidebar = () => {
  const menuItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4d63f3e7314725fe9cb2836d194f992c37f257a?placeholderIfAbsent=true",
      label: "Home",
      active: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be6354dcffc2571bd2971a6722f02a7205b30952?placeholderIfAbsent=true",
      label: "Tasks",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f7cba796dd0d07b56044c4214dfb890bbc47cd0f?placeholderIfAbsent=true",
      label: "Issues",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/060ebd63ce24050a250be001e310a9e43c7441ed?placeholderIfAbsent=true",
      label: "Workflow",
      active: false,
    },
    { icon: null, label: "Calendar", active: false, isCalendar: true },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1684d4a739ff9c07606400b609a429e46b34a8c7?placeholderIfAbsent=true",
      label: "Browse Templates",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7363bc9c1695419bcc9d6d73d4737330efc4ec1d?placeholderIfAbsent=true",
      label: "Temlate Library",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1067e3c3ba733dc779f654a28d56d0864166e43?placeholderIfAbsent=true",
      label: "User Management",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/434b39903d104565601e13b2fcf8081b81584173?placeholderIfAbsent=true",
      label: "Reports",
      active: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36b7c60cef9bdccfee1af5b9af61c7ef2b16b99d?placeholderIfAbsent=true",
      label: "Log Out",
      active: false,
    },
  ];

  return (
    <aside className="outlet-sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`sidebar-item ${item.active ? "active" : ""}`}
          >
            {item.isCalendar ? (
              <div className="calendar-icon-placeholder"></div>
            ) : (
              <img src={item.icon} alt={item.label} className="sidebar-icon" />
            )}
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="user-profile">
        <div className="profile-content">
          <div className="avatar">A</div>
          <div className="user-info">
            <div className="user-name">Ajay</div>
            <div className="user-role">Manager</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default OutletSidebar;
