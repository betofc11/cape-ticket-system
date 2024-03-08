import { useEffect, useState } from "react";
import issues from "../../data/issues.json";
import firebase from "../../../firebase";
import { ref, set, getDatabase, onValue } from "firebase/database";

const db = getDatabase(firebase);

const useFetch = () => {
  const [data, setData] = useState([]);

  const fetchIssues = () => {
    try {
      onValue(ref(db, "issues/"), (ss) => {
        setData(ss.val());
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getIssue = (id) => {
    try {
      const findedIssue = issues.find((issue) => issue.id === id);
      return findedIssue ? findedIssue : {};
    } catch (error) {
      console.error(error);
    }
  };

  const addIssue = () => {
    try {
      set(ref(db, `issues/`), issues);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => fetchIssues(), []);

  return { data, getIssue, addIssue };
};

export default useFetch;
