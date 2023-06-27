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
  Slide,
  TextField,
  Typography,
  createTheme,
} from '@mui/material';

import esFlag from '../src/assets/Flag_of_Spain.svg';
import React, {useState} from 'react';
import {themeOptions} from '../src/theme/themeOptions';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import {Form, useNavigate} from 'react-router-dom';
import {selectRounds, selectSpeed, selectType} from '../hooks/infoHooks';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Settings = () => {
  const navigate = useNavigate();

  let [roundsInput, setRoundsInput] = useState(10);
  let [speedInput, setSpeedInput] = useState(1000);
  let [typeInput, setTypeInput] = useState('all');
  let [textFieldInput, setTextFieldInput] = useState(50);

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

  const handleTextField = (e) => {
    setTextFieldInput(e.target.value);
    handleRoundsInput(e);
  };

  return (
    <>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline></CssBaseline>

        <Grid sx={{mt: 5}}>
          <Paper
            elevation={7}
            sx={{
              /*height: '50vh',*/
              minWidth: '20vw',
              maxWidth: '50vw',
              backgroundColor: 'primary.dark',
              m: 'auto',
              mt: 5,
              mb: 15,
              '@media (max-width:970px)': {maxWidth: '90vw'},
            }}
          >
            <Grid
              container
              flexDirection={'row'}
              alignItems={'center'}
              alignContent={'stretch'}
              justifyContent={'space-between'}
              sx={{px: 2}}
            >
              <ArrowBackIcon
                sx={{
                  color: 'black',
                  '&:hover': {
                    color: 'primary.light',
                    scale: '1.3',
                  },
                }}
                onClick={() => {
                  navigate('/');
                }}
              ></ArrowBackIcon>
              <Typography
                component={'h1'}
                variant="h1"
                textAlign={'center'}
                sx={{
                  color: 'text.primary',
                  '&:hover': {
                    color: 'primary.light',
                    scale: '1.3',
                  },
                }}
                onClick={() => {
                  navigate('/');
                }}
              >
                Idiomix
              </Typography>
              <img
                style={{
                  maxWidth: '35px',
                  maxHeight: '35px',
                }}
                src={esFlag}
                alt="flag of Spain"
              />
            </Grid>
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

                    <TextField
                      sx={{paddingLeft: 1}}
                      type="number"
                      value={textFieldInput}
                      id="outlined-basic"
                      placeholder="50"
                      variant="outlined"
                      onChange={handleTextField}
                    >
                      <MenuItem value={textFieldInput}>
                        {textFieldInput}
                      </MenuItem>
                    </TextField>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>speed</InputLabel>
                  <Select
                    value={speedInput}
                    label="speed"
                    onChange={handleSpeedInput}
                  >
                    <MenuItem value={1000}>normal</MenuItem>
                    <MenuItem value={500}>fast</MenuItem>
                    <MenuItem value={300}>SUPER</MenuItem>
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
                    <MenuItem value={'article'}>article</MenuItem>
                    <MenuItem value={'conjugation'}>conjugation</MenuItem>
                    <MenuItem value={'sentence'}>sentence</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  sx={{color: 'black'}}
                  onClick={() => {
                    navigate('/game');
                  }}
                >
                  <Typography component="h4" variant="h4">
                    start
                  </Typography>
                </Button>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Settings;
