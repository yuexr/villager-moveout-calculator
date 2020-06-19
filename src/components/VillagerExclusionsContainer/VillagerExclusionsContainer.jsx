import React, { useContext } from 'react';

import { VillagersContext } from '../../context/Villagers';
import { ExclusionsContext } from '../../context/Exclusions';

const VillagerExclusionsContainer = () => {
  const { villagers } = useContext(VillagersContext);
  const { exclusions, setExclusions } = useContext(ExclusionsContext);

  const {
    lastVillagerToMoveIn,
    lastVillagerToStay,
    villagerRelocating,
    villagersWithUpcomingBirthday
  } = exclusions;

  const updateExclusion = (e, key) => {
    const updatedExclusions = { ...exclusions };
    const { value } = e.target;
    updatedExclusions[key] = value ? parseInt(e.target.value) : value;
    setExclusions(updatedExclusions);
  }

  const updateVillagerWithUpcomingBirthday = (e, villagerWithBirthdayIndex) => {
    const { value } = e.target;
    const updatedExclusions = {
      ...exclusions,
      villagersWithUpcomingBirthday: [
        ...villagersWithUpcomingBirthday.slice(0, villagerWithBirthdayIndex),
        value ? parseInt(e.target.value) : value,
        ...villagersWithUpcomingBirthday.slice(villagerWithBirthdayIndex + 1)
      ]
    };
    setExclusions(updatedExclusions);
  }

  const addNewVillagerWithUpcomingBirthday = () => {
    const updatedExclusions = {
      ...exclusions,
      villagersWithUpcomingBirthday: [...villagersWithUpcomingBirthday, ""]
    }
    setExclusions(updatedExclusions);
  }

  const removeVillagerWithUpcomingBirthday = () => {
    const updatedExclusions = {
      ...exclusions,
      villagersWithUpcomingBirthday: villagersWithUpcomingBirthday.slice(0, villagersWithUpcomingBirthday.length - 1)
    }
    setExclusions(updatedExclusions);
  }

  return (
    <div>
      <h2>Add Exclusions</h2>
      <div>Last to move in:&nbsp;
        <select value={lastVillagerToMoveIn === "" ? "" : lastVillagerToMoveIn.toString()}
          onChange={(e) => updateExclusion(e, "lastVillagerToMoveIn")}>
          <option value="">n/a</option>
          {villagers.map((villager, villagerIndex) => (
            <option key={villager.id} value={villagerIndex.toString()}>{villager.name}</option>
          ))}
        </select>
      </div>
      <div>Last to ask to move out:&nbsp;
        <select value={lastVillagerToStay === "" ? "" : lastVillagerToStay.toString()}
          onChange={(e) => updateExclusion(e, "lastVillagerToStay")}>
          <option value="">n/a</option>
          {villagers.map((villager, villagerIndex) => (
            <option key={villager.id} value={villagerIndex.toString()}>{villager.name}</option>
          ))}
        </select>
      </div>
      <div>Villager currently relocating house:&nbsp;
        <select value={villagerRelocating === "" ? "" : villagerRelocating.toString()}
          onChange={(e) => updateExclusion(e, "villagerRelocating")}>
          <option value="">n/a</option>
          {villagers.map((villager, villagerIndex) => (
            <option key={villager.id} value={villagerIndex.toString()}>{villager.name}</option>
          ))}
        </select>
      </div>
      <div>Villagers whose birthday is in the next 7 days:&nbsp;
        {villagersWithUpcomingBirthday.map((villagerWithBirthday, villagerWithBirthdayIndex) => (
          <div><select value={villagerWithBirthday === "" ? "" : villagerWithBirthday.toString()}
            onChange={(e) => updateVillagerWithUpcomingBirthday(e, villagerWithBirthdayIndex)}>
            <option value="">n/a</option>
            {villagers.map((villager, villagerIndex) => (
              <option key={villager.id} value={villagerIndex.toString()}>{villager.name}</option>
            ))}
          </select></div>
        ))}
        {villagersWithUpcomingBirthday.length < villagers.length && (
          <button onClick={addNewVillagerWithUpcomingBirthday}>+ ADD MORE</button>
        )}
        {villagersWithUpcomingBirthday.length > 1 && (
          <button onClick={removeVillagerWithUpcomingBirthday}>- REMOVE</button>
        )}
      </div>
    </div>
  );
}

export default VillagerExclusionsContainer;