import greeting from '../cli.js';
import { playGame, endGame } from '../index.js';

const generateQuestion = () => {
  const isEven = (num) => num % 2 === 0;
  const randNum = Math.floor(Math.random() * (100 + 1));
  const correctAnswer = isEven(randNum) ? 'yes' : 'no';
  return [randNum, correctAnswer];
};

const validateInput = (answer) => ['yes', 'no'].includes(answer);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const name = greeting();
  const result = playGame(task, generateQuestion, validateInput);
  endGame(result, name);
}

