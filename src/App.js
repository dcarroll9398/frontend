import { Container, CssBaseline, Paper, ThemeProvider } from '@mui/material';
import HomeScreen from './screens/HomeScreen';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: { fontWeight: 'bold' },
    h2: {
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'white',
    },
  },
  palette: {
    primary: { main: '#ff1744' },
    secondary: {
      main: '#188e16',
      contrastText: '#ffffff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper>
          <HomeScreen></HomeScreen>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
