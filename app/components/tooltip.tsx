"use client";

import React, { useState } from "react";

const HoverTooltip = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX + 15, // Offset the tooltip by 10px
      y: event.clientY - 30,
    });
  };

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div
      className="relative inline-block cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <div
          className={`fixed px-4 py-2 text-white text-xs rounded-xl shadow-lg pointer-events-none backdrop-filter backdrop-blur-sm bg-rose-800/20`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            zIndex: 1000,
          }}
        >
          click to read see my projects...
        </div>
      )}
    </div>
  );
};

export default HoverTooltip;
