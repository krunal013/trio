"use client";
import React, { useRef } from "react";

const Ripple = ({ children, className = "", onClick }) => {
  const rippleRef = useRef(null);

  const handleClick = (e) => {
    // Create ripple element
    const ripple = document.createElement("span");
    ripple.className = "ripple";

    const rect = rippleRef.current.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    rippleRef.current.appendChild(ripple);

    // Trigger parent click
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 1000);
    if (onClick) onClick(e);
  };

  return (
    <div
      ref={rippleRef}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Ripple;
