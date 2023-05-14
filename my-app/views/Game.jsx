import React, {useEffect, useRef, useState} from 'react';
import Start from './Start';
import '../src/App.css';

import {selectedLang} from '../hooks/infoHooks';
import esWords from '../src/assets/EsWords.json';
import ArticleBox from '../src/assets/components/ArticleBox';
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import {themeOptions} from '../src/theme/themeOptions';
import {green} from '@mui/material/colors';

let optionsToDisplay = [];

const options = {
  speed: 2000,
};

const Game = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setQurrentQuestion] = useState(0);

  // palauttaa satunnaisen arvon sanalistasta
  const getRandIndex = () => {
    if (selectedLang == 'es') {
      return Math.floor(Math.random() * (esWords.length - 1) + 1);
    } else if (selectedLang == 'se') {
      return Math.floor(Math.random() * (se.length - 1) + 1);
    }
  };

  let [questionWord, setQuestionWord] = useState('');
  let [answer, setAnswer] = useState('');

  // haetaan satunnainen sana listasta
  if (selectedLang == 'es') {
    questionWord = esWords[getRandIndex()];
  } else if (selectedLang == 'se') {
    console.log('ruotti kesken');
  }

  // tarkistetaan, onko vastaus oikein
  const checkCorrectAnswer = () => {
    let correctAnswer;

    for (let i of questionWord.answer) {
      if (i.isCorrect) {
        correctAnswer = i.article;
      }
    }

    if (answer == correctAnswer) {
      setAnswerTrue((answerTrue = true));
      setScore(score + 1);
    } else {
      setAnswerTrue((answerTrue = false));
      setScore(score - 1);
    }
  };

  let [answerTrue, setAnswerTrue] = useState(false);
  let [showTheAnswer, setShowTheAnswer] = useState('');

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const showCorrectAnswer = async () => {
    let article;
    questionWord.answer[0].isCorrect
      ? (article = questionWord.answer[0].article)
      : (article = questionWord.answer[1].article);
    if (questionWord.type == 'article') {
      setShowTheAnswer((showTheAnswer = article + ' ' + questionWord.word));
    } else if (questionWord.type == 'conjugation') {
      setShowTheAnswer((showTheAnswer = questionWord.word + ' ' + article));
    }

    optionsToDisplay.push(...questionWord.answer.slice(0, 2));

    await delay(options.speed);
    setAnswerTrue((answerTrue = false));
    optionsToDisplay = [];
  };

  const optionClicked = (userAnswer) => {
    setAnswer((answer = userAnswer));

    checkCorrectAnswer();
    showCorrectAnswer();
  };

  return (
    <>
      <ThemeProvider theme={createTheme(themeOptions)}>
        <CssBaseline></CssBaseline>

        {showFinalResults ? (
          <Paper elevation={5}>
            <Typography variant="h2">Final results:</Typography>
            <Typography variant="h3">moi miten menee</Typography>
            <Button>Restart</Button>
          </Paper>
        ) : answerTrue ? (
          <Paper
            elevation={5}
            sx={{width: '50%', m: 'auto', mt: '35px', backgroundColor: 'green'}}
          >
            <Typography
              component="h1"
              variant="h2"
              textAlign={'center'}
              sx={{p: 2}}
            >
              Current score: {score}
            </Typography>
            <ArticleBox word={showTheAnswer}></ArticleBox>
            <Grid
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              sx={{mt: 3}}
            >
              <Button
                disabled
                variant="text"
                onClick={() => optionClicked(questionWord.answer[0].article)}
              >
                <Typography component="h4" variant="h4">
                  {optionsToDisplay[0].article}
                </Typography>
              </Button>
              <Button
                disabled
                variant="text"
                onClick={() => optionClicked(questionWord.answer[1].article)}
              >
                <Typography component="h4" variant="h4">
                  {optionsToDisplay[1].article}
                </Typography>
              </Button>
            </Grid>
          </Paper>
        ) : (
          <Paper
            elevation={5}
            sx={{
              width: '50%',
              m: 'auto',
              mt: '35px',
              backgroundColor: 'primary.main',
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              textAlign={'center'}
              sx={{p: 2}}
            >
              Current score: {score}
            </Typography>
            <ArticleBox
              word={answerTrue ? showTheAnswer : questionWord.word}
            ></ArticleBox>
            <Grid
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              sx={{backgroundColor: 'primary.dark', mt: 3}}
            >
              <Button
                sx={{color: 'primary.light'}}
                variant="text"
                onClick={() => optionClicked(questionWord.answer[0].article)}
              >
                <Typography component="h4" variant="h4">
                  {questionWord.answer[0].article}
                </Typography>
              </Button>
              <Button
                sx={{color: 'primary.light'}}
                variant="text"
                onClick={() => optionClicked(questionWord.answer[1].article)}
              >
                <Typography component="h4" variant="h4">
                  {questionWord.answer[1].article}
                </Typography>
              </Button>
            </Grid>
          </Paper>
        )}
      </ThemeProvider>
    </>
  );
};

export default Game;
