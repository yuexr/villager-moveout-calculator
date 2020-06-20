import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const StyledTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#FFA5B6',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#FFA5B6',
      },
      '&:hover fieldset': {
        borderColor: '#FFA5B6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FFA5B6',
      },
    },
  },
})(TextField);

export default StyledTextField;