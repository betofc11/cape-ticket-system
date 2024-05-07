import React, { useEffect, useState } from "react";
import AssignTechnician from "./Form/AssignTechnician";
import SpareParts from "./Form/SpareParts";
import StatusSelect from "./Form/StatusSelect";
import DetailsReport from "./Form/DetailsReport";
import useFetch from "../../hooks/useFetch/useFetch";
import Modal from "../Modal/Modal";
import Spinner from "../Spinner/Spinner";

const IssueForm = ({ data }) => {
  const [reportData, setReportData] = useState({
    ...data,
    spareParts: [],
    details: "",
    technician: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState(<Spinner />)

  useEffect(() => setReportData(prev => ({...prev, ...data})), [data]);

  const { edit } = useFetch("issues");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true)
    edit(data.id, reportData).then(() => {
      setModalData(`Issue ${reportData?.id} actualizado`)
      setTimeout(() => setIsModalOpen(false), 2000)
    });
  };

  return (
    <div className="w-full drop-shadow-xl bg-zinc-700 flex flex-col p-16 mt-8 rounded-lg">
      <div onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="font-extrabold text-3xl mb-6">Reports</h2>
        <StatusSelect actual={reportData?.status} setStatus={setReportData} />
        <SpareParts data={reportData} setData={setReportData} />
        <AssignTechnician data={reportData} setTechnician={setReportData} />
        <DetailsReport setDetails={setReportData} data={reportData?.details}/>
        <button
          className="flex mt-5 w-fit ml-auto bg-green-800 hover:border-green-950"
          onClick={handleSubmit}
        >
          Update report{" "}
          <span className="material-symbols-outlined ml-2">publish</span>
        </button>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          {modalData}
        </Modal>
      </div>
    </div>
  );
};

export default IssueForm;
