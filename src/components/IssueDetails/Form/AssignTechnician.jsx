import React, { useState, useEffect } from "react";
import Select from "../../Select/Select";
import useFetch from "../../../hooks/useFetch/useFetch";

const DEFAULT_SELECTED = "Unselected";

const AssignTechnician = ({ setTechnician, data }) => {
  const { state: techniciansData } = useFetch("technician", []);
  const [technicians, setTechninicians] = useState([]);
  const [selectedItem, setSelectedItem] = useState(DEFAULT_SELECTED);

  useEffect(() => {
    const techData = techniciansData?.data.map((tech) => ({
      text: tech.name,
      value: tech.id,
    }));
    setTechninicians(techData);
  }, [techniciansData]);

  useEffect(() => {
    if (data?.technician?.name) setSelectedItem(data?.technician?.name)
  }, [data])

  const handleSelect = (item) => {
    setSelectedItem(item);
    setTechnician((prev) => ({
      ...prev,
      technician: techniciansData?.data.find((e) => e.id === item.value),
    }));
  };
  return (
    <div className="flex gap-2 items-center mt-5">
      <span className="mr-1">Asssigned technician:</span>
      <Select
        iconName="unfold_more"
        label={selectedItem}
        options={technicians}
        setSelected={handleSelect}
      />
    </div>
  );
};

export default AssignTechnician;
