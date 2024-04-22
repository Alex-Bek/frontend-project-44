import { askQuestion, recieveAnswer, answerEvaluation} from './index.js'
 
const generateQuestion = () => {
  const isEven = (num) => num % 2 === 0;
  const randNum = Math.floor(Math.random() * (100 + 1));
  const correctAnswer = isEven(randNum) ? 'yes' : 'no'
  return [randNum, correctAnswer];
}

const validateInput = (answer) => {
  return ['yes', 'no'].includes(answer)
}

const evenGame = (name) => {
  let successfulAttempts = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (successfulAttempts < 3) {
    const [question, correctAnswer] = generateQuestion();   
    askQuestion(question) 
    const answer = recieveAnswer()

    if (!validateInput(answer)) {
      console.log('wrong input');
      return false;
    }
    if (!answerEvaluation(answer, correctAnswer)) {
      return false
    }
    successfulAttempts += 1;
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default evenGame;
