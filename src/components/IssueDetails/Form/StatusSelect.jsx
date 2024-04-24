import React, { useEffect, useState } from "react";
import Select from "../../Select/Select";

const STATUS_OPTIONS = [
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

const StatusSelect = ({ actual, setStatus }) => {
  const [selected, setSelected] = useState("Unselected");

  useEffect(() => {
    if (actual) {
      const findedStatus = STATUS_OPTIONS.find(
        (statisItem) => statisItem.value === actual
      );
      setSelected(findedStatus.text);
      setStatus((prev) => ({ ...prev, status: actual }));
    }
  }, [actual]);

  const handleSelect = (item) => {
    setSelected(item);
    setStatus((prev) => ({ ...prev, status: item?.value }));
  };
  return (
    <section className="flex gap-4">
      <div className="flex items-center gap-2 min-w-96">
        <span className="mr-1">Status:</span>
        <Select
          label={selected}
          options={STATUS_OPTIONS}
          iconName="unfold_more"
          setSelected={handleSelect}
        />
      </div>
    </section>
  );
};

export default StatusSelect;
