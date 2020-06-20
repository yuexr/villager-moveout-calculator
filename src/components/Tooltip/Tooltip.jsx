import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const StyledTooltip = withStyles(() => ({
  arrow: {
    color: 'rgba(119, 154, 126, 0.8)',
  },
  tooltip: {
    backgroundColor: 'rgba(119, 154, 126, 0.8)',
    fontFamily: ['Nubito', 'sans-serif'],
    fontSize: 14,
    fontWeight: 400,
    padding: 8
  },
}))(Tooltip);

export default StyledTooltip;