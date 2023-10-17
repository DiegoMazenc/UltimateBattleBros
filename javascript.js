// Sélection des boutons
let attakOne = document.querySelector(".btnAttaqueOne");
let healOne = document.querySelector(".btnHealOne");
let attakTwo = document.querySelector(".btnAttaqueTwo");
let healTwo = document.querySelector(".btnHealTwo");
let game = document.querySelector(".game");
let cardOne = document.querySelector(".playerOne");
let cardTwo = document.querySelector(".playerTwo");
let divHpOne = document.querySelector(".hpOne");
let divHpTwo = document.querySelector(".hpTwo");
let divActionOne = document.querySelector(".actionOne");
let divActionTwo = document.querySelector(".actionTwo");
let naMeOne = document.querySelector(".naMeOne");
let nameTwo = document.querySelector(".nameTwo");
let charaOne = document.querySelector(".playerOne img");
let charaTwo = document.querySelector(".playerTwo img");
let pvOne = document.querySelector(".nbrPvOne");
let pvTwo = document.querySelector(".nbrPvTwo");
let pvFontOne = document.querySelector(".pvFontOne");
let pvFontTwo = document.querySelector(".pvFontTwo");
let cursorOne = document.querySelector(".upCursorOne");
let cursorTwo = document.querySelector(".upCursorTwo");
let nameOne = document.querySelector(".nameOne");
let life = document.querySelector(".life");
let time = document.querySelector(".time");
let modeUn = document.querySelector(".modeUn");
let modeDeux = document.querySelector(".modeDeux");
let compteurOne = document.querySelector("#compteurOne");
let compteurTwo = document.querySelector("#compteurTwo");
let lifeOne = document.querySelector("#lifeOne");
let lifeTwo = document.querySelector("#lifeTwo");
let optionPlayerOne = document.querySelector("#optionPlayerOne");
let optionPlayerTwo = document.querySelector("#optionPlayerTwo");
let plus1One = document.querySelector(".plus1One");
let moins1One = document.querySelector(".moins1One");
let plus1Two = document.querySelector(".plus1Two");
let moins1Two = document.querySelector(".moins1Two");

let gameOver = true;
//Level bots
let levelBotOneInput = document.querySelector("#nbrLvlOne");
let levelBotOne = parseInt(levelBotOneInput.value);
let levelBotTwoInput = document.querySelector("#nbrLvlTwo");
let levelBotTwo = parseInt(levelBotTwoInput.value);
levelBotOneInput.addEventListener("input", function () {
  levelBotOne = parseInt(levelBotOneInput.value);
});
levelBotTwoInput.addEventListener("input", function () {
  levelBotTwo = parseInt(levelBotTwoInput.value);
});

// Afficher les dégats et heals
let nbrDegatInput = document.querySelector("#nbrdamage");
let nbrHealInput = document.querySelector("#nbrheal");
let reducHeal = document.querySelector(".reduction");
let nbrDegat = parseFloat(nbrDegatInput.value.replace("%", ""));
let nbrHeal = parseFloat(nbrHealInput.value.replace("%", ""));
nbrDegatInput.addEventListener("input", function () {
  nbrDegat = parseFloat(nbrDegatInput.value.replace("%", ""));
});
nbrHealInput.addEventListener("input", function () {
  nbrHeal = parseFloat(nbrHealInput.value.replace("%", ""));
  reducHeal.textContent = "-" + nbrHeal + "%";
});

//=====MENU=====

let startButton = document.getElementById("startButton");
let menu = document.getElementById("menu");
let gameStart = document.getElementById("game");

//Bouton Start
startButton.addEventListener("click", function (event) {
  if (isLifeHovered == false && isTimeHovered == false){
    event.preventDefault();
    
  }else{
    gameOver = false;
  menu.style.display = "none";
  gameStart.style.display = "block";
  setTimeout(() => {
    setInterval(updateChronoGame, 1000);
  }, 3000);
  updateChronoGame();
  if (!gameOver && isLifeHovered == true) {
    setTimeout(() => {
      botIntervalTwo = setInterval(botActionTwo, 1000);
      botIntervalOne = setInterval(botActionOne, 1000);
    }, 3000);

  } else if (!gameOver && isTimeHovered == true) {
    setTimeout(() => {
      botIntervalOne = setInterval(botChronoOne,1000);
      botIntervalTwo = setInterval(botChronoTwo,1000);
    }, 3000);

  }
}


});


