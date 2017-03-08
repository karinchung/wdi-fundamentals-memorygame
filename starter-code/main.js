console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


/* if/else statement for when two cards are clicked on*/
if (cardTwo === cardFour) {
	alert("Sorry, try again.");
}
else if (cardOne === cardThree) {
	alert("Sorry, try again.");
}
else {
	alert("You found a match!");
}