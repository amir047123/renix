import React, { useState, useEffect } from "react";

const UnderConstruction = () => {
  // Set the target date for the countdown (Year, Month Index (0-11), Day, Hour, Minute, Second)
  const targetDate = new Date(2024, 1, 20, 0, 0, 0); // February 20, 2024

  // State variables to hold the countdown values
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Function to update the countdown
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-screen bg-primary from-teal-400 to-blue-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl">
        We are <b>Almost</b> there!
      </h1>
      <h1 className="text-5xl">
        React JS <b>AND</b> Node JS APP
      </h1>
      <p>Stay tuned for something amazing!!!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 lg:mt-20">
        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{days}</p>
          <p className="px-10 py-5">days</p>
        </div>

        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{hours}</p>
          <p className="px-10 py-5">hours</p>
        </div>

        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{minutes}</p>
          <p className="px-10 py-5">mins</p>
        </div>

        <div className="bg-transparent border text-center">
          <p className="text-5xl px-10 py-5">{seconds}</p>
          <p className="px-10 py-5">secs</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
