import React from 'react';

import './ResidentNameField.scss';
import TextField from '../TextField/TextField';

const ResidentNameField = ({ name, index, onChange }) => (
  <div className="ResidentNameField">
    <div className="ResidentNameField__name">
      {`RESIDENT #${index + 1} `}
    </div>
    <TextField variant="outlined" size="small" value={name} onChange={onChange} />
  </div>
);

export default ResidentNameField;