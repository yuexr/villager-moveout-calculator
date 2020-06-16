import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { VillagersContext } from "../../context/Villagers";
import VillagerNameField from "../VillagerNameField/VillagerNameField";

const VillagersInputContainer = () => {
  const { villagers, setVillagers } = useContext(VillagersContext);

  const addNewVillager = () => {
    setVillagers([
      ...villagers,
      {
        id: uuidv4(),
        name: `Villager ${villagers.length + 1}`,
        friendshipLevels: [1],
        manualExclude: false
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
    <div className="VillagersContainer">
      <h2>Villagers</h2>
      {villagers.map((villager, i) => (
        <VillagerNameField key={villager.id} name={villager.name} index={i} onChange={(e) => renameVillager(i, e.target.value)} />
      ))}
      {villagers.length < 10 && (
        <button onClick={addNewVillager}>+ ADD MORE</button>
      )}
      {villagers.length > 6 && (
        <button onClick={removeLastVillager}>REMOVE</button>
      )}
    </div>
  );
};

export default VillagersInputContainer;