import React, { useContext } from 'react';

import { ResidentsContext } from "../../context/Residents";
import { VillagersContext } from "../../context/Villagers";
import ResidentFriendshipField from "../ResidentFriendshipField/ResidentFriendshipField";
import { ExclusionsContext } from '../../context/Exclusions';
import { isVillagerExcluded } from '../../utils/moveOutChances';

const VillagerChanceField = ({ villager, villagerIndex, moveOutChanceA, moveOutChanceB }) => {
  const { residents } = useContext(ResidentsContext);
  const { villagers, setVillagers } = useContext(VillagersContext);
  const { exclusions } = useContext(ExclusionsContext);

  const updateFriendshipLevel = (villagerIndex, friendshipLevelIndex, newFriendshipLevel) => {
    const updatedFriendshipLevels = [...villagers[villagerIndex].friendshipLevels];
    updatedFriendshipLevels[friendshipLevelIndex] = newFriendshipLevel;

    setVillagers([...villagers.slice(0, villagerIndex),
      { ...villagers[villagerIndex], friendshipLevels: updatedFriendshipLevels },
      ...villagers.slice(villagerIndex + 1)]);
  }

  const isExcluded = isVillagerExcluded(villagerIndex, exclusions)

  return (
    <div className="VillagerChanceField">
      <h3>{villager.name}</h3>
      {isExcluded ? <p>Cannot ask to move</p> :
        <>
          <h4>Friendship with residents:</h4>
          {villager.friendshipLevels.map((friendshipLevel, friendshipLevelIndex) => {
            const relatedResident = residents[friendshipLevelIndex];
            return (
              <ResidentFriendshipField
                key={relatedResident.id}
                residentName={relatedResident.name}
                friendshipLevel={friendshipLevel}
                onChange={(e) => updateFriendshipLevel(villagerIndex, friendshipLevelIndex, parseInt(e.target.value))}/>
            )
          })}
        </>
      }
      <div>
        {`Ask Chance: ${isExcluded ? '0%' : Math.min(moveOutChanceA, moveOutChanceB) + ' % - ' + Math.max(moveOutChanceA, moveOutChanceB) + '%'}`}
      </div>
    </div>
  );
}

export default VillagerChanceField;