let gameSeq = [];
let userSeq = [];
let highscore = [];

let started = false;
let level = 0;

let btns = ["red", "green", "yellow", "purple"];

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game started");
        started = true;
        levelUp()
    }
    
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.toggle("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.toggle("userflash");
    },250);
}



function levelUp(){
    userSeq = [];            // when the leveUp in the game than userSeq is empty because user ko suruvat se chize dal ni padegi yehi game hai;

    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx]; // color select
    let randomBtn = document.querySelector(`.${randomColor}`)
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randomBtn)

    gameSeq.push(randomColor);   // random color add in gameSeq array
    gameflash(randomBtn);
    console.log(gameSeq);
}

//button press

function checkAns(idx) {
    // console.log("current level =", level);
    // let idx = level -1;                 // yeha dalne ki jarurt current value matlab konse index pe check kar rahe hai;

    if(userSeq[idx] === gameSeq[idx]){
        console.log("same value");
        if(userSeq.length === gameSeq.length){

            setTimeout(levelUp, 1000);   // take time for level up, because we see the color. when the level up.
        }

    }else{
        highestScroe();
        h2.innerHTML = `Game over! Your score is <b>${level}</b> <br>Press any key to star <br> highest score is ${oldscore}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        
        reset()
       
    }
}

function btnPress() {
    console.dir(this)                    // which button was click
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");        // select user color in userSeq array
    userSeq.push(userColor)
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset(){
    started = false
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let oldscore = 0;

function highestScroe(){

    highscore.push(level);

    for(score of highscore){
        // console.log(`your current score is ${score}`)
        let currscore = score;

        if(oldscore < currscore){

            oldscore = currscore;
        }

    }

    
}