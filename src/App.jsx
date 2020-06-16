import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.scss';
import lily from './img/lily.png';

const App = () => {
  const [residents, setResidents] = useState([{
    id: uuidv4(),
    name: "Resident 1"
  }]);

  const addNewResident = () => {
    setResidents([...residents, {
      id: uuidv4(),
      name: `Resident ${residents.length + 1}`
    }]);
  }

  const renameResident = (index, newName) => {
    setResidents([...residents.slice(0, index), { ...residents[index], name: newName }, ...residents.slice(index + 1)]);
  }

  const removeResident = (index) => {
    setResidents([...residents.slice(0, index), ...residents.slice(index + 1)]);
  }

  return (
    <div className="App">
      <h1>coming soon binch</h1>
      <img src={lily} alt="Lily"></img>
      <div className="ResidentsContainer">
        {
          residents.map((resident, i) => (
            <div key={resident.id}>
              {`Resident ${i + 1} `}
              <input type="text" value={resident.name} onChange={(e) => renameResident(i, e.target.value)}/>
              { residents.length > 1 && (
                <button onClick={() => removeResident(i)}>REMOVE</button>
              )}
            </div>
          ))
        }
        { residents.length < 8 && (
          <button onClick={addNewResident}>+ ADD MORE</button>
        )}
      </div>
      <div className="VillagersInputContainer"></div>
      <div className="VillagersFriendshipContainer"></div>
    </div>
  );
}

export default App;
