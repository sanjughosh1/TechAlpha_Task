import React, { useState, useRef } from 'react';
import QrScanner from 'react-qr-scanner';
import { useDropzone } from 'react-dropzone';
import jsQR from 'jsqr';

const QRReader = () => {
  const [result, setResult] = useState('No result');
  const [cameraOn, setCameraOn] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scannerKey, setScannerKey] = useState(Date.now());
  const scannerRef = useRef(null);

  const handleScan = (data) => {
    if (data) {
      const rawText = data.text || data.binaryData || data.imageData;
      if (rawText) {
        setResult(rawText); // Set the scanned result
      } else {
        setResult("Unrecognized data format");
      }
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
      setScannerKey(Date.now()); // Refresh the scanner
      setScanning(!scanning);
    } else {
      alert('Please open the camera first');
    }
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const resultData = e.target.result;
        if (file.type.startsWith('image/')) {
          decodeQRCodeFromImage(resultData);
        } else {
          setResult(resultData);
        }
      };

      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file); // Read as Data URL for images
      } else {
        reader.readAsText(file); // Read as text for plain text files
      }
    }
  };

  const decodeQRCodeFromImage = (dataURL) => {
    const image = new Image();
    image.src = dataURL;
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, canvas.width, canvas.height);
        if (code) {
          setResult(code.data);
        } else {
          setResult('No QR code found in image');
        }
      }
    };
  };

  const handleClear = () => {
    setResult('No result');
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="p-4">
      <div className='flex flex-col flex-wrap'>
      <h2 className="text-2xl font-bold mb-4">QR Code Scanner</h2>
      <div className="relative flex h-[15rem] w-[15rem]">
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
            className="px-2 py-3 m-4 w-[6rem] mx-4 bg-green-500 text-white rounded"
          >
            {cameraOn ? 'Close Camera' : 'Open Camera'}
          </button>
          <button
            onClick={toggleScanning}
            className={`px-2 py-3 m-4 w-[6rem] text-white rounded ${cameraOn ? 'bg-blue-500' : 'bg-gray-500 cursor-not-allowed'}`}
            disabled={!cameraOn}
          >
            {scanning ? 'Stop Scanning' : 'Start Scanning'}
          </button>
        </div>
      </div>
      </div>
      <div className='h-[20rem]'>
        <div className="mt-3 w-full flex justify-center items-start">
              <div className="mt-3 w[10rem]">
                <h3 className="text-xl font-bold mb-1">Or Upload QR Code File:</h3>
                <div
                  {...getRootProps({
                    className:
                      'border-dashed border-2 bg-white border-gray-300 p-2 rounded cursor-pointer',
                  })}
                  >
                  <input {...getInputProps()} />
                  <p>Drag & drop a QR code file here, or click to select one</p>
                </div>
              </div>

              <div className='w-[30rem] m-2'>
              <label className="block text-lg font-bold mb-2" htmlFor="scannedResult">Scanned Result:</label>
              <textarea 
                id="scannedResult"
                rows={7}
                value={result} // Display the scanned text
                onChange={(e) => setResult(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded">
              </textarea>
              <div className='flex justify-center'>
                <button
                  onClick={handleClear}
                  className="flex p-3 m-2 bg-red-500 text-white rounded"> 
                  Clear
                </button>
              </div>
              </div>

              
        </div>   
      </div>
    </div>
  );
};

export default QRReader;
