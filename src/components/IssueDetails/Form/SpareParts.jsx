import React, { useState } from "react";
import InputField from "./InputField";
import Pill from "../../Pill/Pill";

const SpareParts = ({ setData, data }) => {
  const [currentText, setCurrentText] = useState("");

  const handleSparePartsKeyUp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key === "Enter") {
      addSpareParts();
    }
    return;
  };

  const handleChange = (e) => {
    setCurrentText(e.target.value);
  };

  const addSpareParts = () => {
    if (!currentText) return;
    setData((prev) => ({
      ...prev,
      spareParts: [...prev.spareParts, currentText],
    }));
    setCurrentText("")
  };
  return (
    <section className="flex gap-4 mt-5">
      <div className="flex items-center gap-2 overflow-x-auto">
        <span className="mr-1">Spare Parts:</span>
        <InputField
          value={currentText}
          inputProps={{
            type: "text",
            name: "spareParts",
            id: "spareParts",
            onKeyUp: handleSparePartsKeyUp,
            onChange: handleChange,
          }}
          buttonProps={{
            type: "button",
            onClick: addSpareParts,
          }}
          buttonLabel="Add"
        />
      </div>
      <div className="flex gap-2 overflow-y-hidden rounded-xl overflow-x-auto max-w-screen-lg p-2 border-2 border-dashed border-gray-300">
        {data?.spareParts?.length ? (
          data?.spareParts?.map((sP, index) => (
            <Pill key={`${sP}-${index}`} color='#0c1951'>{sP}</Pill>
          ))
        ) : (
          <p className="text-gray-300">No spare parts added...</p>
        )}
      </div>
    </section>
  );
};

export default SpareParts;
