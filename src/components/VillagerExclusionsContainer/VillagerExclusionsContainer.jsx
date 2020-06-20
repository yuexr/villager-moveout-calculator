import React, { useContext } from 'react';
import Icon from '@mdi/react';
import { Select, MenuItem } from '@material-ui/core';
import { mdiMinus, mdiPlus } from '@mdi/js';

import './VillagerExclusionsContainer.scss';
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
    <div className="VillagerExclusionsContainer">
      <h2>Step 2: add exclusions</h2>
      <h4>Villagers who meet these conditions cannot ask to move out, and will be excluded from the calculation.</h4>

      <div className="VillagerExclusionsContainer__field-label">
        A. Last villager to move into your island (newest villager):</div>
      <Select variant="outlined" displayEmpty value={lastVillagerToMoveIn === "" ? "" : lastVillagerToMoveIn.toString()}
        onChange={(e) => updateExclusion(e, "lastVillagerToMoveIn")}>
        <MenuItem value="">UNKNOWN OR NOT APPLICABLE</MenuItem>
        {villagers.map((villager, villagerIndex) => (
          <MenuItem key={villager.id} value={villagerIndex.toString()}>{villager.name}</MenuItem>
        ))}
      </Select>

      <div className="VillagerExclusionsContainer__field-label">
        B. Most recent villager to ask you to move, and you told them to stay:</div>
      <Select variant="outlined" displayEmpty value={lastVillagerToStay === "" ? "" : lastVillagerToStay.toString()}
        onChange={(e) => updateExclusion(e, "lastVillagerToStay")}>
        <MenuItem value="">UNKNOWN OR NOT APPLICABLE</MenuItem>
        {villagers.map((villager, villagerIndex) => (
          <MenuItem key={villager.id} value={villagerIndex.toString()}>{villager.name}</MenuItem>
        ))}
      </Select>

      <div className="VillagerExclusionsContainer__field-label">
        C. Villager is currently in the process of relocating their house (including if their moving kit is in your pocket):</div>
      <Select variant="outlined" displayEmpty value={villagerRelocating === "" ? "" : villagerRelocating.toString()}
        onChange={(e) => updateExclusion(e, "villagerRelocating")}>
        <MenuItem value="">UNKNOWN OR NOT APPLICABLE</MenuItem>
        {villagers.map((villager, villagerIndex) => (
          <MenuItem key={villager.id} value={villagerIndex.toString()}>{villager.name}</MenuItem>
        ))}
      </Select>

      <div className="VillagerExclusionsContainer__field-label">D. Villagers whose birthday is in the next 7 days:
          <div className="text-note">Their up-coming birthday will be mentioned on the bulletin board 7 days prior.</div>
      </div>
      <div className="VillagerExclusionsContainer__birthday-fields">
        {villagersWithUpcomingBirthday.map((villagerWithBirthday, villagerWithBirthdayIndex) => (
          <Select variant="outlined" displayEmpty value={villagerWithBirthday === "" ? "" : villagerWithBirthday.toString()}
            onChange={(e) => updateVillagerWithUpcomingBirthday(e, villagerWithBirthdayIndex)}>
            <MenuItem value="">UNKNOWN OR NOT APPLICABLE</MenuItem>
            {villagers.map((villager, villagerIndex) => (
              <MenuItem key={villager.id} value={villagerIndex.toString()}>{villager.name}</MenuItem>
            ))}
          </Select>
        ))}
      </div>
      {villagersWithUpcomingBirthday.length < villagers.length && (
        <div className="VillagerExclusionsContainer__birthday-button">
          <button className="plus-button" onClick={addNewVillagerWithUpcomingBirthday}>
            <Icon path={mdiPlus} size="18px" />
          </button>
          ADD ANOTHER VILLAGER
        </div>
      )}
      {villagersWithUpcomingBirthday.length > 1 && (
        <div className="VillagerExclusionsContainer__birthday-button">
          <button className="minus-button" onClick={removeVillagerWithUpcomingBirthday}>
            <Icon path={mdiMinus} size="18px" />
          </button>
          REMOVE A VILLAGER
        </div>
      )}
    </div>
  );
}

export default VillagerExclusionsContainer;