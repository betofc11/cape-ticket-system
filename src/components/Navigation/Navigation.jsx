import React, { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import AuthContext from "../../store/authContext";
import Pill from "../Pill/Pill";

const Navigation = ({ showOptions = false, options }) => {
  const { isLoggedIn, logOut } = useContext(AuthContext);
  return (
    <nav className="flex w-full justify-between bg-sky-950 p-4 px-12">
      <Link to="/">
        <div className="flex gap-2">
          <img src={logo} alt="Cape Healthcare" className="w-24" />
          <Pill customClassName="bg-slate-700 text-white">Admin</Pill>
        </div>
      </Link>
      {options && showOptions && (
        <ul className="flex ">
          {options.map((option, indx) => (
            <li key={`${option.text}-${indx}`} className="flex items-center">
              <Link
                to={option.link}
                className="text-white hover:text-gray-400"
                replace
              >
                {option.text}
              </Link>
            </li>
          ))}
          {isLoggedIn && (
            <li className="flex items-center">
              <span className="flex items-center text-white ml-4 hover:text-gray-400 hover:cursor-pointer" onClick={logOut}>
                <span className="material-symbols-outlined mr-1">mode_off_on</span>LogOut
              </span>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