//Bouton Start Active
function startGameHover() {
  if (isLifeHovered || isTimeHovered) {
    startButton.classList.add("startButtonActive");
    startButton.classList.remove("startButton");

    startButton.addEventListener("mouseover", function() {
      if (isLifeHovered || isTimeHovered) {
        startButton.classList.add("startButtonActiveHover");
      }
    });
    
    startButton.addEventListener("mouseout", function() {
      if (isLifeHovered || isTimeHovered) {
        startButton.classList.remove("startButtonActiveHover");
      }
    });
  } else {
    startButton.classList.remove("startButtonActive", "startButtonActiveHover");
    startButton.classList.add("startButton");
    
    startButton.removeEventListener("mouseover", null);
    startButton.removeEventListener("mouseout", null);
  }
}

//====CHOIX JOUEURS===//
let iconBotOne  = document.querySelector(".IconbotOne");
let iconJoueurOne = document.querySelector(".IconjoueurOne");
let iconBotTwo  = document.querySelector(".IconbotTwo");
let iconJoueurTwo = document.querySelector(".IconjoueurTwo");
let levelOne = document.querySelector(".levelOne");
let levelTwo = document.querySelector(".levelTwo");
let JoueurOne = document.querySelector(".JoueurOne");
let JoueurTwo = document.querySelector(".JoueurTwo");


//Joueur 1
let isBotUnHoveredOne = false;
let isJoueurHoveredOne = false;


iconJoueurOne.classList.add("IconjoueurOneHover");
levelOne.style.display = "none";
JoueurOne.style.backgroundImage = "url(SamusBleu.png)";

iconBotOne.addEventListener("click", function () {
  isBotUnHoveredOne = true;

  iconBotOne.classList.add("IconbotOneHover");
  levelOne.style.display = "block";
  JoueurOne.style.backgroundImage = "url(SamusGrie.png)";

  isJoueurHoveredOne = false;
  iconJoueurOne.classList.remove("IconjoueurOneHover");
  optionPlayerOne.classList.remove("optionPlayerOne");
  optionPlayerOne.classList.add("optionBotOne");

});
iconJoueurOne.addEventListener("click", function () {
  // isJoueurHoveredOne = ! isBotUnHoveredOne;
  iconJoueurOne.classList.add("IconjoueurOneHover");
  levelOne.style.display = "none";
  JoueurOne.style.backgroundImage = "url(SamusBleu.png)";

  isBotUnHoveredOne = false;

  
  iconBotOne.classList.remove("IconbotOneHover");
  optionPlayerOne.classList.remove("optionBotOne");
  optionPlayerOne.classList.add("optionPlayerOne");

});



//Joueur 2
let isBotUnHoveredTwo = false;
let isJoueurHoveredTwo = false;

iconJoueurTwo.classList.add("IconjoueurTwoHover");
levelTwo.style.display = "none";
JoueurTwo.style.backgroundImage = "url(LinkRed.png)";

iconBotTwo.addEventListener("click", function () {
  isBotUnHoveredTwo = true;
  optionPlayerTwo.classList.remove("optionPlayerTwo");
  optionPlayerTwo.classList.add("optionBotTwo");
  iconBotTwo.classList.add("IconbotTwoHover");
  levelTwo.style.display = "block";
  JoueurTwo.style.backgroundImage = "url(LinkGrie.png)";

  isJoueurHoveredTwo = false;
  iconJoueurTwo.classList.remove("IconjoueurTwoHover");
  optionPlayerTwo.classList.remove("optionPlayerTwo");
  optionPlayerTwo.classList.add("optionBotTwo");
});

iconJoueurTwo.addEventListener("click", function () {
  iconJoueurTwo.classList.add("IconjoueurTwoHover");
  levelTwo.style.display = "none";
  JoueurTwo.style.backgroundImage = "url(LinkRed.png)";

  isBotUnHoveredTwo = false;
  iconBotTwo.classList.remove("IconbotTwoHover");
  optionPlayerTwo.classList.remove("optionBotTwo");
  optionPlayerTwo.classList.add("optionPlayerTwo");
});


// Choix mode jeux
let nbrVie = document.querySelector("#lifes");
let lifeCountOne = document.querySelector(".lifeCountOne");
let lifeCountTwo = document.querySelector(".lifeCountTwo");
let pointCountOne = document.querySelector(".pointCountOne");
let pointCountTwo = document.querySelector(".pointCountTwo");
let isLifeHovered = false;
let isTimeHovered = false;

