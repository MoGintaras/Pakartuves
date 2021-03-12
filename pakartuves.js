const alphabet = document.getElementById("letters")

let playWord = ""
let winCounter = 0
let bodyParts = ["head","body","leftHand","rightHand","leftLeg","rightLeg"]


function createAlphabet(){
    let alphabetLetter = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i <alphabetLetter.length ; i++) {
        alphabet.innerHTML +=`
        <div id="${alphabetLetter[i]}" class="allLetters">${alphabetLetter[i].toUpperCase()}</div>
`    }
    for (let i = 0; i <alphabetLetter.length ; i++) {
        document.getElementById(`${alphabetLetter[i]}`).addEventListener("click", letterPressed)
    }
}
createAlphabet()

function fetchWords(){
    let randomPlayWords = ["kardanas","babina","difuzorius","karbiuratorius","variklis","generatorius","velenas","alkuninis","skriemulys","sailentblokas"]
    playWord = randomPlayWords[Math.round(Math.random()*9)]
    for (let i = 0; i <playWord.length ; i++) {
        document.getElementById("wordToAnswer").innerHTML += `
        <div style="position: relative;margin-right: 20px">
        <div class="${playWord[i]}" style="font-size: 50px;display:none;font-weight: bold">${playWord[i]}</div>
        <div style="margin-right:20px;font-size: 50px;font-weight: bold; top: 5px;left: 0">_</div>
        </div>
    `
    }
}
fetchWords()
function letterPressed(e){
    if (playWord.includes(e.target.id)){
        document.getElementById(`${e.target.id}`).style.backgroundColor = "gray"
        document.getElementById(`${e.target.id}`).removeEventListener("click", letterPressed)
        let elementToMap = document.getElementsByClassName(`${e.target.id}`)
        for (let i = 0; i <elementToMap.length ; i++) {
            elementToMap[i].style.display = "block"
            winCounter ++
        }
    checkForWin()

    }
    else {
        let bodyPart = bodyParts.shift()
        if (bodyPart === "rightLeg"){
        document.getElementById(`${bodyPart}`).style.display = "none"
        document.getElementById(`${e.target.id}`).style.backgroundColor = "red"
        document.getElementById(`${e.target.id}`).removeEventListener("click", letterPressed)
            winCounter = 0
            alphabet.innerHTML = `
        <div>
        <h1>YOU LOSE!</h1>
        <button id="playAgain">Play Again</button>
        </div>`
            document.getElementById("playAgain").addEventListener("click", restartPage)
            document.getElementById("wordToAnswer").innerHTML = `
            <h1>${playWord}</h1>`
        }
    else {
            document.getElementById(`${bodyPart}`).style.display = "none"
            document.getElementById(`${e.target.id}`).style.backgroundColor = "red"
            document.getElementById(`${e.target.id}`).removeEventListener("click", letterPressed)
        }
    }
}
function checkForWin(){
    if (winCounter === playWord.length){
        winCounter = 0
        alphabet.innerHTML = `
        <div>
        <h1>YOU WIN!</h1>
        <button id="playAgain">Play Again</button>
        </div>`
        document.getElementById("playAgain").addEventListener("click", restartPage)
    }
}
function restartPage(){
    location.reload();
}