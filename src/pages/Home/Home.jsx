import React, { useEffect, useState } from "react";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import useFetch from "../../hooks/useFetch/useFetch";
import Select from "../../components/Select/Select";
import IssueCard from "../../components/IssueCard/IssueCard";
import { sortByDate } from '../../utils/dateUtils.js'

const Home = () => {
  const { data: issuesData } = useFetch();

  const [activeFilter, setActiveFilter] = useState(undefined);
  const [data, setData] = useState([]);

  const selectOptions = [
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

  useEffect(() => {
    if (activeFilter?.value) {
      setData(
        issuesData.filter((issue) => {
          if (activeFilter.value === 'all') {
            return issue
          }
          return issue.status === activeFilter.value
        })
      );
    } else {
      setData(issuesData);
    }
  }, [activeFilter]);

  useEffect(() => {
    setData(sortByDate(issuesData));
  }, [issuesData]);

  return (
    <LayoutWrapper>
      <section>
        <Select options={selectOptions} setSelected={setActiveFilter} className="my-12"/>
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {data.map((issue) => (
            <li key={`item-${issue.id}`} className="flex">
              <IssueCard option={issue}/>
            </li>
          ))}
        </ul>
      </section>
    </LayoutWrapper>
  );
};

export default Home;
