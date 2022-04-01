const button = document.getElementById("button");
const button2 = document.getElementById("button2");
let scoreText = document.getElementById("scoreText");
let scoreText2 = document.getElementById("scoreText2");
const newGame = document.getElementById("newGame");
const holdButton1 = document.getElementById("holdButton1");
const holdButton2 = document.getElementById("holdButton2");

//new game button
newGame.addEventListener("click", () => {
    scoreCount = 0;
    scoreCount2 = 0;
    scoreText.innerHTML = `Your score is ${scoreCount}`;
    button.style.visibility = "visible";
    button2.style.visibility = "hidden";
    scoreText2.innerHTML = `Your score is ${scoreCount}`;
    arr.forEach((e) => {e.style.backgroundColor = "transparent";});
    arr2.forEach((e) => {e.style.backgroundColor = "transparent";});
    holdButton1.style.visibility = "visible";
    holdButton2.style.visibility = "hidden";
})

// Player 1
let scoreCount = 0;

//die1 dots
const [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9] = [
    document.getElementById("dot1"),
    document.getElementById("dot2"),
    document.getElementById("dot3"),
    document.getElementById("dot4"),
    document.getElementById("dot5"),
    document.getElementById("dot6"),
    document.getElementById("dot7"),
    document.getElementById("dot8"),
    document.getElementById("dot9")]


//die1 functionality
button.addEventListener('click', ()=>{
    let number = Math.floor(Math.random() * 6) + 1;
    console.log(number);
    scoreCount += number;
    diceRollFunction(number);
    if (number == 1) {
        console.log(number);
        scoreText.innerHTML = "Your rolled a 1, you lose!";
        scoreText2.innerHTML = "You win!";
        button.style.visibility = "hidden";
        console.log(scoreText);
        holdButton1.style.visibility = "hidden";
    } else if (scoreCount > 20) {
        scoreText.innerHTML = `Your score is ${scoreCount}, you win!`;
        scoreText2.innerHTML = "You lose!"
        arr.forEach((e) => {
        e.style.backgroundColor = "transparent";
        scoreCount = 0;
        });
        button.style.visibility = "hidden";
    } else {
        scoreText.innerHTML = `Your score is ${scoreCount}`;
        holdButton1.style.visibility = "visible";
    }
})

let arr = [dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9];

const diceRollFunction= function(param) {
    switch(param){
        case 1:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[4]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 2:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 3:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[4], arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 4:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[2], arr[6], arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 5:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[2], arr[4], arr[6], arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 6:
            arr.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr[0], arr[1], arr[2], arr[6], arr[7],arr[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
    }
}

// Player 2
let scoreCount2 = 0;

//die2 dots
const [dot2_1, dot2_2, dot2_3, dot2_4, dot2_5, dot2_6, dot2_7, dot2_8, dot2_9] = [
    document.getElementById("dot2_1"),
    document.getElementById("dot2_2"),
    document.getElementById("dot2_3"),
    document.getElementById("dot2_4"),
    document.getElementById("dot2_5"),
    document.getElementById("dot2_6"),
    document.getElementById("dot2_7"),
    document.getElementById("dot2_8"),
    document.getElementById("dot2_9")]


//die2 functionality
button2.addEventListener('click', ()=>{
    let number2 = Math.floor(Math.random() * 6) + 1;
    console.log(number2);
    scoreCount2 += number2;
    diceRollFunction2(number2);
    if (number2 == 1) {
        console.log(number2);
        scoreText2.innerHTML = "Your rolled a 1, you lose!";
        scoreText.innerHTML = "You win!";
        button2.style.visibility = "hidden";
        console.log(scoreText2);
        holdButton2.style.visibility = "hidden";
    } else if (scoreCount2 > 20) {
        scoreText2.innerHTML = `Your score is ${scoreCount2}, you win!`;
        scoreText.innerHTML = "You lose!";
        arr2.forEach((e) => {
        e.style.backgroundColor = "transparent";
        scoreCount2 = 0;
        });
        button2.style.visibility = "hidden";

        holdButton2.style.visibility = "visible";
    } else {
        scoreText2.innerHTML = `Your score is ${scoreCount2}`;
    }
})

let arr2 = [dot2_1, dot2_2, dot2_3, dot2_4, dot2_5, dot2_6, dot2_7, dot2_8, dot2_9];

const diceRollFunction2 = function(param) {
    switch(param){
        case 1:
            arr2.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr2[4]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 2:
            arr2.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr2[0], arr2[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 3:
            arr2.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr2[0], arr2[4], arr2[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 4:
            arr2.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr2[0], arr2[2], arr2[6], arr2[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 5:
            arr2.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr2[0], arr2[2], arr2[4], arr2[6], arr2[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
        case 6:
            arr2.forEach((e) => {e.style.backgroundColor = "transparent";
            [arr2[0], arr2[1], arr2[2], arr2[6], arr2[7],arr2[8]].forEach((e) => {e.style.backgroundColor = "#ee9b00"});
            });
        break;
    }
}


//hold functionaity
holdButton1.addEventListener("click", ()=> {
    button.style.visibility = "hidden";
    button2.style.visibility = "visible";
    holdButton1.style.visibility = "hidden";
    holdButton2.style.visibility = "visible";
})
holdButton2.addEventListener("click", ()=> {
    button.style.visibility = "visible";
    button2.style.visibility = "hidden";
    holdButton1.style.visibility = "visible";
    holdButton2.style.visibility = "hidden";
})