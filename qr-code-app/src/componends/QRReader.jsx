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
      <div className="relative flex h-[10rem] w-[10rem]">
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
        <div className="flex flex-col space-x-4 m-4">
          <button
            onClick={toggleCamera}
            className="px-2 py-2 w-[6rem] mx-4 bg-green-500 text-white rounded"
          >
            {cameraOn ? 'Close Camera' : 'Open Camera'}
          </button>
          <button
            onClick={toggleScanning}
            className={`px-2 py-2 w-[6rem] text-white rounded ${cameraOn ? 'bg-blue-500' : 'bg-gray-500 cursor-not-allowed'}`}
            disabled={!cameraOn}
          >
            {scanning ? 'Stop Scanning' : 'Start Scanning'}
          </button>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-xl font-bold mb-1">Or Upload Image:</h3>
        <div
          {...getRootProps({
            className:
              'border-dashed border-2 bg-white border-gray-300 p-2 rounded cursor-pointer',
          })}
        >
          <input {...getInputProps()} />
          <p>Drag & drop an image here, or click to select one</p>
        </div>
      </div>
      <div className="mt-3">
        <label className="block text-lg font-bold mb-2" htmlFor="scannedResult">Scanned Result:</label>
        <textarea 
          type="text"
          id="scannedResult"
          value={result}
          onChange={(e) => setResult(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded">
          </textarea>
       
      </div>
      <div className='flex justify-center'>
      <button
          onClick={handleClear}
          className="flex p-3 m-2 bg-red-500 text-white rounded"> 
          Clear
      </button>
      </div>

    </div>
  );
};

export default QRReader;
