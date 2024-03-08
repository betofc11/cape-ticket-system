import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import IssueWidget from "../../components/IssueWidget/IssueWidget";
import useFetch from "../../hooks/useFetch/useFetch";
import IssueForm from "../../components/IssueFrom/IssueForm";

const Issue = () => {
  const { id } = useParams();
  const { getIssue } = useFetch();
  const [issueData, setIssueData] = useState({});

  useEffect(() => {
    const actualIssue = getIssue(Number(id));
    setIssueData(actualIssue);
  }, []);

  return (
    <LayoutWrapper>
      <IssueWidget data={issueData} />
      <IssueForm />
    </LayoutWrapper>
  );
};

export default Issue;
