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
  Popover,
} from '@mui/material';
import {themeOptions} from '../src/theme/themeOptions';
import {selectLang} from '../hooks/infoHooks';

const Start = () => {
  let [lang, setLang] = useState();
  const navigate = useNavigate();

  const handleLangSelect = (select) => {
    setLang((lang = select));
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'popover' : undefined;

  return (
    <>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline></CssBaseline>
        <Paper
          elevation={7}
          sx={{
            /*height: '50vh',*/
            minWidth: '20vw',
            maxWidth: '50vw',
            backgroundColor: 'primary.dark',
            mx: 'auto',
            mt: 5,
            mb: 15,
            '@media (max-width:970px)': {maxWidth: '90vw'},
          }}
        >
          <Paper elevation={0}>
            <Grid
              container
              flexDirection={'column'}
              alignItems={'center'}
              sx={{
                backgroundColor: 'primary.main',
                height: '30%',
                p: 2,
                gap: 2,
                '@media (max-width:480px)': {flexDirection: 'row'},
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
              <Grid
                item
                sx={{p: 1, mt: 5, '@media (max-width:490px)': {mt: 0}}}
              >
                <Typography component="p" variant="p">
                  Select a language
                </Typography>
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
                      // navigate('/game');
                      navigate('/settings');
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
                    /*
                    onClick={() => {
                      selectLang('se');
                      handlePopover(event);
                    }}
                    */
                    onClick={handlePopover}
                  >
                    <img
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                      src={seFlag}
                      alt="flag of Sweden"
                    />
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handlePopoverClose}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                  >
                    <Typography component="p" variant="p" sx={{p: 2}}>
                      kesken :(
                    </Typography>
                  </Popover>
                </Grid>
              </Grid>
              <Typography component="p" variant="p" sx={{scale: '0.7'}}>
                by <a href="https://github.com/ofisch">onni</a>
              </Typography>
            </Grid>
          </Paper>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Start;
