import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginTop: '120px', 
    marginBottom: '2rem',
    padding: '16px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '210px', 
    },
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  search: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  }, 
}));