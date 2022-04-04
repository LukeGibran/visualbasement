import { useEffect } from 'react';

/**
 * * Base CSS
 */
import './App.css';

/**
 * * Material UI
 */
import {
  CssBaseline,
  Box,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/**
 * * Components
 */
import Form from './components/Form';

/**
 * * Redux
 */
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getAllData, setLoading } from './redux/data/data.actions';
import { allData, isLoading, response } from './redux/data/data.selector';

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

function App({ getAllData, Data, setLoading, isLoading, response }) {
  useEffect(() => {
    setLoading();
    getAllData();
  }, []);
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
          <Typography color='secondary' variant='subtitle' component='div'>
            Visual Basement
          </Typography>
          <br />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Form />
            {response && !isLoading && (
              <Box
                sx={{
                  minWidth: 200,
                  maxWidth: 300,
                  mx: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  bgcolor: 'background.paper',
                  mt: 2
                }}
              >
                <Box
                sx={{
                  maxWidth: 300
                }}
                >{JSON.stringify(response)}</Box>
              </Box>
            )}
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  Data: allData,
  isLoading,
  response,
});

const mapDispatchToProps = (dispatch) => ({
  getAllData: () => dispatch(getAllData()),
  setLoading: () => dispatch(setLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
