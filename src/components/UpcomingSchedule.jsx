import React from 'react';
import './styles/UpcomingSchedule.css';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      
      <div className="schedule-day">
        <h4>On Thursday</h4>
        <div className="appointment-row">
          <div className="appointment-card">
            <div className="card-header">
              <h5>Health checkup complete</h5>
              <div className="card-icon">💉</div>
            </div>
            <p className="time">11:00 AM</p>
          </div>
          <div className="appointment-card">
            <div className="card-header">
              <h5>Ophthalmologist</h5>
              <div className="card-icon">👁️</div>
            </div>
            <p className="time">14:00 PM</p>
          </div>
        </div>
      </div>
      
      <div className="schedule-day">
        <h4>On Saturday</h4>
        <div className="appointment-row">
          <div className="appointment-card">
            <div className="card-header">
              <h5>Cardiologist</h5>
              <div className="card-icon">❤️</div>
            </div>
            <p className="time">12:00 AM</p>
          </div>
          <div className="appointment-card">
            <div className="card-header">
              <h5>Neurologist</h5>
              <div className="card-icon">👨‍⚕️</div>
            </div>
            <p className="time">16:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;