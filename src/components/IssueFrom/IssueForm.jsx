import React, { useState } from "react";
import InputField from "../InputField/InputField";
import Pill from "../Pill/Pill";
import Select from "../Select/Select";

const IssueForm = () => {
  const [data, setData] = useState({
    spareParts: [],
  });
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSparePartsKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      addSpareParts(e.target.value);
      e.target.value = "";
    }
  };

  const addSpareParts = (item) => {
    setData((prev) => ({ ...prev, spareParts: [...prev.spareParts, item] }));
  };

  return (
    <div className="w-full drop-shadow-xl bg-zinc-700 flex flex-col p-16 mt-8 rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="font-extrabold text-3xl mb-6">Reports</h2>
        <div className="flex gap-2 items-start">
          <div className="flex items-center gap-2 min-w-96">
            <span className="mr-1">Spare Parts:</span>
            <InputField
              inputProps={{
                type: "text",
                name: "spareParts",
                id: "spareParts",
                onKeyDown: handleSparePartsKeyUp,
              }}
              buttonProps={{
                type: "button",
                onClick: () => console.log("ButtonClick"),
              }}
              buttonLabel="Add"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {data?.spareParts?.map((sP, index) => (
              <Pill key={`${sP}-${index}`}>{sP}</Pill>
            ))}
          </div>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <span className="mr-1">Asssigned technician:</span>
          <Select iconName="unfold_more" label="Unnasigned" />
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
