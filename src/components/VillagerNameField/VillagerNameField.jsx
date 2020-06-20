import React from 'react';

import './VillagerNameField.scss';
import TextField from '../TextField/TextField';

const VillagerNameField = ({ name, villagerIndex, onChange }) => (
  <div className="VillagerNameField">
    <div className="VillagerNameField__name">
      {`VILLAGER #${villagerIndex + 1} `}
    </div>
    <TextField variant="outlined" size="small" value={name} onChange={onChange} />
  </div>
);

export default VillagerNameField;