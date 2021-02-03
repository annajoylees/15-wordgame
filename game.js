// importing commonWords package
import { commonWords } from "./constants"


//Word to be used
const secretWord = document.querySelector(".secretWord")
let randomWord; //Empty variable used in getRandomWord() 
const threeLetterWords = commonWords.filter(function(word) {  // filter out words with 3 or more letters
    return word.length >= 3;
})

////

// get a random array index number to generate each new word
function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * threeLetterWords.length);
    randomWord = threeLetterWords[randomIndex]
    hideWord(randomWord)
  }

////

// replace random word with underscores
function hideWord(randomWord){
    //Replace each letter of word with '_'
    for (var i = 0; i<randomWord.length; i++) {
      // console.log(randomWord) <- Reference hidden word
      let char = document.createElement("span"); //create empty <span> for each letter in the word
      char.className = "char"; //span class name ".char"
      
      //Do not count a space as a letter
      if (randomWord[i] === " "){
        char.innerHTML = " ";
      } else {
        char.innerHTML = "_ ";
      }
      secretWord.append(char); //append each char to secretWord const (line 6)
    }
  }

////

// create alphabet buttons
const btn = document.querySelector('#btn')
let clickCount = 0
function handleBtnClick(e){
if (clickCount > 5) {
    btn.setAttribute("disabled", true)
}
    clickCount++
}

btn.addEventListener('click', handleBtnClick)

////

getRandomWord()