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

  // setQuestionWord((questionWord = wordData[getRandIndex()].word.split(' ')));

  questionWord = wordData[getRandIndex()].word.split(' ');

  questionWord = wordData[getRandIndex()].word.split(' ');

  console.log(questionWord);

  const optionClicked = (userAnswer) => {
    setAnswer((answer = userAnswer));
    if (answer == questionWord[0]) {
      setScore(score + 1);
    }
  };

  return (
    <>
      <Typography variant="h1">Idiomix</Typography>
      <Typography variant="h2">Current score: {score}</Typography>

      {showFinalResults ? (
        <Paper elevation={5}>
          <Typography variant="h2">Final results:</Typography>
          <Typography variant="h3">moi miten menee</Typography>
          <Button>Restart</Button>
        </Paper>
      ) : (
        <Paper elevation={5}>
          <Typography variant="h2">haha xd</Typography>
          <Typography variant="h3">{`${questionWord[1]}`}</Typography>
          <Button onClick={() => optionClicked('un')}>un</Button>
          <Button onClick={() => optionClicked('una')}>una</Button>
        </Paper>
      )}
    </>
  );
};

export default Game;
