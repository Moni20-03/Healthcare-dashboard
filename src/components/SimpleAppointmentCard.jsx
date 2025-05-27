import React from 'react';
const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <div className="appointment-card">
      <p className="appointment-day">{appointment.day}</p>
      <p className="appointment-title">{appointment.title}</p>
      <p className="appointment-time">{appointment.time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;