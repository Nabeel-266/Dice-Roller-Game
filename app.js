const overlay = document.querySelector('.overlay');
const instructionBtn = document.querySelector('.instruction');
const instructionArea = document.querySelector('.Instructions');
const closeBtn = document.querySelector('.close');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const changeNameP1 = document.querySelector('.changeNameP1');
const changeNameP2 = document.querySelector('.changeNameP2');
const inputPlayer1 = document.querySelector('.inputPlayer1');
const inputPlayer2 = document.querySelector('.inputPlayer2');
const okButtonP1 = document.querySelector('.okP1');
const okButtonP2 = document.querySelector('.okP2');
const playerName = document.querySelector('.playerName');

closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    instructionArea.classList.add('hidden');
})


instructionBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    instructionArea.classList.remove('hidden');
})


// -------------- Player 1 Change Name --------------
player1.textContent = 'Player 1';
player1.addEventListener('click', () => {
    changeNameP1.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

okButtonP1.addEventListener('click', () => {

    if(inputPlayer1.value == ''){
        player1.textContent = 'Player 1';
        changeNameP1.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    else{
        player1.textContent = inputPlayer1.value;
        changeNameP1.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})


// -------------- Player 2 Change Name --------------
player2.textContent = 'Player 2';
player2.addEventListener('click', () => {
    changeNameP2.classList.remove('hidden');
    overlay.classList.remove('hidden');
})

okButtonP2.addEventListener('click', () => {

    if(inputPlayer2.value == ''){
        player2.textContent = 'Player 2';
        changeNameP2.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    else{
        player2.textContent = inputPlayer2.value;
        changeNameP2.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})
 
overlay.addEventListener('click', () => {
    changeNameP1.classList.add('hidden');
    changeNameP2.classList.add('hidden');
    congrats.classList.add('hidden');
    overlay.classList.add('hidden');
    instructionArea.classList.add('hidden');
})

const newGameButton = document.querySelector('.newGameBtn');
const plyr1MainScore = document.querySelector('.player1MainScr');
const plyr2MainScore = document.querySelector('.player2MainScr');
const plyr1CurrentScore = document.querySelector('.player1CrntScr');
const plyr2CurrentScore = document.querySelector('.player2CrntScr');
const diceImage = document.querySelector('.dice-Image');
const rollButton = document.querySelector('.rollBtn');
const holdButton = document.querySelector('.holdBtn');
const player1Area = document.querySelector('.player1Info');
const player2Area = document.querySelector('.player2Info');
const plyr1GainScore = document.querySelector('.p1GnScr');
const plyr2GainScore = document.querySelector('.p2GnScr');
const plyr1LostScore = document.querySelector('.p1LstScr');
const plyr2LostScore = document.querySelector('.p2LstScr');
const congrats = document.querySelector('.congratulation');
const thankBtn = document.querySelector('.thankBtn');

var playerOne = true;

// -------------------------------------------------------
rollButton.addEventListener('click', DiceRoller);

function DiceRoller() {
    let diceNumber = Math.ceil(Math.random() * 6);
    diceImage.src = `./Images/${diceNumber}.png`;
    diceImage.classList.remove('hidden');

    diceImage.classList.add('animation');
    setTimeout(() =>{
        diceImage.classList.remove('animation');
    }, 600)


    if(diceNumber == 1){
        if(playerOne == true){
            plyr1LostScore.textContent = +(plyr1CurrentScore.textContent);
            plyr1CurrentScore.textContent = 0;
            playerOne = false;
        } else {
            plyr2LostScore.textContent = +(plyr2CurrentScore.textContent);
            plyr2CurrentScore.textContent = 0;
            playerOne = true;
        }
        player1Area.classList.toggle('active');
        player2Area.classList.toggle('active');
        // currentScore.textContent = 0;  -----------------> For Another Method Use
        // movePlayer(); -----------------> For Another Method Use
    }
    else{
        if(playerOne == true){
            plyr1CurrentScore.textContent = +(plyr1CurrentScore.textContent) + diceNumber;
        } else {
            plyr2CurrentScore.textContent = +(plyr2CurrentScore.textContent) + diceNumber;  
        }
        // currentScore.textContent = +(currentScore.textContent) + diceNumber; --------> For Another Method Use
    }
}

// -------------------------------------------------------
holdButton.addEventListener('click', DiceHold)

function DiceHold() {

    if(playerOne == true){
        plyr1MainScore.textContent = +(plyr1MainScore.textContent) + +(plyr1CurrentScore.textContent);
        plyr1GainScore.textContent = +(plyr1CurrentScore.textContent);
        plyr1CurrentScore.textContent = 0;
        playerOne = false;

        if(+(plyr1MainScore.textContent) >= 100){
            overlay.classList.remove('hidden');
            congrats.classList.remove('hidden');
            playerName.innerHTML = player1.textContent;
            playerName.style.color = "#ffa600"
        }
    } else {
        plyr2MainScore.textContent = +(plyr2MainScore.textContent) + +(plyr2CurrentScore.textContent);
        plyr2GainScore.textContent = +(plyr2CurrentScore.textContent);
        plyr2CurrentScore.textContent = 0;
        playerOne = true

        if(+(plyr2MainScore.textContent) >= 100){
            overlay.classList.remove('hidden');
            congrats.classList.remove('hidden');
            playerName.innerHTML = player2.textContent;
            playerName.style.color = "#00ff95"
        }
    }

    player1Area.classList.toggle('active');
    player2Area.classList.toggle('active');

    // -------------------------------> For Another Method Use <----------------------------------
    // mainScore.textContent = +(mainScore.textContent) + +(currentScore.textContent)
    // currentScore.textContent = 0
    // if (mainScore.textContent >= 100) {
    //     if (activePlyr == player1Area) {
    //         congrats.classList.remove('hidden');
    //         overlay.classList.remove('hidden');
    //         window.location.reload;
    //     } else {
    //         congrats.classList.remove('hidden');
    //         overlay.classList.remove('hidden');
    //         window.location.reload;
    //     }
    // } else {
    //     movePlayer();
    // }
}

// --------------------------------------------------------
// var activePlyr = player1Area;
// function movePlayer(){
//     if(activePlyr == player1Area){
//         activePlyr = player2Area;
//         activePlyr.classList.add('active');
//         player1Area.classList.remove('active');
//     } 
//     else if(activePlyr == player2Area){
//         activePlyr = player1Area;
//         activePlyr.classList.add('active');
//         player2Area.classList.remove('active');
//     }
//     playerScoreChanges();
// }
//   -----------------------------------------------------------------> For Another Method Use
// ---------------------------------------------------------
// var currentScore = plyr1CurrentScore;
// var mainScore = plyr1MainScore;
// function playerScoreChanges(){
//     if(activePlyr == player1Area){
//         currentScore = plyr1CurrentScore;
//         mainScore = plyr1MainScore;
//     }
//     else if(activePlyr == player2Area){
//         currentScore = plyr2CurrentScore;
//         mainScore = plyr2MainScore;
//     }
// }


thankBtn.addEventListener('click', () => {
    congrats.classList.add('hidden');
    overlay.classList.add('hidden');
    window.location.reload()
})

newGameButton.addEventListener('click', () => {
    window.location.reload()
})
