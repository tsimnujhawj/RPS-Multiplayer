$(document).ready(function() { // DOCUMENT READY OPENING

// Firebase Setup
var config = {
    apiKey: "AIzaSyAtIalmYhTjYuUee4GqA4512Iki_w_S5ks",
    authDomain: "rps-multiplayer-64e5a.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-64e5a.firebaseio.com",
    projectId: "rps-multiplayer-64e5a",
    storageBucket: "",
    messagingSenderId: "350708427703"
  };
  firebase.initializeApp(config);

// Player name variables
// Prompt for testing purposes
var playerNamePick = prompt("What is your name?")
let playerOne = playerNamePick;
let playerTwo = "Player Two"


// Display Player names
  $("#player-one").html(playerOne);
  $("#player-two").html(playerTwo);

}); // DOCUMENT READY CLOSING