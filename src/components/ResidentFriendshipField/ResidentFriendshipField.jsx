import React from 'react';
import { Slider } from '@material-ui/core';

import './ResidentFriendshipField.scss';

const ResidentFriendshipField = ({ residentName, friendshipLevel, onChange }) => {
  const marks = [
    { value: 0, label: "?" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" }
  ]

  return (
    <div className="ResidentFriendshipField">
      <div className="ResidentFriendshipField__header">
        <span className="ResidentFriendshipField__name">{residentName}</span>
        <span>LEVEL: {friendshipLevel || "?"}</span>
      </div>
      <div className="ResidentFriendshipField__slider">
        <Slider min={0} max={6} value={friendshipLevel} onChange={onChange} marks={marks} />
      </div>
    </div>
  );
}

export default ResidentFriendshipField;