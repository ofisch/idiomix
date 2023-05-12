import React, {useEffect, useState} from 'react';
import Start from './Start';

import {selectedLang} from '../hooks/infoHooks';
import wordData from '../src/assets/EsWords.json';
import ArticleBox from '../src/assets/components/ArticleBox';
import {Box, Button, Grid, Paper, Stack, Typography} from '@mui/material';

const Game = () => {
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setQurrentQuestion] = useState(0);

  const getRandIndex = () => {
    return Math.floor(Math.random() * (wordData.length - 1) + 1);
  };

  let [questionWord, setQuestionWord] = useState('');
  let [answer, setAnswer] = useState('');

  questionWord = wordData[getRandIndex()];

  wordData[0].answer[0].article;

  const checkCorrectAnswer = () => {
    let correctAnswer;

    for (let i of questionWord.answer) {
      if (i.isCorrect == 'true') {
        correctAnswer = i.article;
      }
    }

    if (answer == correctAnswer) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const optionClicked = (userAnswer) => {
    setAnswer((answer = userAnswer));

    checkCorrectAnswer();
  };

  return (
    <>
      <Typography component="h1" variant="h2">
        Current score: {score}
      </Typography>

      {showFinalResults ? (
        <Paper elevation={5}>
          <Typography variant="h2">Final results:</Typography>
          <Typography variant="h3">moi miten menee</Typography>
          <Button>Restart</Button>
        </Paper>
      ) : (
        <Paper elevation={5} sx={{width: '50%', m: 'auto'}}>
          <ArticleBox word={questionWord.word}></ArticleBox>
          <Grid
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
          >
            <Button
              onClick={() => optionClicked(questionWord.answer[0].article)}
            >
              {questionWord.answer[0].article}
            </Button>
            <Button
              onClick={() => optionClicked(questionWord.answer[1].article)}
            >
              {questionWord.answer[1].article}
            </Button>
          </Grid>
        </Paper>
      )}
    </>
  );
};

export default Game;
