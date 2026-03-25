import React from 'react';

const SpiderIcon = ({ size = 20, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Body */}
    <ellipse cx="12" cy="15" rx="3" ry="4" />
    <circle cx="12" cy="9" r="2" />
    
    {/* Upper Legs */}
    <path d="M9 7L5 4" />
    <path d="M15 7L19 4" />
    
    {/* Mid Upper Legs */}
    <path d="M8 10L3 9" />
    <path d="M16 10L21 9" />
    
    {/* Mid Lower Legs */}
    <path d="M8 13L3 14" />
    <path d="M16 13L21 14" />
    
    {/* Lower Legs */}
    <path d="M9 16L5 20" />
    <path d="M15 16L19 20" />
  </svg>
);

export default SpiderIcon;
