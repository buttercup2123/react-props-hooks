import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      More
      {isOpen && (
        <ul className="dropdown-content">
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
