/**
 * * Base CSS
 */
import './App.css';

/**
 * * Material UI
 */
import { CssBaseline, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/**
 * * Components
 */
import Form from './components/Form';

const theme = createTheme({
  palette: {
    primary: {
      main: '#363c94',
    },
    secondary: {
      main: '#f6c53f',
    },
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <Typography color='primary' variant='h3' component='div'>
            Welcome! 🎊
          </Typography>
          <Typography
            color='secondary'
            variant='subtitle'
            component='div'
          >
            Visual Basement
          </Typography>
          <br />

          <Form />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
