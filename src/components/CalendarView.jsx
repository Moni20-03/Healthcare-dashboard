import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../components/styles/CalendarView.css';

const CalendarSection = () => {
  const days = [
    { day: 'Mon', date: 25, times: ['10:00', '11:00', '12:00'] },
    { day: 'Tue', date: 26, times: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, times: ['12:00', '—', '13:00'] },
    { day: 'Thurs', date: 28, times: ['10:00', '11:00', '—'] },
    { day: 'Fri', date: 29, times: ['—', '14:00', '16:00'] },
    { day: 'Sat', date: 30, times: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, times: ['09:00', '10:00', '11:00'] },
  ];

  const isUpcoming = (day, time) => {
    return (
      (day === 'Thurs' && time === '11:00') ||
      (day === 'Sat' && time === '12:00') ||
      (day === 'Sun' && time === '09:00')
    );
  };

  return (
    <div className="calendar-section">
      <div className="calendar-header">
        <div className="month-navigation">
          <h4>October 2021</h4>
          <div className="arrow-navigation">
            <FaChevronLeft className="arrow-button" />
            <FaChevronRight className="arrow-button" />
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        {/* Day headers */}
        {days.map((day) => (
          <div key={day.day} className="day-header">
            {day.day}
          </div>
        ))}
        
        {/* Dates */}
        {days.map((day) => (
          <div key={`date-${day.day}`} className="date-cell">
            {day.date}
          </div>
        ))}
        
        {/* Time slots - row 1 */}
        {days.map((day) => (
          <div 
            key={`time1-${day.day}`} 
            className={`time-slot ${
              isUpcoming(day.day, day.times[0]) ? 'upcoming' : ''
            }`}
          >
            {day.times[0]}
          </div>
        ))}
        
        {/* Time slots - row 2 */}
        {days.map((day) => (
          <div 
            key={`time2-${day.day}`} 
            className={`time-slot ${
              isUpcoming(day.day, day.times[1]) ? 'upcoming' : ''
            } ${day.times[1] === '09:00' ? 'active' : ''}`}
          >
            {day.times[1]}
          </div>
        ))}
        
        {/* Time slots - row 3 */}
        {days.map((day) => (
          <div 
            key={`time3-${day.day}`} 
            className={`time-slot ${
              isUpcoming(day.day, day.times[2]) ? 'upcoming' : ''
            }`}
          >
            {day.times[2]}
          </div>
        ))}
      </div>

      <div className="appointment-cards">
  <div className="card dentist active">
    <div className="cards-content">
      <div className="card-details">
        <div className="title-row">
          <h5>Dentist</h5>
          <div className="card-icon">🦷</div>
        </div>
        <p className="time">09:00-11:00</p>
        <p className="doctor">Dr. Cameron Williamson</p>
      </div>
    </div>
  </div>

  <div className="card physiotherapy">
    <div className="cards-content">
      <div className="card-details">
        <div className="title-row">
          <h5>Physiotherapy Appointment</h5>
          <div className="card-icon">💪</div>
        </div>
        <p className="time">11:00-12:00</p>
        <p className="doctor">Dr. Kevin Djones</p>
      </div>
    </div>
  </div>
    </div>
    </div>
  );
};

export default CalendarSection;