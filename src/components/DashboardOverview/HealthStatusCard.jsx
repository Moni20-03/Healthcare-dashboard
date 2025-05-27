import React from 'react';

const HealthStatusCard = ({ organ, date, statusColor, icon }) => {
  return (
    <div className="health-status-card">
      <div className="card-content">
        <div className="organ-row">
          <div className="icon">{icon}</div>
          <span className="organ">{organ}</span>
        </div>
        <span className="date">Date: {date}</span>
      </div>
      <div className="status-bar-container">
        <div 
          className="status-bar" 
          style={{ 
            backgroundColor: statusColor,
            width: '70%' 
          }} 
        />
      </div>
    </div>
  );
};

export default HealthStatusCard;