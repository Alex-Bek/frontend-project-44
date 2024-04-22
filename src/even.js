import readlineSync, { question } from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const generateQuestion = () => {
  const randNum = Math.floor(Math.random() * (100 + 1));
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randNum}`);
  return randNum;
}

const validateInput = (answer) => {
  return ['yes', 'no'].includes(answer.toLowerCase())
}

const answerEvaluation = (answer, question) => {
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  if (correctAnswer === answer) {
    console.log('correct');
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`)
    return false;
  }
}

let successfulAttempts = 0;
const evenGame = (name) => {
  while (successfulAttempts < 3) {
    const question = generateQuestion();    
    const answer = readlineSync.question('Your answer: ');

    if (!validateInput(answer)) {
      console.log('wrong input');
      return false;
    }
    if (!answerEvaluation(answer, question)) {
      return false
    }
    successfulAttempts += 1;
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default evenGame;
