import React from 'react';

const VillagerNameField = ({ name, index, onChange }) => (
  <div>
    {`Villager ${index + 1} `}
    <input
      type="text"
      value={name}
      onChange={onChange}
    />
  </div>
);

export default VillagerNameField;