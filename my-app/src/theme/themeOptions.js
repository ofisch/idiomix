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
  button: {
    '&:hover': {
      color: 'primary.light',
    }
  }
}

export {themeOptions};
