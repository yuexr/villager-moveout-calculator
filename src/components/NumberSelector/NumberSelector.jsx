import React from 'react';
import Icon from '@mdi/react';
import { mdiMinus, mdiPlus } from '@mdi/js';

import './NumberSelector.scss'
import Tooltip from '../Tooltip/Tooltip';

const NumberSelector = ({ value, minValue = 1, maxValue = 99, onDecrease, onIncrease }) => {
  return (
    <div className="NumberSelector">
      {value === minValue ? (
        <Tooltip title={`MINIMUM ${minValue}`} placement="top" arrow>
          <button className="minus-button" disabled>
            <Icon path={mdiMinus} size="18px" />
          </button>
        </Tooltip>
      ) : (
        <button className="minus-button" onClick={onDecrease}>
          <Icon path={mdiMinus} size="18px" />
        </button>
      )}
      <div className="NumberSelector__value">{value}</div>
      {value === maxValue ? (
        <Tooltip title={`MAXIMUM ${maxValue}`} placement="top" arrow>
          <button className="plus-button" disabled>
            <Icon path={mdiPlus} size="18px" />
          </button>
        </Tooltip>
      ) : (
        <button className="plus-button" onClick={onIncrease}>
          <Icon path={mdiPlus} size="18px" />
        </button>
      )}
    </div>
  );
}

export default NumberSelector;