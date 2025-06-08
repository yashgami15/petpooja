import React from "react";
import "./styles/OutletHeader.css";

const OutletHeader = () => {
  return (
    <header className="outlet-header">
      <div className="header-left">
        <div className="logo-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c92d1a6b5955022ce88aeb617beea395417eb6b0?placeholderIfAbsent=true"
            alt="Logo"
            className="logo"
          />
        </div>
      </div>

      <div className="header-content">
        <div className="breadcrumb">
          <div className="breadcrumb-item">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9803631a7a6418c829da7f5eb594f649a6c13d0?placeholderIfAbsent=true"
              alt="Home"
              className="breadcrumb-icon"
            />
            <span>Home</span>
          </div>
        </div>

        <div className="header-actions">
          <div className="notification-btn">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/782642b8f079521427735e12693e1ff57fb75c3e?placeholderIfAbsent=true"
              alt="Notification"
              className="notification-icon"
            />
          </div>
          <div className="notification-btn">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44885ca88167895c083e5544d1503d0b39b72d7?placeholderIfAbsent=true"
              alt="Notification"
              className="notification-icon"
            />
          </div>

          <div className="date-picker">
            <div className="input-field">
              <span className="input-text">24-03-2001</span>
              <div className="calendar-icon"></div>
            </div>
          </div>

          <div className="outlet-selector">
            <div className="input-field">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a21a8ec9f9f43d052af40e6d1b446bb7d03c26?placeholderIfAbsent=true"
                alt="Outlet"
                className="outlet-icon"
              />
              <span className="input-text">Outlet name</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df56bbe84fddc7359f98b87dd1e51b8038838b6d?placeholderIfAbsent=true"
                alt="Dropdown"
                className="dropdown-icon"
              />
            </div>
          </div>

          <div className="divider"></div>

          <button className="create-btn">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb2881b4b29a9b526e465313a5ed8450644586f6?placeholderIfAbsent=true"
              alt="Create"
              className="btn-icon"
            />
            Create
          </button>
        </div>
      </div>
    </header>
  );
};

export default OutletHeader;
