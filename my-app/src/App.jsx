import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Start from '../views/Start';
import Game from '../views/Game';
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
} from '@mui/material';
import {themeOptions} from './theme/themeOptions';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Grid container />}></Route>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
