import greeting from '../cli.js';
import { playGame, endGame } from '../index.js';

const despatchAction = (arg1, arg2, action) => {
  if (action === '+') return arg1 + arg2;
  if (action === '-') return arg1 - arg2;
  if (action === '*') return arg1 * arg2;
};

const generateQuestion = () => {
  const genRand = (top = 100, bot = 1) => Math.floor(Math.random() * (top - bot + 1)) + bot;
  const randNum1 = genRand();
  const randNum2 = genRand();
  const actions = ['+', '-', '*'];
  const chosenAction = actions[genRand(2,0)];
  const questionLine = `${randNum1} ${chosenAction} ${randNum2}`;
  const correctAnswer = despatchAction(randNum1, randNum2, chosenAction).toString();
  return [questionLine, correctAnswer];
};

const validateInput = (answer) => /\d+/.test(answer);

const task = 'What is the result of the expression?';

export default () => {
  const name = greeting();
  const result = playGame(task, generateQuestion, validateInput);
  endGame(result, name);
};
