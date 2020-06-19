import React, { useContext } from "react";

import { VillagersContext } from "../../context/Villagers";
import { ExclusionsContext } from "../../context/Exclusions";
import VillagerChanceField from "../VillagerChanceField/VillagerChanceField";
import { getMoveOutChances } from "../../utils/moveOutChances";

const VillagersChanceContainer = () => {
  const { villagers } = useContext(VillagersContext);
  const { exclusions } = useContext(ExclusionsContext);

  const [moveOutChancesA, moveOutChancesB] = getMoveOutChances(villagers, exclusions);

  return (
    <div className="VillagersChanceContainer">
      <h2>Move Out Chance</h2>
      {
        villagers.map((villager, villagerIndex) => (
          <VillagerChanceField key={villager.id} villager={villager} villagerIndex={villagerIndex}
            moveOutChanceA={moveOutChancesA[villagerIndex]} moveOutChanceB={moveOutChancesB[villagerIndex]} />
        ))
      }
    </div>
  )
}

export default VillagersChanceContainer;