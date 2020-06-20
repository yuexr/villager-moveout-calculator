import { mean, sumBy, sum } from 'lodash';

export const getVillagerExcludedReason = (villagerIndex, exclusions) => {
  if (villagerIndex === exclusions.lastVillagerToMoveIn) {
    return "Recently moved in.";
  } else if (villagerIndex === exclusions.lastVillagerToStay) {
    return "Recently asked to move out.";
  } else if (villagerIndex === exclusions.villagerRelocating) {
    return "House is being relocated.";
  } else if (~exclusions.villagersWithUpcomingBirthday.indexOf(villagerIndex)) {
    return "Birthday in the next 7 days.";
  } else {
    return null
  }
}

export const getMoveOutChances = (villagers, exclusions) => {
  const friendshipPointsLowerBounds = [0, 0, 30, 60, 100, 150, 200];
  const friendshipPointsUpperBounds = [255, 29, 59, 99, 149, 199, 255];

  const moveOutPointsHigh = villagers.map((villager, villagerIndex) => {
    if (getVillagerExcludedReason(villagerIndex, exclusions)) return 0;

    const friendshipPointsLow = villager.friendshipLevels.map(friendshipLevel =>
      friendshipPointsLowerBounds[friendshipLevel]);
    
    const avgFriendshipLow = mean(friendshipPointsLow);
    
    const maxFriends = sumBy(villager.friendshipLevels, friendshipLevel =>
      friendshipLevel === 6 ? 1 : 0);
    
    return Math.floor((300 - avgFriendshipLow) / 10) - maxFriends;
  });

  const moveOutPointsLow = villagers.map((villager, villagerIndex) => {
    if (getVillagerExcludedReason(villagerIndex, exclusions)) return 0;

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

  return [moveOutChancesA, moveOutChancesB];
}