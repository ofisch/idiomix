import {useState} from 'react';
import esFlag from '../src/assets/Flag_of_Spain.svg';
import seFlag from '../src/assets/Flag_of_Sweden.svg';
import {Link, useNavigate} from 'react-router-dom';

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
  CssBaseline,
} from '@mui/material';
import {themeOptions} from '../src/theme/themeOptions';
import {selectLang} from '../hooks/infoHooks';

const Start = () => {
  let [lang, setLang] = useState();
  const navigate = useNavigate();

  const handleLangSelect = (select) => {
    setLang((lang = select));
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
              sx={{
                backgroundColor: 'primary.main',
                p: 2,
                gap: 2,
              }}
            >
              <Grid item sx={{p: 1}}>
                <Typography component="h1" variant="h1">
                  Idiomix
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
                  <Button
                    onClick={() => {
                      selectLang('es');
                      navigate('/game');
                    }}
                  >
                    <img
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                      src={esFlag}
                      alt="flag of Spain"
                    />
                  </Button>
                </Grid>
                <Grid sx={{width: '60px'}}>
                  <Button
                    onClick={() => {
                      selectLang('se');
                      navigate('/game');
                    }}
                  >
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
};

export default Start;
