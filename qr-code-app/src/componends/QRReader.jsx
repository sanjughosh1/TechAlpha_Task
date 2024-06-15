import React, { useState, useRef } from 'react';
import QrScanner from 'react-qr-scanner';
import { useDropzone } from 'react-dropzone';

const QRReader = () => {
  const [result, setResult] = useState('No result');
  const [cameraOn, setCameraOn] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scannerKey, setScannerKey] = useState(Date.now());
  const scannerRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      setResult(data.text);
      setScanning(false);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const toggleCamera = () => {
    setCameraOn(!cameraOn);
    if (cameraOn) {
      setScanning(false);
    }
  };

  const toggleScanning = () => {
    if (cameraOn) {
      setScannerKey(Date.now());  // Refresh the scanner
      setScanning(!scanning);
    } else {
      alert('Please open the camera first');
    }
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = () => {
        setResult(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClear = () => {
    setResult('No result');
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">QR Code Reader</h2>
      <div className="relative">
        {cameraOn && (
          <QrScanner
            key={scannerKey}
            ref={scannerRef}
            delay={300}
            onError={handleError}
            onScan={scanning ? handleScan : null}
            style={{ width: '100%', height: 'auto' }}
          />
        )}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={toggleCamera}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            {cameraOn ? 'Close Camera' : 'Open Camera'}
          </button>
          <button
            onClick={toggleScanning}
            className={`px-4 py-2 text-white rounded ${cameraOn ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
            disabled={!cameraOn}
          >
            {scanning ? 'Stop Scanning' : 'Start Scanning'}
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Or Upload Image:</h3>
        <div
          {...getRootProps({
            className:
              'border-dashed border-2 border-gray-300 p-4 rounded cursor-pointer',
          })}
        >
          <input {...getInputProps()} />
          <p>Drag & drop an image here, or click to select one</p>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-lg font-bold mb-2" htmlFor="scannedResult">Scanned Result:</label>
        <input
          type="text"
          id="scannedResult"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
       
      </div>
      <div className='flex justify-center'>
      <button
          onClick={handleClear}
          className="flex p-3 m-3 bg-red-500 text-white rounded"> 
          Clear
      </button>
      </div>

    </div>
  );
};

export default QRReader;
