import React from "react";
import IssueCard from "../IssueCard/IssueCard";

const IssueList = ({data}) => {
  return (
    <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {data.map((issue) => (
        <IssueCard key={`item-${issue.id}`} option={issue} />
      ))}
    </ul>
  );
};

export default IssueList;
