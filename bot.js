let botJ1 = true;
let botIntervalOne;
function bot1() {
  let btnBot = attakOne.innerHTML;
  let attakBotKey = "";
  let randomBotKey2 = "";

  for (let i = 0; i < levelBotOne; i++) {
    attakBotKey += btnBot;
  }

  for (let i = 0; i < (12-levelBotOne); i++) {
    if (getRandom(key) != btnBot) {
      attakBotKey += getRandom(key);
      console.log("Bot 1" + attakBotKey);
    }
  }

  randomBotKey2 = getRandom(attakBotKey);

  return randomBotKey2;
}

function botChronoOne() {
  if (botJ1 && !gameOver && isBotUnHoveredOne == true) {
    const randomBotKey2 = bot1();
    if (randomBotKey2 === attakOne.innerHTML) {
      pvTwo.textContent = parseInt(pvTwo.textContent) + nbrDegat;
      playerOneAttakAnim();
      updateAttakOne();
      if (parseInt(pvTwo.textContent) >= 100) {
        playerOneKill();
        pointCountOne.textContent = parseInt(pointCountOne.textContent) + 1;
        pvTwo.textContent = 0 + "%";
        clearInterval(botIntervalOne);
        setTimeout(() => {
          botIntervalOne = setInterval(botChronoOne, 1500);
        }, 5000);
        botJ2 = false;
        setTimeout(botJ2 = true, 3000);
      } 
      
    //   else if (
    //     parseInt(pvTwo.textContent) >= 100 &&
    //     parseInt(lifeCountTwo.textContent) == 1
    //   ) {
    //     botJ1 = false;
    //     botJ2 = false;
    //     playerTwoEnd();
    //     clearInterval(botIntervalOne);
    //     gameOver = true;
    //   }
    }
  }
}



//Bot J2
let botJ2 = true;
let botIntervalTwo;
function bot2() {
  let btnBot = attakTwo.innerHTML;
  let attakBotKey = "";
  let randomBotKey2 = "";

  for (let i = 0; i < levelBotTwo; i++) {
    attakBotKey += btnBot;
  }

  for (let i = 0; i < (12-levelBotTwo); i++) {
    if (getRandom(key) != btnBot) {
      attakBotKey += getRandom(key);
      console.log("Bot 2" + attakBotKey);
    }
  }

  randomBotKey2 = getRandom(attakBotKey);

  return randomBotKey2;
}
function botChronoTwo() {
  if (botJ2 && !gameOver && isBotUnHoveredTwo == true) {
    const randomBotKey2 = bot2();

    if (randomBotKey2 === attakTwo.innerHTML) {
      pvOne.textContent = parseInt(pvOne.textContent) + nbrDegat;
      playertWOAttakAnim();
      updateAttakTwo();
      if (parseInt(pvOne.textContent) >= 100) {
        playerTwoKill();
        pointCountTwo.textContent = parseInt(pointCountTwo.textContent) + 1;
        pvOne.textContent = 0 + "%";
        clearInterval(botIntervalTwo);
        setTimeout(() => {
          botIntervalTwo = setInterval(botChronoTwo, 1500);
        }, 5000);
        botJ1 = false;
        setTimeout(botJ1 = true, 3000);
    }
    //    else if (
    //     parseInt(pvOne.textContent) >= 100 &&
    //     parseInt(lifeCountOne.textContent) == 1
    //   ) {
    //     botJ1 = false;
    //     botJ2 = false;
    //     playerOneEnd();
    //     clearInterval(botIntervalTwo);
    //     gameOver = true;
    //   }
    }
  }
}


function battleChrono() {
    /*Joueur 1*/
    if (event.key === attakOne.innerHTML) {
      pvTwo.textContent = parseInt(pvTwo.textContent) + nbrDegat;
  
      playerOneAttakAnim();
      updateAttakOne();
      if (parseInt(pvTwo.textContent) >= 100) {
        playerOneKill();
        pointCountOne.textContent = parseInt(pointCountOne.textContent) + 1;
        pvTwo.textContent = 0 + "%";
      }
      // playerTwoEnd();
    } else if (event.key === attakTwo.innerHTML) {
      /*Joueur 2*/
      pvOne.textContent = parseInt(pvOne.textContent) + nbrDegat;
  
      playertWOAttakAnim();
      updateAttakTwo();
      if (parseInt(pvOne.textContent) >= 100) {
        playerTwoKill();
        pointCountTwo.textContent = parseInt(pointCountTwo.textContent) + 1;
        pvOne.textContent = 0 + "%";
      }
      // playerOneEnd();
    }
  }
  