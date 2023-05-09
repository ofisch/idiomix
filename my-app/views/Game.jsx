import React from 'react';
import Start from './Start';

import {selectedLang} from '../hooks/infoHooks';
import wordData from '../src/assets/EsWords.json';
import ArticleBox from '../src/assets/components/ArticleBox';

// artikkeliBoksin sana
let randIndex = Math.floor(Math.random() * (wordData.length - 1) + 1);
let word = wordData[randIndex].word.split(' ');
console.log('sana: ', word);

const Game = () => {
  return <ArticleBox questionWord={word[1]} questionArticle={word[0]} />;
};

export default Game;
