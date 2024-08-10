import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRGenerator = () => {
  const [description, setDescription] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleGenerate = () => {
    setQrValue(description);
  };

  const handleClear = () => {
    setDescription('');
    setQrValue('');
  };

  return (
    <div className="  p-4">
      <h2 className="text-2xl font-bold mb-4">QR Code Generator</h2>
      <div className="mb-4">
        <label className="block text-lg font-bold mb-2" htmlFor="description">
          Description:
        </label>
        <textarea
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter a description"
        rows={3}
        ></textarea>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleGenerate}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Generate QR Code
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear
        </button>
      </div>
      <div className='h-[20rem] w-[20rem] p-2'>
      {qrValue && (
        <div className="mt-4">
          <QRCode className='p-2 m-2' value={qrValue} size={256} />
        </div>
      )}
      </div>
    </div>
  );
};

export default QRGenerator;
