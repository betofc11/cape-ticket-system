import React from "react";
import "./IssueCard.scss";
import { Link } from "react-router-dom";

const STATUS = {
  done: {
    label: "Finished",
    icon: (
      <span className="material-symbols-outlined state-icon">check_circle</span>
    ),
  },
  inProgress: {
    label: "Active",
    icon: (
      <span className="material-symbols-outlined state-icon rotate-icon">
        app_badging
      </span>
    ),
  },
  open: {
    label: "Pending",
    icon: (
      <span className="material-symbols-outlined state-icon">
        pending_actions
      </span>
    ),
  },
};

const IssueCard = ({ option, className }) => {
  return (
    <Link to={`issue/${option.id}`} className="flex flex-1">
      <div
        className={`flex-1 card ${className ? className : ""} issue ${
          option.status
        }`}
      >
        <p className="flex mb-4">
          <span className="font-extrabold text-xl mr-2">
            {STATUS[option.status].label}
          </span>
          {STATUS[option.status].icon}
        </p>
        <p>
          <span className="font-bold">Issue:</span> {option.issueTitle}
        </p>
        <p>
          <span className="font-bold">Equipment:</span>
          {option.medicalEquipmentName}
        </p>
        <p>
          <span className="font-bold">Owner:</span> {option.ownerName}
        </p>
        <p>
          <span className="font-bold">Date:</span> {option.reportDate}
        </p>
      </div>
    </Link>
  );
};

export default IssueCard;
