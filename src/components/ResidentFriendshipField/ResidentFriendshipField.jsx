import React from 'react';

const ResidentFriendshipField = ({ residentName, friendshipLevel, onChange }) => (
  <div className="ResidentFriendshipField">
    {residentName}
    <form>
      <label>
        <input type="radio" value="0"
          checked={friendshipLevel === 0}
          onChange={onChange} />
        unknown
      </label>
      <label>
        <input type="radio" value="1"
          checked={friendshipLevel === 1}
          onChange={onChange} />
        1
      </label>
      <label>
        <input type="radio" value="2"
          checked={friendshipLevel === 2}
          onChange={onChange} />
        2
      </label>
      <label>
        <input type="radio" value="3"
          checked={friendshipLevel === 3}
          onChange={onChange} />
        3
      </label>
      <label>
        <input type="radio" value="4"
          checked={friendshipLevel === 4}
          onChange={onChange} />
        4
      </label>
      <label>
        <input type="radio" value="5"
          checked={friendshipLevel === 5}
          onChange={onChange} />
        5
      </label>
      <label>
        <input type="radio" value="6"
          checked={friendshipLevel === 6}
          onChange={onChange} />
        6
      </label>
    </form>
  </div>
);

export default ResidentFriendshipField;