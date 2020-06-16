import React from 'react';

const ResidentField = ({ name, index, onChange }) => (
  <div>
    {`Resident ${index + 1} `}
    <input
      type="text"
      value={name}
      onChange={onChange}
    />
  </div>
);

export default ResidentField;