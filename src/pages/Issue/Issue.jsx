import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import IssueWidget from "../../components/IssueDetails/IssueWidget";
import useFetch from "../../hooks/useFetch/useFetch";
import ReportsForm from "../../components/IssueDetails/ReportsForm";

const Issue = () => {
  const { id } = useParams();
  const { get, state } = useFetch("issues", {});
  const [issueData, setIssueData] = useState({});

  useEffect(() => {
    get(id);
  }, []);

  useEffect(() => {
    setIssueData(state?.singleData);
  }, [state]);

  return (
    <LayoutWrapper>
      <IssueWidget data={issueData} />
      <ReportsForm data={issueData}/>
    </LayoutWrapper>
  );
};

export default Issue;
