import React from "react";
import logo from "../../assets/images/logo.png";

const Navigation = ({ showOptions = false, options }) => {
  return (
    <nav className=" flex w-full bg-sky-950 p-4">
      <div className="logo-container">
        <img src={logo} alt="Cape Healthcare" className="w-24" />
      </div>
      {options && showOptions && (
        <ul>
          {options.map((option) => (
            <li key={option.id}>
              <a href={option.link}>{option.text}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
