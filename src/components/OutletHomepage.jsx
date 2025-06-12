// OutletHomepage.js
import React, { useState } from "react";
import OutletHeader from "./OutletHeader";
import OutletSidebar from "./OutletSidebar";
import ScoreCard from "./ScoreCard";
import WorkAllocatedSection from "./WorkAllocatedSection";
import EmployeeProgressSection from "./EmployeeProgressSection";
import Notepad from "./PersonalNotepad"
import "./styles/OutletHomepage.css";
import PersonalNotepad from "./PersonalNotepad";
import DepartmentAllocation from "./DepartmentAllocation";
import OverdueTasksTable from "./OverdueTasksTable";
import Workflows from "./Workflows";
import issueIcon from "/src/assets/issue_icon.svg";


const OutletHomepage = () => {
  const [activeTab, setActiveTab] = useState("home"); // existing state
  const [sidebarOpen, setSidebarOpen] = useState(false); // newly added
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const scoreCardsData = [
    {
      title: "22 Tasks",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be16870ce85e80eedd927706346089655eefe106?placeholderIfAbsent=true",
      stats: [
        { label: "Ongoing", count: "10", color: "#D9A541", bgColor: "#FFF8E5" },
        { label: "Overdue", count: "2", color: "#D92D20", bgColor: "#FFF0E5" },
        { label: "Completed", count: "10", color: "#039855", bgColor: "#ECFDF3" },
        { label: "Scheduled", count: "0", color: "#7955A3", bgColor: "#F7EDFF" },
      ],
    },
    {
      title: "22 Issues",
      icon: issueIcon,
      stats: [
        { label: "Open", count: "10", color: "#D9A541", bgColor: "#FFF8E5" },
        { label: "Ignored", count: "2", color: "#D92D20", bgColor: "#FFF0E5" },
        { label: "Resolved", count: "10", color: "#039855", bgColor: "#ECFDF3" },
      ],
    },
    {
      title: "20 Forms",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9722e785e222680403eb4cc1606551ad6ebf80de?placeholderIfAbsent=true",
      stats: [
        { label: "Ongoing Tasks", count: "10", color: "#D9A541", bgColor: "#FFF8E5" },
        { label: "Open Responses", count: "0", color: "#7955A3", bgColor: "#F7EDFF" },
        { label: "Submitted Responses", count: "10", color: "#039855", bgColor: "#ECFDF3" },
      ],
    },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId); // Update active tab
  };

  return (
    <div className="outlet-homepage">
      <div className="header-with-toggle">
        <div className="sidebar-toggle-btn">
          <button  className="togglebtn" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="logo-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c92d1a6b5955022ce88aeb617beea395417eb6b0?placeholderIfAbsent=true"
              alt="Logo"
              className="logo"
            />
          </div>
        </div>
        <OutletHeader />
      </div>
      <div className="main-layout">
        
        {/* Desktop Sidebar */}
<div className="desktop-sidebar">
  <OutletSidebar activeTab={activeTab} onTabChange={handleTabChange} />
</div>

{/* Mobile Sidebar */}
<div className={`responsive-sidebar ${sidebarOpen ? "open" : ""}`}>
  <OutletSidebar
    activeTab={activeTab}
    onTabChange={(id) => {
      handleTabChange(id);
      closeSidebar();
    }}
  />
</div>

{/* Overlay for mobile */}
<div
  className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
  onClick={closeSidebar}
/>


        <div className="content-area">
          <div className="content-wrapper">
            {/* Render content based on activeTab */}
            {activeTab === "home" && (
              <>
                <div className="greeting-section">
                  <h1 className="greeting-title">Good Evening! Ajay</h1>
                  <button className="add-widget-btn">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b888deff3c1af1b5f841505117da2f720afb35?placeholderIfAbsent=true"
                      alt=""
                      className="btn-icon"
                    />
                    Add Widget
                  </button>
                </div>
                <div className="score-cards-container">
                  {scoreCardsData.map((card, index) => (
                    <ScoreCard key={index} {...card} />
                  ))}
                </div>

                <WorkAllocatedSection />

                <div className="single-line">
                  <EmployeeProgressSection />
                </div>

                <div className="two-column">
                  <PersonalNotepad />
                  <DepartmentAllocation />
                </div>

                <div className="two-column">
                  <OverdueTasksTable />
                  <Workflows />
                </div>

              </>
            )}
            {/* For other tabs, display blank content */}
            {activeTab === "tasks" && <div className="blank-content">No Data Available</div>}
            {activeTab === "issues" && <div className="blank-content">No Data Available</div>}
            {activeTab === "workflow" && <div className="blank-content">No Data Available</div>}
            {activeTab === "calendar" && <div className="blank-content">No Data Available</div>}
            {activeTab === "browse" && <div className="blank-content">No Data Available</div>}
            {activeTab === "template" && <div className="blank-content">No Data Available</div>}
            {activeTab === "user-management" && <div className="blank-content">No Data Available</div>}
            {activeTab === "reports" && <div className="blank-content">No Data Available</div>}
            {activeTab === "logout" && <div className="blank-content">Logging Out...</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutletHomepage;