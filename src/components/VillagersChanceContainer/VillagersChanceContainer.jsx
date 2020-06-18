import React, { useContext } from "react";
import { mean, sumBy, sum } from 'lodash';

import { VillagersContext } from "../../context/Villagers";
import VillagerChanceField from "../VillagerChanceField/VillagerChanceField";

const VillagersChanceContainer = () => {
  const { villagers } = useContext(VillagersContext);

  const friendshipPointsLowerBounds = [0, 0, 30, 60, 100, 150, 200];
  const friendshipPointsUpperBounds = [255, 29, 59, 99, 149, 199, 255];

  const moveOutPointsHigh = villagers.map(villager => {
    if (villager.manualExclude) return 0;

    const friendshipPointsLow = villager.friendshipLevels.map(friendshipLevel =>
      friendshipPointsLowerBounds[friendshipLevel]);
    
    const avgFriendshipLow = mean(friendshipPointsLow);
    
    const maxFriends = sumBy(villager.friendshipLevels, friendshipLevel =>
      friendshipLevel === 6 ? 1 : 0);
    
    return Math.floor((300 - avgFriendshipLow) / 10) - maxFriends;
  });

  const moveOutPointsLow = villagers.map(villager => {
    if (villager.manualExclude) return 0;

    const friendshipPointsHigh = villager.friendshipLevels.map(friendshipLevel =>
      friendshipPointsUpperBounds[friendshipLevel]);
    
    const avgFriendshipHigh = mean(friendshipPointsHigh);
    
    const maxFriends = sumBy(villager.friendshipLevels, friendshipLevel =>
      friendshipLevel === 6 ? 1 : 0);
    
    return Math.floor((300 - avgFriendshipHigh) / 10) - maxFriends;
  });

  const moveOutChancesA = moveOutPointsHigh.map(points =>
    (points / sum(moveOutPointsHigh) * 100).toFixed(2));

  const moveOutChancesB = moveOutPointsLow.map(points =>
    (points / sum(moveOutPointsLow) * 100).toFixed(2));

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