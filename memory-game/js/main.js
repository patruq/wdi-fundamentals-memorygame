// Test JS in Br
// console.log("Up and running!");

// let cardOne = "Queen";
// let cardTwo = "Queen";
// let cardThree = "King";
// let cardFour = "King";
// ^^ told to delete via exercise ^^

// Test JS in Br
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

let cards = ["Queen", "Queen", "King", "King"];
// The user's current selection/hand
let cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[2];

// Prompt for user pick 1
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

// Prompt for user pick 2
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

// Check if user has selected 2 cards
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}