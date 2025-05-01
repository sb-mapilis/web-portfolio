import React from "react";

const CornerLines = () => {
  return (
    <div className="corner-lines">
      {/* Horizontal lines */}
      <div className="h-line line-1" />
      <div className="h-line line-2" />
      <div className="h-line line-3" />

      {/* Vertical lines */}
      <div className="v-line line-1" />
      <div className="v-line line-2" />
      <div className="v-line line-3" />
    </div>
  );
};

export default CornerLines;
