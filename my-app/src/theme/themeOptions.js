const themeOptions = {
  typography: {
    h1: {
      fontSize: '2.6em',
    },
    h2: {
      fontSize: '1.8em',
    },
    h3: {
      fontSize: '1.6em',
    },
    body1: {
      fontSize: '1.3em',
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
