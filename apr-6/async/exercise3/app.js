//promise to check for valid user entry
let userNum = new Promise((resolve, reject) => {
  let user = parseInt(prompt("Guess a num between 1-6"));

  if (user < 7 && user > 0) {
    resolve(user);
  } else reject("Enter a valid num to guess");
});

//promise to check for valid input to play again

let playAgain = new Promise((resolve, reject) => {
  let wantToPlay = prompt("Want to guess again? yes or no");

  if (wantToPlay == "yes") resolve(true);
  else if (wantToPlay == "no") resolve(false);
  else reject("Enter a valid input to play again or not");
});

//guessing game called using async/await

let guessingGame = async () => {
  let isGame = true;
  let point = 0;
  try {
    while (isGame) {
      let user = await userNum;

      let randomNum = Math.ceil(Math.random() * 6);

      if (Math.abs(user - randomNum) == 1) {
        alert("you guessed it correctly");
        point++;
      } else alert("you failed to guess correctly");

      let wantToPlay = await playAgain;

      if (!wantToPlay) isGame = false;
    }

    alert(`Your points are ${point}`);
  } catch (err) {
    alert(err);
  }
};

guessingGame();