life.addEventListener("click", function () {
  isLifeHovered = !isLifeHovered;
  life.classList.toggle("lifeHover");
  updateLifeCountOne();
  updateLifeCountTwo();

  isTimeHovered = false;
  time.classList.remove("timeHover");
  compteurOne.style.display = "none";
  compteurTwo.style.display = "none";
  startGameHover()
});

time.addEventListener("click", function () {
  isTimeHovered = !isTimeHovered;
  time.classList.toggle("timeHover");
  compteurOne.style.display = "flex";
  compteurTwo.style.display = "flex";

  isLifeHovered = false;
  life.classList.remove("lifeHover");
  lifeOne.style.display = "none";
  lifeTwo.style.display = "none";
  startGameHover()
});


// Afficher le conteur de vie
function updateLifeCountOne() {
  lifeCountOne.textContent = parseInt(nbrVie.value);
  lifeCountOne.style.display = "block";
}
nbrVie.addEventListener("input", updateLifeCountOne);

function updateLifeCountTwo() {
  lifeCountTwo.textContent = parseInt(nbrVie.value);
  lifeCountTwo.style.display = "block";
}
nbrVie.addEventListener("input", updateLifeCountTwo);

// Mise en place du random pour les attaques
function getRandom(string) {
  const random = Math.floor(Math.random() * string.length);
  return string[random];
}

let key = "AZERTYUIPQSDFGHJKLMWXCVBN123456789";

/*Fonction Aléatoire Attaque*/
function updateAttakOne() {
  do {
    attakOne.innerHTML = getRandom(key);
  } while (attakOne.innerHTML === attakTwo.innerHTML);
}
function updateAttakTwo() {
  do {
    attakTwo.innerHTML = getRandom(key);
  } while (attakTwo.innerHTML === attakOne.innerHTML);
}

updateAttakOne();
updateAttakTwo();

//Bot J1
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

//Bot 1 Mode Survie
function botActionOne() {
  if (botJ1 && !gameOver && isBotUnHoveredOne == true) {

    const randomBotKey2 = bot1();
    if (randomBotKey2 === attakOne.innerHTML) {
      pvTwo.textContent = parseInt(pvTwo.textContent) + nbrDegat;
      playerOneAttakAnim();
      updateAttakOne();
      if (
        parseInt(pvTwo.textContent) >= 100 &&
        parseInt(lifeCountTwo.textContent) > 1
      ) {
        playerOneKill();
        lifeCountTwo.textContent = parseInt(lifeCountTwo.textContent) - 1;
        pvTwo.textContent = "0%";
        moins1Two.classList.add("moins-1");
        setTimeout(() => {
          moins1Two.classList.remove("moins-1");
        }, 1000);

        clearInterval(botIntervalOne);

        setTimeout(() => {
          botIntervalOne = setInterval(botActionOne, 1500);
        }, 5000);

        botJ1 = false;
        setTimeout(botJ1 = true, 5000);
        botJ2 = false;
        setTimeout(botJ2 = true, 3000);

      } else if (
        parseInt(pvTwo.textContent) >= 100 &&
        parseInt(lifeCountTwo.textContent) == 1
      ) {
        botJ1 = false;
        botJ2 = false;
        playerTwoEnd();
        clearInterval(botIntervalOne);
        gameOver = true;
      }
    }
  }
  pointVies ()
}

//Bot 1 Mode Chrono
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
        plus1One.classList.add("plus-1");
        setTimeout(() => {
          plus1One.classList.remove("plus-1");
        }, 1000);
        if(parseInt(pointCountTwo.textContent)>0){
          pointCountTwo.textContent = parseInt(pointCountTwo.textContent) - 1;
          moins1Two.classList.add("moins-1");
          setTimeout(() => {
            moins1Two.classList.remove("moins-1");
          }, 1000);}
        pvTwo.textContent = 0 + "%";
        clearInterval(botIntervalOne);
        setTimeout(() => {
          botIntervalOne = setInterval(botChronoOne, 1500);
        }, 5000);
        botJ1 = false;
        setTimeout(botJ1 = true, 5000);
        botJ2 = false;
        setTimeout(botJ2 = true, 3000);
        
      } 
    }
  }
  pointChrono ()
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

