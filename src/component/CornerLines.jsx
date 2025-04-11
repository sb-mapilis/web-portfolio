import React from 'react';
 
const CornerLines = () => {
  return (
    <div className="corner-lines">
      {/* Horizontal lines */}
      <div className="h-line" style={{ top: 0, width: '95vw' }} />
      <div className="h-line" style={{ left: '20px', top: '20px', width: '85vw' }} />
      <div className="h-line" style={{left: '40px', top: '40px', width: '75vw' }} />

      {/* Vertical lines */}
      <div className="v-line" style={{ left: 0, height: '70vh' }} />
      <div className="v-line" style={{ left: '20px', top: '20px', height: '80vh' }} />
      <div className="v-line" style={{ left: '40px', top: '40px', height: '90vh' }} />
    </div>
  );
};

export default CornerLines;
