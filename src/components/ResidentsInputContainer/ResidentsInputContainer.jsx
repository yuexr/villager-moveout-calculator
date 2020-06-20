import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import './ResidentsInputContainer.scss';
import { ResidentsContext } from "../../context/Residents";
import { VillagersContext } from "../../context/Villagers";
import ResidentNameField from "../ResidentNameField/ResidentNameField";
import NumberSelector from "../NumberSelector/NumberSelector";

const ResidentsInputContainer = () => {
  const { residents, setResidents } = useContext(ResidentsContext);
  const { villagers, setVillagers } = useContext(VillagersContext);

  const addNewResident = () => {
    setResidents([
      ...residents,
      {
        id: uuidv4(),
        name: `Resident ${residents.length + 1}`,
      },
    ]);
    // track another friendship level for each villager
    setVillagers(villagers.map(villager => ({
      ...villager,
      friendshipLevels: [...villager.friendshipLevels, 0]
    })));
  };

  const renameResident = (index, newName) => {
    setResidents([
      ...residents.slice(0, index),
      { ...residents[index], name: newName },
      ...residents.slice(index + 1),
    ]);
  };

  const removeLastResident = () => {
    setResidents(residents.slice(0, residents.length - 1));
    // track one less friendship level for each villager
    setVillagers(villagers.map(villager => ({
      ...villager,
      friendshipLevels: villager.friendshipLevels.slice(0, villager.friendshipLevels.length - 1)
    })));
  }

  return (
    <div className="ResidentsInputContainer">
      <h3>RESIDENTS</h3>
      <h4>How many residents (switch players) live on your island?</h4>
      <div className="text-note">Villager move-out chance considers friendship with ALL players.</div>
      <NumberSelector value={residents.length} minValue={1} maxValue={8}
        onDecrease={removeLastResident} onIncrease={addNewResident} />
      <h4>Enter your residents' names below:</h4>
      <div className="ResidentsInputContainer__fields">
        {residents.map((resident, i) => (
          <ResidentNameField key={resident.id} name={resident.name} index={i} onChange={(e) => renameResident(i, e.target.value)} />
        ))}
      </div>
    </div>
  );
};

export default ResidentsInputContainer;