//Bot 2 Mode Survie
function botActionTwo() {
  
  if (botJ2 && !gameOver && isBotUnHoveredTwo == true) {
    const randomBotKey2 = bot2();

    if (randomBotKey2 === attakTwo.innerHTML) {
      pvOne.textContent = parseInt(pvOne.textContent) + nbrDegat;
      playertWOAttakAnim();
      updateAttakTwo();
      if (
        parseInt(pvOne.textContent) >= 100 &&
        parseInt(lifeCountOne.textContent) > 1
      ) {
        playerTwoKill();
        lifeCountOne.textContent = parseInt(lifeCountOne.textContent) - 1;
        pvOne.textContent = "0%";
        moins1One.classList.add("moins-1");
        setTimeout(() => {
          moins1One.classList.remove("moins-1");
        }, 1000);
        clearInterval(botIntervalTwo);
        setTimeout(() => {
          botIntervalTwo = setInterval(botActionTwo, 1500);
        }, 5000);
        botJ2 = false;
        setTimeout(botJ2 = true, 5000);
        botJ1 = false;
        setTimeout(botJ1 = true, 3000);
      } else if (
        parseInt(pvOne.textContent) >= 100 &&
        parseInt(lifeCountOne.textContent) == 1
      ) {
        botJ1 = false;
        botJ2 = false;
        playerOneEnd();
        clearInterval(botIntervalTwo);
        gameOver = true;
      }
    }
  }
  pointVies ()
}

//Bot 2 Mode Chrono
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
        plus1Two.classList.add("plus-1");
        setTimeout(() => {
          plus1Two.classList.remove("plus-1");
        }, 1000);
        if(parseInt(pointCountOne.textContent)>0){
          pointCountOne.textContent = parseInt(pointCountOne.textContent) - 1;
          moins1One.classList.add("moins-1");
          setTimeout(() => {
            moins1One.classList.remove("moins-1");
          }, 1000);}
        pvOne.textContent = 0 + "%";
        clearInterval(botIntervalTwo);
        setTimeout(() => {
          botIntervalTwo = setInterval(botChronoTwo, 1500);
        }, 5000);
        botJ2 = false;
        setTimeout(botJ2 = true, 5000);
        botJ1 = false;
        setTimeout(botJ1 = true, 3000);
        
    }
    }
  }
  pointChrono ()
}


/*Fonction Aléatoire Heal*/
function updateHealOne() {
  do {
    healOne.innerHTML = getRandom(key);
  } while (
    healOne.innerHTML === healTwo.innerHTML &&
    healOne.innerHTML === attakOne.innerHTML &&
    healOne.innerHTML === attakTwo.innerHTML
  );
}
function updateHealTwo() {
  do {
    healTwo.innerHTML = getRandom(key);
  } while (
    healTwo.innerHTML === healOne.innerHTML &&
    healTwo.innerHTML === attakOne.innerHTML &&
    healTwo.innerHTML === attakTwo.innerHTML
  );
}

//ANIMATION MORT VERTICALE
let lightanimImg = document.querySelector("#lightanimImg");
let lightanimImg2 = document.querySelector("#lightanimImg2");
let lightanimImg0 = document.querySelector("#lightanimImg0");
let lightanimImgReverse = document.querySelector("#lightanimImgReverse");
let lightanimImg2Reverse = document.querySelector("#lightanimImg2Reverse");
let lightanimImg0Reverse = document.querySelector("#lightanimImg0Reverse");
function playerOneKill() {
  attakOne.style.visibility = "hidden";
  attakTwo.style.visibility = "hidden";

  setTimeout(() => {
    attakOne.style.visibility = "visible";
  }, 5500);

  setTimeout(() => {
    attakTwo.style.visibility = "visible";
  }, 4000);

  setTimeout(() => {
    lightanimImg.classList.add("animate-dead-light");
    lightanimImg2.classList.add("animate-dead-light2");
    lightanimImg0.classList.add("animate-dead-light2");
  }, 250);

  lightanimImg.addEventListener("animationend", function () {
    lightanimImg.classList.remove("animate-dead-light");
  });

  lightanimImg2.addEventListener("animationend", function () {
    lightanimImg2.classList.remove("animate-dead-light2");
  });

  lightanimImg0.addEventListener("animationend", function () {
    lightanimImg0.classList.remove("animate-dead-light2");
  });

  setTimeout(() => {
    charaTwo.style.visibility = "hidden";
  }, 250);
  setTimeout(() => {
    charaTwo.style.visibility = "visible";
    charaTwo.classList.add("position-return");
  }, 2000);

  charaTwo.addEventListener("animationend", function () {
    charaTwo.classList.remove("position-return");
  });
}

