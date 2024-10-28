"use client";

import { useSpring, motion } from "framer-motion";
import React, { useState } from "react";

const HoverTooltip = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 300, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMouseMove = (event) => {
    if (!visible) {
      // Only set position when tooltip becomes visible
      mouseX.set(event.clientX + 10);
      mouseY.set(event.clientY + 10);
    } else {
      // Update the spring position smoothly
      mouseX.set(event.clientX + 10);
      mouseY.set(event.clientY + 10);
    }
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
        <motion.div
          className={`px-4 py-2 text-white text-xs rounded-xl shadow-lg pointer-events-none backdrop-filter backdrop-blur-sm bg-rose-800/20`}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            x: mouseX,
            y: mouseY,
            zIndex: 1000,
          }}
        >
          click to read see my projects...
        </motion.div>
      )}
    </div>
  );
};

export default HoverTooltip;
