import React from 'react';
import QRReader from './componends/QRReader.jsx';
import QRGenerator from './componends/QRGenarater.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">QR Code App</h1>
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md mb-8">
        <QRReader />
      </div>
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <QRGenerator />
      </div>
    </div>
  );
};

export default App;
