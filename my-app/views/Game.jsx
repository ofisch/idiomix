import React, {useEffect, useRef, useState} from 'react';
import Start from './Start';
import '../src/App.css';

import {
  selectedSpeed,
  selectedLang,
  selectedRounds,
  selectedType,
} from '../hooks/infoHooks';
import esWords from '../src/assets/EsWords.json';
import esFeedback from '../src/assets/EsFeedback.json';
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
import {Link, useNavigate} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import esFlag from '../src/assets/Flag_of_Spain.svg';

let optionsToDisplay = [];
let hardWords = [];
let correctAnswers = [];

const options = {
  speed: 1000,
  rounds: 10,
  type: 'all',
};

const Game = () => {
  if (selectedSpeed != undefined) {
    options.speed = selectedSpeed;
    console.log('speed', selectedSpeed);
  }

  if (selectedRounds != undefined) {
    options.rounds = selectedRounds;
    console.log('rounds', selectedRounds);
  }

  if (selectedType != undefined) {
    options.type = selectedType;
    console.log('type', selectedType);
  }

  /*
  console.log('options.speed', options.speed);
  console.log('options.rounds', options.rounds);
  console.log('options.type', options.type);
*/

  const navigate = useNavigate();

  let [showFinalResults, setFinalResults] = useState(false);
  let [round, setRound] = useState(1);
  let [score, setScore] = useState(0);
  let [streak, setStreak] = useState(0);
  const [currentQuestion, setQurrentQuestion] = useState(0);

  // palauttaa satunnaisen arvon sanalistasta
  const getRandIndex = () => {
    if (selectedLang == 'es') {
      return Math.floor(Math.random() * (esWords.length - 1) + 1);
    } else if (selectedLang == 'se') {
      return Math.floor(Math.random() * (se.length - 1) + 1);
    }
  };

  const getRandFeedback = () => {
    if (selectedLang == 'es') {
      let index = Math.floor(Math.random() * (esFeedback.length - 1) + 1);
      return esFeedback[index].feedback;
    } else if (selectedLang == 'se') {
      let index = Math.floor(Math.random() * (seFeedback.length - 1) + 1);
      return seFeedback[index].feedback;
    }
  };

  let [questionWord, setQuestionWord] = useState('');
  let [answer, setAnswer] = useState('');

  const getRandWord = (category) => {
    if (selectedLang == 'es') {
      let wordToSelect = '';
      let prevWord = '';
      if (category == 'all') {
        // questionWord = esWords[getRandIndex()];
        wordToSelect = esWords[getRandIndex()];
        console.log('all:', wordToSelect);
        console.log('getRandIndex esWords: ', esWords[getRandIndex()]);
      } else if (category == 'article') {
        wordToSelect = esWords[getRandIndex()];
        while (
          wordToSelect.type != 'article' //&&
          //prevWord.word != wordToSelect.word
        ) {
          wordToSelect = esWords[getRandIndex()];
        }
        console.log('article:', wordToSelect);
      } else if (category == 'conjugation') {
        wordToSelect = esWords[getRandIndex()];
        while (
          wordToSelect.type != 'conjugation' //&&
          //prevWord.word != wordToSelect.word
        ) {
          wordToSelect = esWords[getRandIndex()];
        }
        console.log('conjugation:', wordToSelect);
      }

      questionWord = wordToSelect;

      // jos luku <= 5, vaihdetaan vastausvaihtoehtojen paikkaa
      if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 <= 5) {
        let originalArticle = questionWord.answer[0].article;
        let originalIsCorrect = questionWord.answer[0].isCorrect;

        questionWord.answer[0].article = questionWord.answer[1].article;
        questionWord.answer[1].article = originalArticle;

        questionWord.answer[0].isCorrect = questionWord.answer[1].isCorrect;
        questionWord.answer[1].isCorrect = originalIsCorrect;

        console.log('[0]', questionWord.answer[0].article);
        console.log('[1]', questionWord.answer[1].article);
      }

      prevWord = wordToSelect.word;
      console.log('prevWord: ', prevWord);
    }
  };

  // haetaan satunnainen sana listasta
  getRandWord(options.type);

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
      setRound(round + 1);
      setScore(score + 1);
      setStreak(streak + 1);
      //  options.speed -= 80;

      correctAnswers.push(answer);
    } else {
      setAnswerTrue((answerTrue = false));
      setRound(round + 1);

      setStreak((streak = 0));
      /*
      if (!hardWords.includes(questionWord.word)) {
        hardWords.push(questionWord.word);
      }
      */

      if (questionWord.type == 'article') {
        if (!hardWords.includes(questionWord.word)) {
          hardWords.push(questionWord.word);
        }
      } else if (questionWord.type == 'conjugation') {
        if (!hardWords.includes(answer)) {
          hardWords.push(answer);
        }
      }
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
    if (round == options.rounds) {
      setFinalResults((showFinalResults = true));
    }
  };

  const restart = () => {
    setFinalResults((showFinalResults = false));
    setRound((round = 0));
    setStreak((streak = 0));
    hardWords = [];
    correctAnswers = [];
  };

  const renderHardWords = () => {
    return (
      <>
        {hardWords.length > 0 ? (
          <Grid>
            <Typography variant="h4">Hard words:</Typography>

            {hardWords.map((word) => (
              <li
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    color: 'primary.dark',
                  },
                }}
              >
                <a href={'https://www.spanishdict.com/translate/' + word}>
                  {word}
                </a>
              </li>
            ))}
          </Grid>
        ) : (
          <Grid>
            <Typography sx={{mt: 2}} component="p" variant="h4">
              {getRandFeedback()}
            </Typography>

            {correctAnswers.map((word) => (
              <li
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    color: 'primary.dark',
                  },
                }}
              >
                <a href={'https://www.spanishdict.com/translate/' + word}>
                  {word}
                </a>
              </li>
            ))}
          </Grid>
        )}
      </>
    );
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
          <Grid sx={{mt: 5}}>
            <Paper
              elevation={5}
              sx={{
                /*width: '45%',*/
                minWidth: '20vw',
                maxWidth: '50vw',
                m: 'auto',
                /*mt: '35px',*/
                mt: 5,
                mb: 15,
                backgroundColor: 'primary.main',
                '@media (max-width:970px)': {maxWidth: '90vw'},
              }}
            >
              <Grid
                container
                flexDirection={'row'}
                alignItems={'center'}
                alignContent={'stretch'}
                justifyContent={'space-between'}
                sx={{px: 2, backgroundColor: 'primary.dark'}}
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
                    navigate('/settings');
                  }}
                ></ArrowBackIcon>
                <Typography
                  component={'h1'}
                  variant="h1"
                  textAlign={'center'}
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
              <Grid sx={{p: 2}}>
                <Typography variant="h2" component="h1">
                  {score} / {options.rounds} correct
                </Typography>
                <Typography variant="h4" component="h2" sx={{fontSize: '1em'}}>
                  {renderHardWords()}
                </Typography>
              </Grid>
              <Grid
                display={'flex'}
                flexDirection={'row'}
                sx={{backgroundColor: 'primary.dark', mt: 2}}
              >
                <Button
                  sx={{
                    color: 'rgba(0, 0, 0, 0.87)',
                    '&:hover': {backgroundColor: 'primary.main'},
                  }}
                  variant="text"
                  onClick={() => {
                    restart();
                    navigate('/settings');
                  }}
                >
                  <Typography variant="h4" component="h4" sx={{}}>
                    restart
                  </Typography>
                </Button>
              </Grid>
            </Paper>
          </Grid>
        ) : answerTrue ? (
          <Grid sx={{mt: 5}}>
            <Paper
              elevation={5}
              sx={{
                /*width: '45%',*/ minWidth: '20vw',
                maxWidth: '50vw',
                m: 'auto',
                /*mt: '35px',*/
                mt: 5,
                mb: 15,
                backgroundColor: 'green',
                '@media (max-width:970px)': {maxWidth: '90vw'},
              }}
            >
              <Grid
                container
                flexDirection={'row'}
                alignItems={'center'}
                alignContent={'stretch'}
                justifyContent={'space-between'}
                sx={{px: 2, backgroundColor: 'primary.dark'}}
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
                    navigate('/settings');
                  }}
                ></ArrowBackIcon>
                <Typography
                  component={'h1'}
                  variant="h1"
                  textAlign={'center'}
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
              <Typography
                component="h1"
                variant="h2"
                textAlign={'center'}
                sx={{p: 2}}
              >
                Streak: {streak}
              </Typography>
              <Typography
                component="p"
                variant="p"
                textAlign={'center'}
                sx={{mb: 2}}
              >
                {round} / {options.rounds}
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
          </Grid>
        ) : (
          <Grid sx={{mt: 5}}>
            <Paper
              elevation={7}
              sx={{
                /*width: '45%',*/
                minWidth: '20vw',
                maxWidth: '50vw',
                m: 'auto',
                /*mt: '35px',*/
                mt: 5,
                mb: 15,
                backgroundColor: 'primary.main',
                '@media (max-width:970px)': {maxWidth: '90vw'},
              }}
            >
              <Grid
                container
                flexDirection={'row'}
                alignItems={'center'}
                alignContent={'stretch'}
                justifyContent={'space-between'}
                sx={{px: 2, backgroundColor: 'primary.dark'}}
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
                    navigate('/settings');
                  }}
                ></ArrowBackIcon>
                <Typography
                  component={'h1'}
                  variant="h1"
                  textAlign={'center'}
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
              <Typography
                component="h2"
                variant="h2"
                textAlign={'center'}
                sx={{p: 2}}
              >
                Streak: {streak}
              </Typography>
              <Typography
                component="p"
                variant="p"
                textAlign={'center'}
                sx={{mb: 2}}
              >
                {round} / {options.rounds}
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
                  sx={{
                    color: 'rgba(0, 0, 0, 0.87)',
                    '&:hover': {backgroundColor: 'primary.main'},
                  }}
                  variant="text"
                  onClick={() => optionClicked(questionWord.answer[0].article)}
                >
                  <Typography component="h4" variant="h4">
                    {questionWord.answer[0].article}
                  </Typography>
                </Button>
                <Button
                  sx={{
                    color: 'rgba(0, 0, 0, 0.87)',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                    },
                  }}
                  variant="text"
                  onClick={() => optionClicked(questionWord.answer[1].article)}
                >
                  <Typography component="h4" variant="h4">
                    {questionWord.answer[1].article}
                  </Typography>
                </Button>
              </Grid>
            </Paper>
          </Grid>
        )}
      </ThemeProvider>
    </>
  );
};

export default Game;
