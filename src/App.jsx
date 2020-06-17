import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import lily from './img/lily.png';
import { ResidentsContext } from './context/Residents'
import { VillagersContext } from './context/Villagers'
import ResidentsContainer from './components/ResidentsContainer/ResidentsContainer';
import VillagersInputContainer from './components/VillagersInputContainer/VillagersInputContainer';
import VillagersChanceContainer from './components/VillagersChanceContainer/VillagersChanceContainer';

const App = () => {
  const [residents, setResidents] = useState([{
    id: uuidv4(),
    name: "Resident 1"
  }]);

  const [villagers, setVillagers] = useState([
    {
      id: uuidv4(),
      name: "Villager 1",
      friendshipLevels: [1],
      manualExclude: false
    },
    {
      id: uuidv4(),
      name: "Villager 2",
      friendshipLevels: [1],
      manualExclude: false
    },
    {
      id: uuidv4(),
      name: "Villager 3",
      friendshipLevels: [1],
      manualExclude: false
    },
    {
      id: uuidv4(),
      name: "Villager 4",
      friendshipLevels: [1],
      manualExclude: false
    },
    {
      id: uuidv4(),
      name: "Villager 5",
      friendshipLevels: [1],
      manualExclude: false
    },
    {
      id: uuidv4(),
      name: "Villager 6",
      friendshipLevels: [1],
      manualExclude: false
    },
  ])

  return (
    <ResidentsContext.Provider value={{ residents, setResidents }}>
      <VillagersContext.Provider value={{ villagers, setVillagers }}>
        <div className="App">
          <h1>coming soon binch</h1>
          <img src={lily} alt="Lily"></img>
          <ResidentsContainer />
          <VillagersInputContainer />
          <VillagersChanceContainer />
        </div>
      </VillagersContext.Provider>
    </ResidentsContext.Provider>
  );
}

export default App;
