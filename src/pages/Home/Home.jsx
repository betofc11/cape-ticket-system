import React, { useEffect, useState } from "react";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import useFetch from "../../hooks/useFetch/useFetch";
import IssueFilter from "../../components/IssueFilter/IssueFilter.jsx";
import { sortByDate } from "../../utils/dateUtils.js";
import IssueList from "../../components/IssueList/IssueList.jsx";

const Home = () => {
  const { state: issuesData } = useFetch('issues', []);

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log({ issuesData, byDate: sortByDate(issuesData?.data) })
    // setData(issuesData?.data);
    setData(sortByDate(issuesData?.data))
  }, [issuesData]);

  return (
    <LayoutWrapper>
      <section>
        <IssueFilter data={issuesData?.data} setData={setData} />
        <IssueList data={data}/>
      </section>
    </LayoutWrapper>
  );
};

export default Home;
