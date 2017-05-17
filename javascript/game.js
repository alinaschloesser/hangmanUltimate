var wordList = ['word', 'letters', 'strings', 'things'];
var missedLetters = [];
var lettersGuessed = [];

var dashes = [];
var wins = 0;
var losses = 0;
var guesses = 6;
var gamesPlayed = 0;
var word = wordList[gamesPlayed];
var letters = word.split("");



for (var i = 0; i < wordList[gamesPlayed].length; i++) {

    dashes.push("_");

}

console.log(letters);




document.onkeyup = function userInput() {
    var userGuess = event.key;

}
