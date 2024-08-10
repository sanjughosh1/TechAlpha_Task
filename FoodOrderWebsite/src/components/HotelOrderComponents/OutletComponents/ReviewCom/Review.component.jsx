// src/App.jsx
import React, { useRef, useState } from 'react';
import LeftMenu from './left.components.jsx';
import RightContent from './right.components.jsx';

const Review = () => {
  const [selectedMenu, setSelectedMenu] = useState('Recommended (5)');
  const rightContentRef = useRef(null);

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
    if (rightContentRef.current) {
      rightContentRef.current.classList.remove('slide-in');
      void rightContentRef.current.offsetWidth; // trigger reflow
      rightContentRef.current.classList.add('slide-in');
    }
  };

  return (
    <div className="flex p-4">
      <LeftMenu onSelect={handleMenuSelect} />
      <div className="transition-transform transform slide-in" ref={rightContentRef}>
        <RightContent selectedMenu={selectedMenu} />
      </div>
    </div>
  );
};

export default Review;
