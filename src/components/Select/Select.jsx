import React, { useState } from "react";
import "./Select.scss";

const Select = ({ options, setSelected, className }) => {
  const [active, setActive] = useState({ text: "Filter...", value: undefined });
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
        <span className="material-symbols-outlined ml-2">filter_list</span>
      </button>
      <div className="select-options">
        <p onClick={() => handleSelect({ text: "All", value: "all" })}>All</p>
        {options.map((option) => (
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
