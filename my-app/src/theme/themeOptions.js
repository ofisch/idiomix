import "@fontsource/karla"
import "@fontsource/merriweather"


const themeOptions = {
  typography: {

    h1: {
      fontSize: '2.6em',
      fontFamily: 'karla'
    },
    h2: {
      fontSize: '1.8em',
      fontFamily: 'karla'
    },
    h3: {
      fontSize: '1.6em',
      fontFamily: 'karla'
    },
    h4: {
      fontSize: '1.5em',
      fontFamily: 'karla'
    },
    body1: {
      fontSize: '1.3em',
      fontFamily: 'merriweather',
    },
    p: {
      fontFamily: 'merriweather',
    }
  },
  palette: {
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
Button: {
  '&:hover': {
    color: 'primary.light',
  }
}
}

export {themeOptions};
