import "@fontsource/karla"
import "@fontsource/merriweather"


const themeOptions = {
  typography: {
    h1: {
      fontSize: '2.6em',
      fontFamily: 'karla',
      '@media (max-width:700px)': {
        fontSize: '2.4em',
      }
    },
    h2: {
      fontSize: '1.8em',
      fontFamily: 'karla',
      '@media (max-width:700px)': {
        fontSize: '1.6em',
      }

    },
    h3: {
      fontSize: '1.7em',
      fontFamily: 'karla',
      '@media (max-width:700px)': {
        fontSize: '1.5em',
      }
    },
    h4: {
      fontSize: '1.6em',
      fontFamily: 'merriweather',
      '@media (max-width:700px)': {

      }
    },
    body1: {
      fontSize: '1.3em',
      fontFamily: 'merriweather',

    },
    p: {
      fontSize: '1em',
      fontFamily: 'merriweather',
    },
  },
  palette: {
    background: {
      default: '#F7F9F9',
    },
    primary: {
      light: '#F7F9F9',
      main: '#DFF3E4',
      dark: '#A3B0A6',
      contrastText: '#000',
    },
    secondary: {
      main: '#7180B9',
      dark: '#525C85',
      contrastText: '#F7F9F9',
    },

},
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
  button: {
    '&:hover': {
      color: 'primary.light',
    }
  }
}

export {themeOptions};
