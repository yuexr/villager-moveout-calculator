import React, { useContext } from 'react';

import { ResidentsContext } from "../../context/Residents";
import { VillagersContext } from "../../context/Villagers";
import ResidentFriendshipField from "../ResidentFriendshipField/ResidentFriendshipField";

const VillagerChanceField = ({ villager, villagerIndex, moveOutChanceA, moveOutChanceB }) => {
  const { residents } = useContext(ResidentsContext);
  const { villagers, setVillagers } = useContext(VillagersContext);

  const updateFriendshipLevel = (villagerIndex, friendshipLevelIndex, newFriendshipLevel) => {
    const updatedFriendshipLevels = [...villagers[villagerIndex].friendshipLevels];
    updatedFriendshipLevels[friendshipLevelIndex] = newFriendshipLevel;

    setVillagers([...villagers.slice(0, villagerIndex),
      { ...villagers[villagerIndex], friendshipLevels: updatedFriendshipLevels },
      ...villagers.slice(villagerIndex + 1)]);
  }

  const updateExcludeVillager = (villagerIndex, isExcluded) => {
    const updatedVillager = {...villagers[villagerIndex]};
    updatedVillager.manualExclude = isExcluded;

    setVillagers([...villagers.slice(0, villagerIndex),
      updatedVillager,
    ...villagers.slice(villagerIndex + 1)]);
  }

  return (
    <div className="VillagerChanceField">
      <h3>{villager.name}</h3>
      <h4>Friendship with residents:</h4>
      {
        villager.friendshipLevels.map((friendshipLevel, friendshipLevelIndex) => {
          const relatedResident = residents[friendshipLevelIndex];
          return (
            <ResidentFriendshipField
              key={relatedResident.id}
              residentName={relatedResident.name}
              friendshipLevel={friendshipLevel}
              onChange={(e) => updateFriendshipLevel(villagerIndex, friendshipLevelIndex, parseInt(e.target.value))}/>
          )
        })
      }
      <div>
        Exclude? 
        <input type="checkbox" checked={villager.manualExclude} onChange={(e) => updateExcludeVillager(villagerIndex, e.target.checked)} />
      </div>
      <div>
        {`Ask Chance %: ${Math.min(moveOutChanceA, moveOutChanceB)}% - ${Math.max(moveOutChanceA, moveOutChanceB)}%`}
      </div>
    </div>
  );
}

export default VillagerChanceField;