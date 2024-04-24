import greeting from '../cli.js';
import { playGame, endGame } from '../index.js';

const generateQuestion = () => {
  const genRand = () => Math.floor(Math.random() * (100 + 1));
  const randNum1 = genRand();
  const randNum2 = genRand();
  const questionLine = `${randNum1} + ${randNum2}`;
  const correctAnswer = (randNum1 + randNum2).toString();
  return [questionLine, correctAnswer];
};

const validateInput = (answer) => /\d+/.test(answer);

const task = 'What is the result of the expression?';

export default () => {
  const name = greeting();
  const result = playGame(task, generateQuestion, validateInput);
  endGame(result, name);
}