function playerTwoKill() {
  attakOne.style.visibility = "hidden";
  attakTwo.style.visibility = "hidden";

  setTimeout(() => {
    attakTwo.style.visibility = "visible";
  }, 5500);

  setTimeout(() => {
    attakOne.style.visibility = "visible";
  }, 4000);

  setTimeout(() => {
    lightanimImgReverse.classList.add("animate-dead-light-reverse");
    lightanimImg2Reverse.classList.add("animate-dead-light2-reverse");
    lightanimImg0Reverse.classList.add("animate-dead-light2-reverse");
  }, 250);

  lightanimImgReverse.addEventListener("animationend", function () {
    lightanimImgReverse.classList.remove("animate-dead-light-reverse");
  });

  lightanimImg2Reverse.addEventListener("animationend", function () {
    lightanimImg2Reverse.classList.remove("animate-dead-light2-reverse");
  });

  lightanimImg0Reverse.addEventListener("animationend", function () {
    lightanimImg0Reverse.classList.remove("animate-dead-light2-reverse");
  });

  setTimeout(() => {
    charaOne.style.visibility = "hidden";
  }, 250);
  setTimeout(() => {
    charaOne.style.visibility = "visible";
    charaOne.classList.add("position-return");
  }, 2000);

  charaOne.addEventListener("animationend", function () {
    charaOne.classList.remove("position-return");
  });
}

//ANIMATION MORT HORIZONTAL
function playerOneEnd() {
  gameOver = true;
  game.classList.add("animate-game");
  charaOne.classList.add("animate-dead-One");
  optionPlayerOne.style.visibility  = "hidden";
  healOne.style.display = "none";
  attakOne.style.display = "none";
  item.style.display = "none";
  setTimeout(() => {
    charaOne.style.visibility = "hidden";
  }, 3200);
}
function playerTwoEnd() {
  gameOver = true;
  game.classList.add("animate-game");
  charaTwo.classList.add("animate-dead-Two");
  optionPlayerTwo.style.visibility  = "hidden";
  healTwo.style.display = "none";
  attakTwo.style.display = "none";
  item.style.display = "none";
  setTimeout(() => {
    charaTwo.style.visibility = "hidden";
  }, 3200);
}

//ANIMATION ATTAQUE
function playerOneAttakAnim() {
  cursorTwo.style.width = pvTwo.textContent + "%";
  updateColor(pvTwo);
  updateHitTwo(pvTwo);

  pvFontTwo.classList.remove("animate-pv-two");
  void pvFontTwo.offsetWidth;
  pvFontTwo.classList.add("animate-pv-two");

  charaTwo.classList.add("animate-hit-two");
  setTimeout(() => {
    charaTwo.classList.remove("animate-hit-two");
  }, 700);
}
function playertWOAttakAnim() {
  cursorOne.style.width = pvOne.textContent + "%";
  updateColor(pvOne);
  updateHitOne(pvOne);

  pvFontOne.classList.remove("animate-pv-one");
  void pvFontOne.offsetWidth;
  pvFontOne.classList.add("animate-pv-one");

  charaOne.classList.add("animate-hit-one");
  setTimeout(() => {
    charaOne.classList.remove("animate-hit-one");
  }, 700);
}

//=====IN GAME=====//
document.addEventListener("keydown", function (event) {
  if (!gameOver && isLifeHovered == true) {
    battleSurvie();
;
  } else if (!gameOver && isTimeHovered == true) {
    battleChrono();
    
    

  }
});

