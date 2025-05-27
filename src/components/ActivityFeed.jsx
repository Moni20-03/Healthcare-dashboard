import React from 'react';
import '../components/styles/ActivityFeed.css';

const ActivityFeed = () => {
  return (
    <div className="activity-feed-wrapper">
      <div className="details-link">Details →</div>

      <div className="activity-feed">
        <div className="activity-header">
          <h3>Activity</h3>
          <span className="appointment-count">3 appointments this week</span>
        </div>

        <div className="activity-chart-group">
          {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => {
            const isPattern1 = ['Mon', 'Wed', 'Thurs', 'Sat'].includes(day);
            return (
              <div className="day-group" key={index}>
                <div className="bar-pattern">
                  {isPattern1 ? (
                    <>
                      <div className="chart-bar grey-long"></div>
                      <div className="chart-bar blue-short"></div>
                      <div className="chart-bar split-grey"></div>
                      <div className="chart-bar composite-bar"></div>
                    </>
                  ) : (
                    <>
                      <div className="chart-bar grey-long"></div>
                      <div className="chart-bar composite-bar"></div>
                      <div className="chart-bar split-grey"></div>
                      <div className="chart-bar blue-long"></div>
                    </>
                  )}
                </div>
                <div className="day-label">{day}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
