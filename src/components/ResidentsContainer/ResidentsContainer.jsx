import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ResidentsContext } from "../../context/Residents";
import ResidentField from "../ResidentField/ResidentField";

const ResidentsContainer = () => {
  const { residents, setResidents } = useContext(ResidentsContext);

  const addNewResident = () => {
    setResidents([
      ...residents,
      {
        id: uuidv4(),
        name: `Resident ${residents.length + 1}`,
      },
    ]);
  };

  const renameResident = (index, newName) => {
    setResidents([
      ...residents.slice(0, index),
      { ...residents[index], name: newName },
      ...residents.slice(index + 1),
    ]);
  };

  const removeLastResident = () =>
    setResidents(residents.slice(0, residents.length - 1));

  return (
    <div className="ResidentsContainer">
      <h2>Residents</h2>
      {residents.map((resident, i) => (
        <ResidentField key={resident.id} name={resident.name} index={i} onChange={(e) => renameResident(i, e.target.value)} />
      ))}
      {residents.length < 8 && (
        <button onClick={addNewResident}>+ ADD MORE</button>
      )}
      {residents.length > 1 && (
        <button onClick={removeLastResident}>REMOVE</button>
      )}
    </div>
  );
};

export default ResidentsContainer;
