import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'space-around',
    justifyContent: 'space-around', 
    margin: '10px', 
  },

  userName: {
    display: 'flex',
    alignItems: 'center',
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));