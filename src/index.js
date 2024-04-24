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

export const playGame = (task, generateQuestion, validateInput) => {
  let successfulAttempts = 0;
  console.log(task);

  while (successfulAttempts < 3) {
    const [question, correctAnswer] = generateQuestion();
    askQuestion(question);
    const answer = recieveAnswer();

    if (!validateInput(answer)) {
      console.log('wrong input');
      return false;
    }
    if (!answerEvaluation(answer, correctAnswer)) {
      return false;
    }
    successfulAttempts += 1;
  }
  return true;
};

export const endGame = (result, name) => {
  const response = result ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  console.log(response);
};
