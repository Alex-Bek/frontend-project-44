import greeting from '../cli.js';
import { playGame, endGame } from '../index.js';

const generateQuestion = () => {
  const genRand = (top = 100, bot = 1) => Math.floor(Math.random() * (top - bot + 1)) + bot;
  const startNum = genRand();
  const increment = genRand(10, 1);
  const elemCount = genRand(10, 5);
  const missingElemIndex = genRand(elemCount - 1, 0);
  const result = [];
  for (let i = 0; i < elemCount; i += 1) {
    const nextElem = startNum + increment * i;
    result.push(nextElem);
  }
  const correctAnswer = result[missingElemIndex].toString();
  result[missingElemIndex] = '..';
  const questionLine = result.join(' ');
  return [questionLine, correctAnswer];
};

const validateInput = (answer) => /\d+/.test(answer);

const task = 'What number is missing in the progression?';

export default () => {
  const name = greeting();
  const result = playGame(task, generateQuestion, validateInput);
  endGame(result, name);
};
