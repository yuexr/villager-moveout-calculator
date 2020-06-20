import React, { useContext } from 'react';

import './VillagerChanceField.scss';
import { ResidentsContext } from "../../context/Residents";
import { VillagersContext } from "../../context/Villagers";
import ResidentFriendshipField from "../ResidentFriendshipField/ResidentFriendshipField";
import { ExclusionsContext } from '../../context/Exclusions';
import { getVillagerExcludedReason } from '../../utils/moveOutChances';

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

  const villagerExcludedReason = getVillagerExcludedReason(villagerIndex, exclusions);

  return (
    <div className={`VillagerChanceField ${villagerExcludedReason ? 'disabled' : ''}`}>
      <div>
        <div className="VillagerChanceField__name">{villager.name}</div>
        {villagerExcludedReason ?
          <div className="VillagerChanceField__disabled-text">Cannot ask to move because: {villagerExcludedReason}</div> :
          <>
            {villager.friendshipLevels.map((friendshipLevel, friendshipLevelIndex) => {
              const relatedResident = residents[friendshipLevelIndex];
              return (
                <ResidentFriendshipField
                  key={relatedResident.id}
                  residentName={relatedResident.name}
                  friendshipLevel={friendshipLevel}
                  onChange={(_, value) => updateFriendshipLevel(villagerIndex, friendshipLevelIndex, value)}/>
              )
            })}
          </>
        }
      </div>
      <div className="VillagerChanceField__chance">
        <h4>Villager Ask Chance:</h4>
        <div className="VillagerChanceField__chance-percentage">
          {villagerExcludedReason ? '0.00%' : Math.min(moveOutChanceA, moveOutChanceB) + ' % - ' + Math.max(moveOutChanceA, moveOutChanceB) + '%'}
        </div>
      </div>
    </div>
  );
}

export default VillagerChanceField;