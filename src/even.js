export const generateQuestion = () => {
  const isEven = (num) => num % 2 === 0;
  const randNum = Math.floor(Math.random() * (100 + 1));
  const correctAnswer = isEven(randNum) ? 'yes' : 'no';
  return [randNum, correctAnswer];
};

export const validateInput = (answer) => ['yes', 'no'].includes(answer);

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';
