import React, { useEffect, useState } from "react";
import issues from "../../data/issues.json";

const useFetch = () => {
  const [data, setData] = useState([]);

  const fetchIssues = () => {
    try {
      setData(issues);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => fetchIssues(), []);

  return { data };
};

export default useFetch;
