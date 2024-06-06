import React from 'react';
import './RectanglesRow.css';

const RectanglesRow = () => {
  return (
    <div className="rectangles-container">
      <div className="rectangle1"></div>
      <div className="rectangle2">
        <div className="black-part"></div>
        <div className="white-part"></div>
      </div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
    </div>
  );
}

export default RectanglesRow;