//Mode Survie
function battleSurvie() {
  /*Joueur 1*/
  if (event.key === attakOne.innerHTML) {
    pvTwo.textContent = parseInt(pvTwo.textContent) + nbrDegat;
   

    playerOneAttakAnim();
    updateAttakOne();
    if (
      parseInt(pvTwo.textContent) >= 100 &&
      parseInt(lifeCountTwo.textContent) > 1
    ) {
      playerOneKill();
      
      lifeCountTwo.textContent = parseInt(lifeCountTwo.textContent) - 1;
      pvTwo.textContent = 0 + "%";
      moins1Two.classList.add("moins-1");
      setTimeout(() => {
        moins1Two.classList.remove("moins-1");
      }, 1000);
    } else if (
      parseInt(pvTwo.textContent) >= 100 &&
      parseInt(lifeCountTwo.textContent) == 1
    ) {
      playerTwoEnd();
    }
  } else if (event.key === attakTwo.innerHTML) {
    /*Joueur 2*/
    pvOne.textContent = parseInt(pvOne.textContent) + nbrDegat;
   
    playertWOAttakAnim();
    updateAttakTwo();
    if (
      parseInt(pvOne.textContent) >= 100 &&
      parseInt(lifeCountOne.textContent) > 1
    ) {
      playerTwoKill();
      lifeCountOne.textContent = parseInt(lifeCountOne.textContent) - 1;
      pvOne.textContent = 0 + "%";
      moins1One.classList.add("moins-1");
      setTimeout(() => {
        moins1ONE.classList.remove("moins-1");
      }, 1000);
    } else if (
      parseInt(pvOne.textContent) >= 100 &&
      parseInt(lifeCountOne.textContent) == 1
    ) {
      playerOneEnd();
    }
  }
  pointVies ()
}

//Mode Chrono
function battleChrono() {
  /*Joueur 1*/
 
  if (event.key === attakOne.innerHTML) {
    pvTwo.textContent = parseInt(pvTwo.textContent) + nbrDegat;
   
    playerOneAttakAnim();
    updateAttakOne();
    if (parseInt(pvTwo.textContent) >= 100) {
      playerOneKill();
      pointCountOne.textContent = parseInt(pointCountOne.textContent) + 1;
      plus1One.classList.add("plus-1");
      setTimeout(() => {
        plus1One.classList.remove("plus-1");
      }, 1000);
      setTimeout
      if(parseInt(pointCountTwo.textContent)>0){
        pointCountTwo.textContent = parseInt(pointCountTwo.textContent) - 1;}
      pvTwo.textContent = 0 + "%";
      moins1Two.classList.add("moins-1");
      setTimeout(() => {
        moins1Two.classList.remove("moins-1");
      }, 1000);
      
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
      plus1Two.classList.add("plus-1");
      setTimeout(() => {
        plus1Two.classList.remove("plus-1");
      }, 1000);
      if(parseInt(pointCountOne.textContent)>0){
      pointCountOne.textContent = parseInt(pointCountOne.textContent) - 1;}
      pvOne.textContent = 0 + "%";
      moins1One.classList.add("moins-1");
      setTimeout(() => {
        moins1One.classList.remove("moins-1");
      }, 1000);
      
    }
    
    // playerOneEnd();
  }
  pointChrono ()
}

function pointChrono (){
  if (parseInt(pointCountOne.textContent)>parseInt(pointCountTwo.textContent)){
    compteurOne.classList.remove("compteurOne");
    compteurOne.classList.add("compteurHeadOne");
    compteurTwo.classList.add("compteurTwo");
    compteurTwo.classList.remove("compteurHeadTwo");
  } else if (parseInt(pointCountOne.textContent)<parseInt(pointCountTwo.textContent)){
    compteurOne.classList.add("compteurOne");
    compteurOne.classList.remove("compteurHeadOne");
    compteurTwo.classList.remove("compteurTwo");
    compteurTwo.classList.add("compteurHeadTwo");
  } else {
    compteurOne.classList.add("compteurOne");
    compteurOne.classList.remove("compteurHeadOne");
    compteurTwo.classList.add("compteurTwo");
    compteurTwo.classList.remove("compteurHeadTwo");
  }
}

pointChrono ()

function pointVies (){
  if (parseInt(lifeCountOne.textContent)>parseInt(lifeCountTwo.textContent)){
    lifeOne.classList.remove("lifeOne");
    lifeOne.classList.add("lifeHeadOne");
    lifeTwo.classList.add("lifeTwo");
    lifeTwo.classList.remove("lifeHeadTwo");
  } else if (parseInt(lifeCountOne.textContent)<parseInt(lifeCountTwo.textContent)){
    lifeOne.classList.add("lifeOne");
    lifeOne.classList.remove("lifeHeadOne");
    lifeTwo.classList.remove("lifeTwo");
    lifeTwo.classList.add("lifeHeadTwo");
  } else {
    lifeOne.classList.add("lifeOne");
    lifeOne.classList.remove("lifeHeadOne");
    lifeTwo.classList.add("lifeTwo");
    lifeTwo.classList.remove("lifeHeadTwo");
  }
}

pointVies ()

//Chrono
const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");
const chronoGame = document.querySelector("#chronoGame");

