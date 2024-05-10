'use client'
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';


const DateTime: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = format(currentDateTime, "EEEE, dd/MM");
  const formattedTime = format(currentDateTime, "HH:mm:ss");

  return (
    <div className='p-1 text-right'>
      <p className='text-sm text-neutral-50'>{formattedDate}</p>
      <p className='text-sm text-neutral-50'>{formattedTime}</p>
    </div>
  );
};

export default DateTime;