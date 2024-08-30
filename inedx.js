let lettersArea=document.querySelector(".letters-area")
let letters="abcdefghijklmnopqrstuvwxyz"
let lettersArray = Array.from(letters);
console.log(lettersArray);

lettersArray.forEach(letter=>{
    let letterSpan = document.createElement("span");
    let letterText = document.createTextNode(letter);
    letterSpan.className ="letter-span"
    letterSpan.appendChild(letterText);
    lettersArea.appendChild(letterSpan);

})

let words ={
    cartoons:["onepiece","dragonball","naroto","bebleed","forsan alard"],
    supers:["superman","batman","spiderman","hulk","flash","lofi"],
    countries:["yemen","oman","palastine","egypt","syria","qutar"],
    jobs:["hr","saler","maneger","colecenter"]
}

let wordsKeys =Object.keys(words);
// console.log(wordsKeys)
let randonNum = Math.floor(Math.random() * wordsKeys.length);
// console.log(randonNum);
let randomName = wordsKeys[randonNum];
console.log(randomName);

let randomArray = words[randomName];
// console.log(randomArray);

let randomArrayNum = Math.floor(Math.random() * randomArray.length);
// console.log(randomArrayNum);

// let randomArray= words[randonNameNum];
// console.log(randomArray);

let randomValue = randomArray[randomArrayNum];
console.log(randomValue);

let randomValueArray = Array.from(randomValue);
// console.log(randomValueArray);

let randomValueIndex = Math.floor(Math.random() * randomValue.length);


let randomLetter = randomValue[randomValueIndex];
console.log(randomLetter);

// let randomValue = Array.from(randomName[randonNameNum]);
// console.log(randomValue); 
let randonNumValue = Math.floor(Math.random() * randomName.length);
// console.log(randonNumValue);
let randomValueValue = randomName[randonNumValue];
// console.log(randomValueValue);

let randomValueNumber = Array.from(randomValue);
// console.log(randomValueNumber);

randomValueLength = randomValueNumber.length;
// console.log(randomValueLength);


let values = Array.from(randomValue);
console.log(values);

// let guessSpans = document.querySelector(".guess-span")
// console.log(guessSpans);

// let guessDiv = document.querySelectorAll(".guess-letters span")
// consol.log(guessDiv);

let guessLetters =document.querySelector(".guess-letters");
console.log(guessLetters);

values.forEach(element=> {
    let elementSpan = document.createElement("span");
    let elementText = document.createTextNode("");

    elementSpan.classList.add("guess-span");
    elementSpan.appendChild(elementText);
    guessLetters.appendChild(elementSpan);

});

let guessLetter = document.querySelectorAll(".guess-span");
// console.log(guessLetter);

let wrongAttempts = 0;
let rightAttempts =0;

let wrongAttemptSpan =document.querySelector(".hangman-category span");
wrongAttemptSpan.innerHTML = wrongAttempts;

let lettersSpans =document.querySelectorAll(".letters-area span");

let theDraw =document.querySelector(".draw-area")


function endGame(){
    endGameDiv =document.createElement("div");
    endGameText =document.createTextNode(`Game Over The Word Is ${randomValue}`);
    endGameDiv.classList.add("end-game");
    endGameDiv.appendChild(endGameText);
    document.body.appendChild(endGameDiv)

}

let myWord =document 

function youWin(){
    youWinner =document.createElement("div");
    youWinnerText =document.createTextNode(`Congratulations The Word Is  ${randomValue}`);
    youWinner.classList.add("you-win");
    youWinner.appendChild(youWinnerText);
    document.body.appendChild(youWinner)
}

let ourContainer =document.querySelector(".hangman-container")
function containerOpacity(){
    ourContainer.classList.add("opac")

}

lettersSpans.forEach(span=>{
    span.addEventListener("click",e=>{

        theStatus = false;
        // console.log(theStatus);
        
            e.target.classList.add("clicked");
            let theClickedLetter=e.target.innerHTML.toLowerCase();
    
            values.forEach((wordLetter,wordLetterIndex)=>{
                if (theClickedLetter == wordLetter) {
                    rightAttempts++;
                    console.log(rightAttempts)
                    document.querySelector(".win").play()

    
                    console.log(`found at index of ${wordLetterIndex}`);
                    theStatus = true;

                    if(rightAttempts ==randomValue.length){
                        youWin();
                        containerOpacity();
                        document.querySelector(".game-win").play();

                    }
    
                    guessLetter.forEach((span, guessSpanIndex) => {
                    if (wordLetterIndex == guessSpanIndex) {
                        span.innerHTML = theClickedLetter;
                    }
                    })
            }
        })
        

            if(theStatus !== true){
                wrongAttempts++;
                console.log(wrongAttempts);
                wrongAttemptSpan.innerHTML = wrongAttempts;
                theDraw.classList.add(`wrong-${wrongAttempts}`)
                document.querySelector(".lose").play();


                if(wrongAttempts ==8){
                    endGame();
                    containerOpacity();
                document.querySelector(".game-over").play();
                }


    }
            console.log(theStatus)
        })

})








// let guessSpans = Array.from(guessLetters);
// console.log(guessSpans);




// console.log(randomValue);

// let lettersWillBeClicked =document.querySelectorAll(".letter-span")
// lettersWillBeClicked.forEach(span=>{
//     span.onclick=function(){
//         span.classList.add("clicked")
//         elementSpan.innerHTML=
//     }
// })

