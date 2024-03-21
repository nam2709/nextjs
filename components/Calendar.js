import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calen.css';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleSelectDate = (newDate) => {
    setDate(newDate);
    setShowCalendar(false); // Hide the calendar after a date is selected
  };

  const handleShowToday = () => {
    const today = new Date();
    setDate(today);
  };

  return (
    <div>
      <button onClick={handleShowCalendar} style={{padding:'20px'}}>Select Date</button>
      {showCalendar && (
        <Calendar onChange={handleSelectDate} value={date} />
      )}
      <br />
      <p>Selected Date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
