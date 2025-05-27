import React from 'react';
import DashboardOverview from './DashboardOverview/DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import './styles/DashboardMainContent.css';

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="dashboard-details">
          <span>This week</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="down-arrow-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
            height="16"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className="dashboard-layout">
        <div className="left-column">
          <DashboardOverview />
          <ActivityFeed />
        </div>
        <div className="right-column">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
