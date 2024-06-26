import React from "react";
import IssueCard from "../IssueCard/IssueCard";

const IssueList = ({ data }) => {
  return data.length ? (
    <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {data.map((issue) => (
        <IssueCard key={`item-${issue.id}`} option={issue} />
      ))}
    </ul>
  ) : (
    <section className="flex flex-col justify-center items-center gap-2 p-16 border-2 border-dashed rounded-3xl text-center bg-zinc-800/90">
      <span className="text-2xl">There is no issues</span>
    </section>
  );
};

export default IssueList;
