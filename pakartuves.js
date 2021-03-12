const alphabet = document.getElementById("letters")

function createAlphabet(){
    let alphabetLetter = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i <alphabetLetter.length ; i++) {
        alphabet.innerHTML +=`
        <div id="${alphabetLetter[i]}" class="allLetters">${alphabetLetter[i].toUpperCase()}</div>
`    }
}
createAlphabet()

function fetchWords(){

}