function updateChronoGame() {
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);
  if (isTimeHovered === true) {
    if (minutes >= 0 && seconds >= 0) {
      // Formatter les valeurs de minutes et de secondes comme une chaîne "mm:ss"
      const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
      chronoGame.textContent = formattedTime;

      // Décrémenter le temps d'une seconde (60 secondes = 1 minute)
      if (seconds > 0) {
        secondsInput.value = (seconds - 1).toString().padStart(2, "0");
      } else if (minutes > 0) {
        minutesInput.value = (minutes - 1).toString().padStart(2, "0");
        secondsInput.value = "59";
      }

      if (formattedTime === "00:00") {
        gameOver = true;
        item.style.display = "none";
        game.classList.add("animate-game-chrono");
      }
    }
  } else {
    chronoGame.style.display = "none";
  }
}

/*======APPARITION DU HEAL======*/

let intervalOne = null;
let intervalTwo = null;
let isKeysVisible = true;
let item = document.querySelector(".healItem");
let intervalItem = null;

// Fonction pour afficher ou masquer les touches et l'élément
function toggleKeysVisibility() {
  isKeysVisible = !isKeysVisible;
  item.style.visibility = isKeysVisible ? "visible" : "hidden";
  healOne.style.visibility = isKeysVisible ? "visible" : "hidden";
  healTwo.style.visibility = isKeysVisible ? "visible" : "hidden";
}

// Démarrer les intervalles au chargement de la page
intervalOne = setInterval(updateHealOne, 10000);
intervalTwo = setInterval(updateHealTwo, 10000);

// Démarrer l'intervalle pour l'élément en même temps que les touches
intervalItem = setInterval(function () {
  toggleKeysVisibility();
}, 10000);
document.addEventListener("keydown", function (event) {
  if (!gameOver && isKeysVisible) {
    if (event.key === healOne.innerHTML || event.key === healTwo.innerHTML) {
      // Masquer les touches lorsqu'un joueur appuie sur une touche
      toggleKeysVisibility();

      // Réafficher les touches après un certain délai
      setTimeout(function () {
        toggleKeysVisibility();
      }, 10000);
    }
  }
});

/*HEAL*/
document.addEventListener("keydown", function (event) {
  if (!gameOver) {
    /*Joueur 1*/
    if (event.key === healOne.innerHTML) {
      pvOne.textContent = parseInt(pvOne.textContent) - nbrHeal + "%";
      if (parseInt(pvOne.textContent) < 0) {
        pvOne.textContent = 0 + "%";
      }

      cursorOne.style.width = pvOne.textContent;
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
      clearInterval(intervalItem);
      updateHealOne();
    } else if (event.key === healTwo.innerHTML) {
      /*Joueur 2*/
      pvTwo.textContent = parseInt(pvTwo.textContent) - nbrHeal + "%";
      if (parseInt(pvTwo.textContent) < 0) {
        pvTwo.textContent = 0 + "%";
      }

      cursorTwo.style.width = pvTwo.textContent;
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
      clearInterval(intervalItem);
      updateHealTwo();
    }
  }
});

//HEAL BOT 1
let botHealJ1 = true;
let botIntervalHealOne;
let activeHeal = true;
function botHeal1() {
  let btnBot = healOne.innerHTML;
  let healBotKey = "";
  let randomBotKey1 = "";

  for (let i = 0; i < levelBotOne; i++) {
    healBotKey += btnBot;
  }

  for (let i = 0; i < (12-levelBotOne); i++) {
    if (getRandom(key) != btnBot) {
      healBotKey += getRandom(key);
    }
  }

  console.log(healBotKey + "  heal  ");
  randomBotKey1 = getRandom(healBotKey);
  console.log(randomBotKey1 + "  heal  ");
  return randomBotKey1;
}

function botHealOne() {
  if (botHealJ1 && activeHeal && !gameOver && isBotUnHoveredOne == true) {
    let randomBotKey1 = botHeal1();
    console.log(randomBotKey1);
    if (randomBotKey1 === healOne.innerHTML) {
      pvOne.textContent = parseInt(pvOne.textContent) - nbrHeal + "%";
      if (parseInt(pvOne.textContent) < 0) {
        pvOne.textContent = "0%";
      }
      activeHeal = false;
      cursorOne.style.width = pvOne.textContent;
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
      clearInterval(intervalItem);

      clearInterval(botIntervalHealOne);

      updateHealOne();

      setTimeout(function () {
        activeHeal = true;
      }, 10000);

      // Masquer les touches lorsqu'un joueur appuie sur une touche
      toggleKeysVisibility();

      // Réafficher les touches après un certain délai
      setTimeout(function () {
        toggleKeysVisibility();
      }, 10000);
    }
  }
}

