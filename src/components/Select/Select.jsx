import React, { useState } from "react";
import "./Select.scss";

const Select = ({ options, setSelected, className, iconName, label = "..." }) => {
  const [active, setActive] = useState({ text: label, value: undefined });
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (data) => {
    setSelected(data);
    setActive(data);
    toggleOpen();
  };

  return (
    <div className={`select${isOpen ? " open" : ""}${` ${className}`}`}>
      <button
        className="select-button flex drop-shadow-xl hover:drop-shadow-2xl"
        onClick={toggleOpen}
      >
        {active.text}
        {iconName && <span className="material-symbols-outlined ml-2">{iconName}</span>}
      </button>
      <div className="select-options">
        {options && options.map((option) => (
          <p
            key={option.value}
            id={option.value}
            onClick={() => handleSelect(option)}
          >
            {option.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Select;
