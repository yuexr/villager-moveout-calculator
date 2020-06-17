import React from 'react';

const ResidentNameField = ({ name, index, onChange }) => (
  <div>
    {`Resident ${index + 1} `}
    <input
      type="text"
      value={name}
      onChange={onChange}
    />
  </div>
);

export default ResidentNameField;