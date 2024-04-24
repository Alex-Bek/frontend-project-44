import greeting from '../cli.js';
import { playGame, endGame } from '../index.js';

const generateQuestion = () => {
  const genRand = () => Math.floor(Math.random() * (100 + 1));
  const randNum1 = genRand();
  const randNum2 = genRand();
  let a = randNum1;
  let b = randNum2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  const result = a;
  const questionLine = `${randNum1} ${randNum2}`;
  const correctAnswer = (result).toString();
  return [questionLine, correctAnswer];
};

const validateInput = (answer) => /\d+/.test(answer);

const task = 'Find the greatest common divisor of given numbers.';

export default () => {
  const name = greeting();
  const result = playGame(task, generateQuestion, validateInput);
  endGame(result, name);
};
