import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px', // Add padding to the toolbar
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  heading: {
    color: 'rgba(0, 183, 255, 1)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '10px', // Add some margin at the bottom for small screens
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
    },
  },
  brandContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
      marginBottom: '10px', // Add some margin at the bottom for small screens
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'center',
    },
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
