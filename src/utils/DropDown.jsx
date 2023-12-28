import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file for styling

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    setShowDropdown(!showDropdown);
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="dropdown-container">
      <div className="trigger" onClick={handleClick}>
        Click me
      </div>
      {showDropdown && (
        <div className="dropdown" style={{ top: position.y, left: position.x }}>
          {/* Dropdown content */}
          <p>Dropdown Content</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
