import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { Autocomplete } from '@material-ui/lab';

export default makeStyles((theme) => ({
  appBar: {
    marginBottom: '30px', 
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  menu: {
    display: 'flex', 
    justifyContent: 'space-around', 
    width: '35%', 
    alignItems: 'center', 
    [theme.breakpoints.down('sm')]: {
      width: "100%", 
      margin: '10px 0', 
    },
  },
  menuItem: {
    color: '#545454',
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: "90%", 
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',

  },
  brandContainer: {
    width: "15%", 
    [theme.breakpoints.down('sm')]: {
      width: "60%", 
      margin: 'auto', 
    },
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));