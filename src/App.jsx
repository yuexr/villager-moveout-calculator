import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import lily from './img/lily.png';
import { ResidentsContext } from './context/Residents'
import { VillagersContext } from './context/Villagers'
import { ExclusionsContext } from './context/Exclusions'
import ResidentsContainer from './components/ResidentsContainer/ResidentsContainer';
import VillagersInputContainer from './components/VillagersInputContainer/VillagersInputContainer';
import VillagersChanceContainer from './components/VillagersChanceContainer/VillagersChanceContainer';
import VillagerExclusionsContainer from './components/VillagerExclusionsContainer/VillagerExclusionsContainer';

const App = () => {
  const [residents, setResidents] = useState([{
    id: uuidv4(),
    name: "Resident 1"
  }]);

  const [villagers, setVillagers] = useState([
    {
      id: uuidv4(),
      name: "Villager 1",
      friendshipLevels: [0]
    },
    {
      id: uuidv4(),
      name: "Villager 2",
      friendshipLevels: [0]
    },
    {
      id: uuidv4(),
      name: "Villager 3",
      friendshipLevels: [0]
    },
    {
      id: uuidv4(),
      name: "Villager 4",
      friendshipLevels: [0]
    },
    {
      id: uuidv4(),
      name: "Villager 5",
      friendshipLevels: [0]
    },
    {
      id: uuidv4(),
      name: "Villager 6",
      friendshipLevels: [0]
    },
  ]);

  const [exclusions, setExclusions] = useState({
    lastVillagerToMoveIn: "",
    lastVillagerToStay: "",
    villagerRelocating: "",
    villagersWithUpcomingBirthday: [""]
  })

  return (
    <ResidentsContext.Provider value={{ residents, setResidents }}>
      <VillagersContext.Provider value={{ villagers, setVillagers }}>
        <ExclusionsContext.Provider value={{ exclusions, setExclusions }}>
          <div className="App">
            <h1>coming soon binch</h1>
            <img src={lily} alt="Lily"></img>
            <ResidentsContainer />
            <VillagersInputContainer />
            <VillagerExclusionsContainer />
            <VillagersChanceContainer />
          </div>
        </ExclusionsContext.Provider>
      </VillagersContext.Provider>
    </ResidentsContext.Provider>
  );
}

export default App;
