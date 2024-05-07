import React, { useState, useEffect } from "react";
import Select from "../Select/Select";


const selectOptions = [
  {
    text: "All",
    value: "all",
  },
  {
    text: "Active",
    value: "inProgress",
  },
  {
    text: "Finished",
    value: "done",
  },
  {
    text: "Pending",
    value: "open",
  },
];

const IssueFilter = ( { setData, data }) => {

  const [activeFilter, setActiveFilter] = useState(undefined);



  useEffect(() => {
    if (activeFilter?.value) {
      setData(
        data.filter((issue) => {
          if (activeFilter.value === "all") {
            return issue;
          }
          return issue.status === activeFilter.value;
        })
      );
    } else {
      setData(data);
    }
  }, [activeFilter]);
  return (
    <Select
      options={selectOptions}
      setSelected={setActiveFilter}
      className="my-12"
      iconName="filter_list"
      label="Filter..."
    />
  );
};

export default IssueFilter;
