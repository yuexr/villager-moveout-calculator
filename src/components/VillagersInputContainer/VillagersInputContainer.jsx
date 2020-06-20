import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import './VillagersInputContainer.scss';
import { VillagersContext } from "../../context/Villagers";
import { ResidentsContext } from "../../context/Residents";
import VillagerNameField from "../VillagerNameField/VillagerNameField";
import NumberSelector from "../NumberSelector/NumberSelector";

const VillagersInputContainer = () => {
  const { villagers, setVillagers } = useContext(VillagersContext);
  const { residents } = useContext(ResidentsContext);

  const addNewVillager = () => {
    setVillagers([
      ...villagers,
      {
        id: uuidv4(),
        name: `Villager ${villagers.length + 1}`,
        friendshipLevels: residents.map(() => 0)
      },
    ]);
  };

  const renameVillager = (index, newName) => {
    setVillagers([
      ...villagers.slice(0, index),
      { ...villagers[index], name: newName },
      ...villagers.slice(index + 1),
    ]);
  };

  const removeLastVillager = () =>
    setVillagers(villagers.slice(0, villagers.length - 1));

  return (
    <div className="VillagersInputContainer">
      <h3>VILLAGERS</h3>
      <h4>How many villagers (animals) live on your island?</h4>
      <div className="text-note">You need 6 or more villagers for one to ask to move.</div>
      <NumberSelector value={villagers.length} minValue={6} maxValue={10}
        onDecrease={removeLastVillager} onIncrease={addNewVillager} />
      <h4>Enter your villagers’ names below:</h4>
      <div className="VillagersInputContainer__fields">
        {villagers.map((villager, i) => (
          <VillagerNameField key={villager.id} name={villager.name} villagerIndex={i} onChange={(e) => renameVillager(i, e.target.value)} />
        ))}
      </div>
    </div>
  );
};

export default VillagersInputContainer;