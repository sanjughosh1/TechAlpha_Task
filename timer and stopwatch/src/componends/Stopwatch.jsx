import React, { useState, useRef } from 'react';

const formatTime = (time) => {
  const getDoubleDigits = (unit) => (unit < 10 ? `0${unit}` : `${unit}`);

  const milliseconds = time % 1000;
  const totalSeconds = Math.floor(time / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${getDoubleDigits(hours)}:${getDoubleDigits(minutes)}:${getDoubleDigits(seconds)}:${getDoubleDigits(Math.floor(milliseconds / 10))}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update every 10ms
      }, 10);
      setIsRunning(true);
    }
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="text-center bg-purple-700 p-7 mb-10">
      <h1 className="text-4xl text-white font-bold">Stopwatch</h1>
      <div className="text-8xl text-gray-300 mt-4">{formatTime(time)}</div>
      <div className="mt-4">
        <button
          onClick={startStopwatch}
          className={`px-4 py-2 rounded mr-2 ${isRunning ? 'bg-red-500' : 'bg-green-500'} text-white`}
        >
          {isRunning ? 'Stop' : time === 0 ? 'Start' : 'Resume'}
        </button>
        <button
          onClick={resetStopwatch}
          className="px-4 py-2 bg-blue-500 text-white rounded">
          Reset
        </button>

        <p className='text-white m-10 text-xl'>Online Timer & Stopwatch</p>

        <p  className='text-white m-10 text-xl'>Tracking time can transform the way your work. Track time, get and share insight reports, and stop wondering where your day went.</p>


      </div>
    </div>
  );
};

export default Stopwatch;
