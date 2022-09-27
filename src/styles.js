import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  red: {
    backgroundColor: '#ff2040',
    color: '#ffffff',
  },
  green: {
    backgroundColor: '#00b020',
  },
  main: {
    flex: '1',
    overFlow: 'auto',
    flexDirection: 'column',
    display: 'flex',
    color: '#ffffff',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  largeLogo: {
    height: 100,
  },
}));
