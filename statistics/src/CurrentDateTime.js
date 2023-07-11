import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const year = date.getFullYear().toString().slice(-2); // Extract last two digits of the year
      const formattedDate = `${year}-${date.getMonth() + 1}-${date.getDate()}`;
      setCurrentDate(formattedDate);

      const hours = date.getHours();
      const minutes = date.getMinutes();
      setCurrentTime(`${hours}:${minutes}`);
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
     
      <p>{currentDate}</p>
      <p>{currentTime}</p>
    
    </div>
  );
};

export default CurrentDateTime;