botIntervalHealOne = setInterval(function () {
  setInterval(botHealOne, 2000);
}, 20000);


//HEAL BOT 2
let botHealJ2 = true;
let botIntervalHealTwo;
// let activeHeal = true;
function botHeal2() {
  let btnBot = healTwo.innerHTML;
  let healBotKey = "";
  let randomBotKey2 = "";

  for (let i = 0; i < levelBotTwo; i++) {
    healBotKey += btnBot;
  }

  for (let i = 0; i < (12-levelBotTwo); i++) {
    if (getRandom(key) != btnBot) {
      healBotKey += getRandom(key);
    }
  }

  console.log(healBotKey + "  heal  ");
  randomBotKey2 = getRandom(healBotKey);
  console.log(randomBotKey2 + "  heal  ");
  return randomBotKey2;
}

function botHealTwo() {
  if (botHealJ2 && activeHeal && !gameOver && isBotUnHoveredTwo == true) {
    let randomBotKey2 = botHeal2();
    console.log(randomBotKey2);
    if (randomBotKey2 === healTwo.innerHTML) {
      pvTwo.textContent = parseInt(pvTwo.textContent) - nbrHeal + "%";
      if (parseInt(pvTwo.textContent) < 0) {
        pvTwo.textContent = "0%";
      }
      activeHeal = false;
      cursorTwo.style.width = pvTwo.textContent;
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
      clearInterval(intervalItem);

      clearInterval(botIntervalHealTwo);

      updateHealTwo();

      setTimeout(function () {
        activeHeal = true;
      }, 10000);

      // Masquer les touches lorsqu'un joueur appuie sur une touche
      toggleKeysVisibility();

      // Réafficher les touches après un certain délai
      setTimeout(function () {
        toggleKeysVisibility();
      }, 10000);
    }
  }
}

botIntervalHealTwo = setInterval(function () {
  setInterval(botHealTwo, 2000);
}, 20000);



/*COULEUR PV*/
function updateColor(element) {
  const pvValue = parseInt(element.textContent);
  const redValue = Math.min(255, 255 - pvValue * 1.55);
  const otherValue = 255 - pvValue * 3.55;
  const color = `rgb(${redValue}, ${otherValue}, ${otherValue})`;

  element.style.color = color;
  element.textContent = `${pvValue}%`;
}
/*Mouvement Image 1*/
function updateHitOne(element) {
  const pvValue = parseInt(element.textContent);
  const animValue = pvValue * 2 + "%";
  const rotateValue = pvValue * 0.45 + "deg";
  console.log(animValue);
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `@keyframes hitAnimationOne {
      0% {
        transform: translateX(0) rotate(0deg);
      }
      15% {
        transform: translateX(-${animValue})rotate(-${rotateValue});
      }
      100% {
        transform: translateX(0) rotate(0deg);
      }
    }`,
    styleSheet.cssRules.length
  );
  if (pvValue == 100) {
    styleSheet.insertRule(
      `@keyframes hitAnimationOne {
        0% {
          transform: translateX(0) rotate(0deg);
        }
        25% {
          transform: translateX(-${animValue})rotate(-${rotateValue});
        }
        100% {
          transform: translateX(-100%) rotate(0deg);
        }
      }`,
      styleSheet.cssRules.length
    );
  }
}
/* Mouvement image 2 */
function updateHitTwo(element) {
  const pvValue = parseInt(element.textContent);
  const animValue = pvValue * 2 + "%";
  const rotateValue = pvValue * 0.45 + "deg";

  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `@keyframes hitAnimationTwo {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      transform: translateX(${animValue}) rotate(${rotateValue});
    }s
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }`,
    styleSheet.cssRules.length
  );
  if (pvValue == 100) {
    styleSheet.insertRule(
      `@keyframes hitAnimationOne {
      0% {
        transform: translateX(0) rotate(0deg);
      }
      25% {
        transform: translateX(-${animValue}) rotate(${rotateValue});
      }
      100% {
        transform: translateX(100%) rotate(0deg);
      }
    }`,
      styleSheet.cssRules.length
    );
  }
}
