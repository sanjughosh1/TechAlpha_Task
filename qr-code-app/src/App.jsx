import React from 'react';
import QRReader from './componends/QRReader.jsx';
import QRGenerator from './componends/QRGenarater.jsx';

const App = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
     <div className="min-h-screen relative rounded-xl bg-gray-900 flex items-center justify-center">
      <div className="w-full h-full max-w-md p-4 bg-gray-300 rounded shadow-md">
      <h1 className="text-4xl font-bold mb-8">QR Code App</h1>
        <QRReader />
      </div>
      <div className="w-full max-w-md p-4 h-full bg-gray-400 rounded shadow-md">
        <QRGenerator />
      </div>
    </div>
   </div>
  );
};

export default App;
