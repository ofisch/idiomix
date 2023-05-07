import {useState} from 'react';
import reactLogo from './assets/react.svg';
import esFlag from './assets/Flag_of_Spain.svg';
import seFlag from './assets/Flag_of_Sweden.svg';
import viteLogo from '/vite.svg';
import {
  GlobalStyles,
  Grid,
  Paper,
  Box,
  SvgIcon,
  ThemeProvider,
  Typography,
  createTheme,
  Button,
} from '@mui/material';
import {themeOptions} from './theme/themeOptions';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <Paper
          elevation={7}
          sx={{
            height: '50vh',
            minWidth: '20vw',
            maxWidth: '50vw',
            backgroundColor: 'primary.dark',
            m: 'auto',
            mt: 15,
            mb: 15,
          }}
        >
          <Paper elevation={0}>
            <Grid
              container
              flexDirection={'column'}
              alignItems={'center'}
              sx={{
                backgroundColor: 'primary.main',
                p: 2,
                gap: 2,
              }}
            >
              <Grid item sx={{p: 1}}>
                <Typography component="h1" variant="h1">
                  KEEL
                </Typography>
              </Grid>
              <Grid item sx={{p: 1}}>
                <Typography component="h2" variant="h2">
                  A language learning game
                </Typography>
              </Grid>
              <Grid item sx={{p: 1}}>
                <Typography component="p">Select a language</Typography>
              </Grid>
              <Grid
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 1,
                }}
              >
                <Grid sx={{width: '60px'}}>
                  <Button>
                    <img
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                      src={esFlag}
                      alt="flag of Spain"
                    />
                  </Button>
                </Grid>
                <Grid sx={{width: '60px'}}>
                  <Button>
                    <img
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                      src={seFlag}
                      alt="flag of Sweden"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
