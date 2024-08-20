import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [time, setTime] = useState(0); // Time in seconds
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }

    if (time === 0 && isActive) {
      setIsActive(false);
      alert('Time is up!');
    }

    return () => clearInterval(interval);
  }, [isActive, isPaused, time]);

  const handleStart = () => {
    const totalTimeInSeconds = convertToSeconds();
    if (totalTimeInSeconds > 0) {
      setTime(totalTimeInSeconds);
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const handleResate = () => {
    setHours("00");
    setMinutes("00");
    setSeconds("00");
    setTime(0);
  };

  const handleResume = () => {
    if (time > 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const convertToSeconds = () => {
    return (
      parseInt(hours, 10) * 3600 +
      parseInt(minutes, 10) * 60 +
      parseInt(seconds, 10)
    );
  };

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="h-[20rem] flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4">Timer</h1>
      <div className="flex items-center mb-4">
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value.padStart(2,''))}
          placeholder="HH"
          min="0"
          max="99"
          className="w-16 p-2 border rounded-md text-center"
        />
        <span className="px-2">:</span>
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value.padStart(2, ''))}
          placeholder="MM"
          min="0"
          max="59"
          className="w-16 p-2 border rounded-md text-center"
        />
        <span className="px-2">:</span>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value.padStart(2, ''))}
          placeholder="SS"
          min="0"
          max="59"
          className="w-16 p-2 border rounded-md text-center"
        />
      </div>
      <div className="text-2xl font-mono mb-4">
        {formatTime(time)}
      </div>
      <div className="flex space-x-4">
        {!isActive && (
          <button
            onClick={handleStart}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Start
          </button>
        )}
        {isActive && !isPaused && (
          <button
            onClick={handlePause}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Pause
          </button>
        )}
        {isActive && isPaused && (
          <button
            onClick={handleResume}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Resume
          </button>
        )}
        <button
          onClick={handleResate}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  </div>
  );
};

export default Timer;
