import "@fontsource/karla"
import "@fontsource/merriweather"


const themeOptions = {
  typography: {

    h1: {
      fontSize: '2.6em',
      fontFamily: 'merriweather'
    },
    h2: {
      fontSize: '1.8em',
      fontFamily: 'merriweather'
    },
    h3: {
      fontSize: '1.6em',
      fontFamily: 'merriweather'
    },
    h4: {
      fontFamily: 'karla',
    },
    body1: {
      fontSize: '1.3em',
      fontFamily: 'karla',
    },
    p: {
      fontFamily: 'karla',
    },
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
