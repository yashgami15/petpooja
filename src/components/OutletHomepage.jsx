import React from "react";
import OutletHeader from "./OutletHeader";
import OutletSidebar from "./OutletSidebar";
import ScoreCard from "./ScoreCard";
import WorkAllocatedSection from "./WorkAllocatedSection";
import EmployeeProgressSection from "./EmployeeProgressSection";
import "./styles/OutletHomepage.css";

const OutletHomepage = () => {
  const scoreCardsData = [
    {
      title: "22 Tasks",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/be16870ce85e80eedd927706346089655eefe106?placeholderIfAbsent=true",
      stats: [
        { label: "Ongoing", count: "10", color: "#D9A541", bgColor: "#FFF8E5" },
        { label: "Overdue", count: "2", color: "#D92D20", bgColor: "#FFF0E5" },
        {
          label: "Completed",
          count: "10",
          color: "#039855",
          bgColor: "#ECFDF3",
        },
        {
          label: "Scheduled",
          count: "0",
          color: "#7955A3",
          bgColor: "#F7EDFF",
        },
      ],
    },
    {
      title: "22 Issues",
      icon: null,
      stats: [
        { label: "Open", count: "10", color: "#D9A541", bgColor: "#FFF8E5" },
        { label: "Ignored", count: "2", color: "#D92D20", bgColor: "#FFF0E5" },
        {
          label: "Resolved",
          count: "10",
          color: "#039855",
          bgColor: "#ECFDF3",
        },
      ],
    },
    {
      title: "20 Forms",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9722e785e222680403eb4cc1606551ad6ebf80de?placeholderIfAbsent=true",
      stats: [
        {
          label: "Ongoing Tasks",
          count: "10",
          color: "#D9A541",
          bgColor: "#FFF8E5",
        },
        {
          label: "Open Responses",
          count: "0",
          color: "#7955A3",
          bgColor: "#F7EDFF",
        },
        {
          label: "Submitted Responses",
          count: "10",
          color: "#039855",
          bgColor: "#ECFDF3",
        },
      ],
    },
  ];

  return (
    <div className="outlet-homepage">
      <OutletHeader />
      <div className="main-layout">
        <OutletSidebar />
        <div className="content-area">
          <div className="content-wrapper">
            <div className="greeting-section">
              <h1 className="greeting-title">Good Evening ! Ajay</h1>
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
          </div>

          <WorkAllocatedSection />
          <EmployeeProgressSection />
        </div>
        <div className="main-scrollbar"></div>
      </div>
    </div>
  );
};

export default OutletHomepage;
