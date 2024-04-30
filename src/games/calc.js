import greeting from '../cli.js';
import { playGame, endGame } from '../index.js';

const generateQuestion = () => {
  const genRand = (top = 100, bot = 1) => Math.floor(Math.random() * (top - bot + 1)) + bot;
  const randNum1 = genRand();
  const randNum2 = genRand();
  const actions = ['+', '-', '*'];
  const chosenAction = actions[genRand(2, 0)];
  const actionFunc = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b
  };
  const questionLine = `${randNum1} ${chosenAction} ${randNum2}`;
  const correctAnswer = actionFunc[chosenAction](randNum1, randNum2).toString();
  return [questionLine, correctAnswer];
};

const validateInput = (answer) => /\d+/.test(answer);

const task = 'What is the result of the expression?';

export default () => {
  const name = greeting();
  const result = playGame(task, generateQuestion, validateInput);
  endGame(result, name);
};
