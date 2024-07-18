import React from 'react';

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="p-8 bg-transparent relative shadow-lg rounded-lg z-50">
        <button 
          onClick={onClose}
          className="absolute top-2 text-white right-2"
        >
        <img src="/icons/multiply-cancel.png" alt="clear" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
