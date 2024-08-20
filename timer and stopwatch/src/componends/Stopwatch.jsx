import React, { useState, useRef } from 'react';
import { TypewriterEffect } from "../componends/ui/typewriter-effect.tsx";

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
  const [records, setRecords] = useState([]); // State to store recorded times
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
    setRecords([]); // Clear the records when resetting
  };

  const recordTime = () => {
    setRecords([...records, time]); // Record the current time when the button is clicked
  };

  const words = [
    { text: "Online" },
    { text: "Timer" },
    { text: "and" },
    { text: "Stopwatch.", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="text-center bg-transparent p-7 mb-10">
        <TypewriterEffect className="text-neutral-600 dark:text-neutral-200 text-base mt-10 mb-10" words={words} />
        <h1 className="text-4xl text-neutral-600 dark:text-neutral-200 font-bold">Stopwatch</h1>
        <div className="text-8xl text-gray-300 mt-4">{formatTime(time)}</div>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={startStopwatch}
            className={`px-4 py-2 rounded ${isRunning ? 'bg-red-500' : 'bg-green-500'} text-white`}
          >
            {isRunning ? 'Stop' : time === 0 ? 'Start' : 'Resume'}
          </button>
          <button
            onClick={recordTime}
            className="px-4 py-2 bg-yellow-500 text-white rounded"
            disabled={!isRunning}
          >
            Record
          </button>
          <button
            onClick={resetStopwatch}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Reset
          </button>
        </div>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Tracking time can transform the way your work. Track time, get and share insight reports, and stop wondering where your day went.
        </p>
        {/* Recorded Times Section */}
        <div className="mt-8 h-[10rem] w-[43rem] rounded-2xl bg-slate-600 overflow-y-auto">
          <h2 className="text-2xl text-white m-4">Recorded Times</h2>
          <div className="h-[2px] bg-white w-3/4 mx-20"></div>
          <ul className="text-white text-xl">
            {records.map((record, index) => (
              <li className='collapse-title text-xl font-medium' key={index}>{formatTime(record)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
