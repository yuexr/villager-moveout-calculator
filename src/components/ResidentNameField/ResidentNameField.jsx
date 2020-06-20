import React from 'react';

import './ResidentNameField.scss';
import TextField from '@material-ui/core/TextField';

const ResidentNameField = ({ name, index, onChange }) => (
  <div className="ResidentNameField">
    <div className="ResidentNameField__name">
      {`RESIDENT #${index + 1} `}
    </div>
    <TextField variant="outlined" size="small" value={name} onChange={onChange} />
  </div>
);

export default ResidentNameField;