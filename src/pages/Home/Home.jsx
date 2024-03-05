import React from "react";
import LayoutWrapper from "../../components/LayoutWrapper/LayoutWrapper";
import useFetch from "../../hooks/useFetch/useFetch";
import './Home.scss'

const Home = () => {
  console.log("Home");
  const { data: issuesData } = useFetch();
  return (
    <LayoutWrapper>
      <section>
        <h2 className="mb-12">Active Tickets</h2>

        <ul className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {issuesData.map((issue) => (
            <li key={`item-${issue.id}`} className="flex">
              <div className={`flex-1 card issue ${issue.status}`}>
                <p>
                  <span className="font-bold">Issue:</span> {issue.issueTitle}
                </p>
                <p>
                  <span className="font-bold">Equipment:</span> {issue.medicalEquipmentName}
                </p>
                <p>
                  <span className="font-bold">Owner:</span> {issue.ownerName}
                </p>
                <p>
                  <span className="font-bold">Date:</span> {issue.reportDate}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </LayoutWrapper>
  );
};

export default Home;
