console.log("JS file is connected to HTML! Woo!")


var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

var createCards = function(gameBoard) {


for (i = 0; i < 4; i++) {
	var newCards = document.createElement('div');
	newCards.setAttribute('class', 'card');
	gameBoard.appendChild(newCards);
}

};

createCards(gameBoard);

var createBoard = function() {
for (i = 0; i < cards.length; i++) {
	document.querySelectorAll('.card')[i].setAttribute('data-card', cards[i]);
	document.querySelectorAll('.card')[i].addEventListener('click', isTwoCards)
}
}

createBoard();

//var isTwoCards = function() {
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this pre-work, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  	if (cardsInPlay[0]) {
  		if (cardsInPlay[0] === 'queen') {
  			this.innerHTML = '<img src="queen-157645_640.png" alt="Queen of Hearts" />';
  		}
  		else {
  			this.innerHTML = '<img src="king-157649_640.png" alt="King of Hearts" />';
  		}
  	}

  	if (cardsInPlay[1]) {
  		if (cardsInPlay[1] === 'queen') {
  			this.innerHTML = '<img src="queen-157645_640.png" alt="Queen of Hearts" />';
  		}
  		else {
  			this.innerHTML = '<img src="king-157649_640.png" alt="King of Hearts" />';
  		}
  	}



  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch();

    // clear cards in play array for your next try
    cardsInPlay = [];

  }

}

var isMatch = function() {

	setTimeout(function() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}

	//remove all inner HTML to reset
		for (i=0; i<cardsInPlay.length; i++) {
		document.querySelectorAll('.card')[i].innerHTML = "";
	}
	}, 1000);

}



// BUGS: second card appears after alert, not before
// User can just pick the same card twice, like a nerd
// CSS of img

