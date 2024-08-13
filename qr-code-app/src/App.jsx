import React from 'react';
import QRReader from './componends/QRReader.jsx';
import QRGenerator from './componends/QRGenarater.jsx';

const App = () => {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     <div className="min-h-screen relative rounded-xl flex flex-col items-center justify-center">
      <div className="w-full h-full max-w-md m-10 p-4 bg-gray-300 rounded shadow-md">
      <h1 className="text-4xl font-bold mb-8">QR Code App</h1>
        <QRReader />
      </div>
      <div className="w-full max-w-md p-4 m-10 h-full bg-gray-400 rounded shadow-md">
        <QRGenerator />
      </div>
    </div>
   </div>
  );
};

export default App;
