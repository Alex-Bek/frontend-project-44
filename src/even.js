import readlineSync from 'readline-sync';

let successfulAttempts = 0;
const evenGame = (name) => {
  while (successfulAttempts < 3) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const randNum = Math.floor(Math.random() * (100 + 1));
    console.log(`Question: ${randNum}`);
    const isEven = randNum % 2 === 0;
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && isEven) || (answer === 'no' && !isEven)) {
      console.log('correct');
      successfulAttempts += 1;
    } else if (answer === 'yes') {
      console.log(["'yes' is wrong answer ;(. Correct answer was 'no'.", `Let's try again, ${name}!`].join('\n'));
      return false;
    } else if (answer === 'no') {
      console.log(["'no' is wrong answer ;(. Correct answer was 'yes'.", `Let's try again, ${name}!`].join('\n'));
      return false;
    } else {
      console.log('wrong input');
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export default evenGame;
