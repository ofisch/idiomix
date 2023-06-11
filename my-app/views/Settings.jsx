import {ThemeProvider} from '@emotion/react';
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  createTheme,
} from '@mui/material';

import React, {useState} from 'react';
import {themeOptions} from '../src/theme/themeOptions';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {Form, useNavigate} from 'react-router-dom';
import {selectRounds, selectSpeed, selectType} from '../hooks/infoHooks';

const Settings = () => {
  const navigate = useNavigate();

  let [roundsInput, setRoundsInput] = useState(10);
  let [speedInput, setSpeedInput] = useState(10);
  let [typeInput, setTypeInput] = useState('all');

  const handleRoundsInput = (e) => {
    setRoundsInput(e.target.value);
    selectRounds(e.target.value);
  };

  const handleSpeedInput = (e) => {
    setSpeedInput(e.target.value);
    selectSpeed(e.target.value);
  };

  const handleTypeInput = (e) => {
    setTypeInput(e.target.value);
    selectType(e.target.value);
  };

  return (
    <>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline></CssBaseline>
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
              sx={{backgroundColor: 'primary.main', p: 2, gap: 2}}
            >
              <Typography component="h1" variant="h2">
                Settings
              </Typography>
              <FormControl fullWidth>
                <InputLabel>rounds</InputLabel>
                <Select
                  value={roundsInput}
                  label="rounds"
                  onChange={handleRoundsInput}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>speed</InputLabel>
                <Select
                  value={speedInput}
                  label="speed"
                  onChange={handleSpeedInput}
                >
                  <MenuItem value={10}>1000</MenuItem>
                  <MenuItem value={20}>2000</MenuItem>
                  <MenuItem value={30}>3000</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>word type</InputLabel>
                <Select
                  value={typeInput}
                  label="word type"
                  onChange={handleTypeInput}
                >
                  <MenuItem value={'all'}>all</MenuItem>
                  <MenuItem value={'articles'}>articles</MenuItem>
                  <MenuItem value={'conjugation'}>conjugation</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                sx={{color: 'black'}}
                onClick={() => {
                  navigate('/game');
                }}
              >
                Start
              </Button>
            </Grid>
          </Paper>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Settings;
