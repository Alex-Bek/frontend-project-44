import greeting from '../cli.js';
import { playGame, endGame } from '../index.js';

const generateQuestion = () => {
  const genRand = () => Math.floor(Math.random() * (100 + 1));
  const randNum = genRand();
  const primesUpTo100 = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  const questionLine = randNum.toString();
  const correctAnswer = primesUpTo100.includes(randNum) ? 'yes' : 'no';
  return [questionLine, correctAnswer];
};

const validateInput = (answer) => ['yes', 'no'].includes(answer);

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const name = greeting();
  const result = playGame(task, generateQuestion, validateInput);
  endGame(result, name);
};
