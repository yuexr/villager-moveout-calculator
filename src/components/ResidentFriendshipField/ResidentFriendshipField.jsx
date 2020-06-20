import React from 'react';
import { Slider } from '@material-ui/core';
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';

import './ResidentFriendshipField.scss';

const ResidentFriendshipField = ({ residentName, friendshipLevel, onChange }) => {
  const getThumbComponent = (props) => (
    <span {...props}>
      <Icon path={mdiHeart} size="24px" />
    </span>
  )

  return (
    <div className="ResidentFriendshipField">
      <div className="ResidentFriendshipField__header">
        <span className="ResidentFriendshipField__name">{residentName}</span>
        <span>LEVEL: {friendshipLevel || "?"}</span>
      </div>
      <div className="ResidentFriendshipField__slider">
        <Slider min={0} max={6} value={friendshipLevel} onChange={onChange}
          ThumbComponent={getThumbComponent} />
      </div>
    </div>
  );
}

export default ResidentFriendshipField;