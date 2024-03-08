import React from "react";

const IssueWidget = ({ data }) => {
  return (
    <div className="w-full drop-shadow-xl bg-zinc-700 flex flex-col p-16 rounded-lg">
      <div className="grid gap-y-10 gap-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div>
          <p className="font-extrabold">ID: </p>
          <p>{data?.id || "-"}</p>
        </div>
        <div>
          <p className="font-extrabold">Title: </p>{" "}
          <p>{data?.issueTitle || "-"}</p>
        </div>
        <div>
          <p className="font-extrabold">Device: </p>{" "}
          <p>{data?.medicalEquipmentName || "-"}</p>
        </div>
        <div>
          <p className="font-extrabold">Owner: </p>{" "}
          <p>{data?.ownerName || "-"}</p>
        </div>
        <div>
          <p className="font-extrabold">Status: </p>{" "}
          <p>{data?.status || "-"}</p>
        </div>
        <div>
          <p className="font-extrabold">Report Date: </p>{" "}
          <p>{data?.reportDate || "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default IssueWidget;
