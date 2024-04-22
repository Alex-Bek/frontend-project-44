import readlineSync from 'readline-sync';

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const recieveAnswer = () => readlineSync.question('Your answer: ').toLowerCase();

export const answerEvaluation = (answer, correctAnswer) => {
  if (correctAnswer === answer) {
    console.log('correct');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  return false;
};
