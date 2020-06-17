import React, { useContext } from "react";

import { VillagersContext } from "../../context/Villagers";
import VillagerChanceField from "../VillagerChanceField/VillagerChanceField";

const VillagersChanceContainer = () => {
  const { villagers } = useContext(VillagersContext);

  return (
    <div className="VillagersChanceContainer">
      <h2>Move Out Chance</h2>
      {
        villagers.map((villager, villagerIndex) => (
          <VillagerChanceField key={villager.id} villager={villager} villagerIndex={villagerIndex} />
        ))
      }
    </div>
  )
}

export default VillagersChanceContainer;