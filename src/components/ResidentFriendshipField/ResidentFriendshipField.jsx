import React from 'react';

const ResidentFriendshipField = ({ residentName, friendshipLevel, onChange }) => (
  <div className="ResidentFriendshipField">
    <div>{residentName}</div>
    <div>LEVEL: {friendshipLevel || "?"}</div>
    <input type="range" min="0" max="6" value={friendshipLevel} onChange={onChange} />
  </div>
);

export default ResidentFriendshipField;