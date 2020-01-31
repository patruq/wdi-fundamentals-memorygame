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

/*
 Updates to game logic:

1) Create func to store steps for selecting a card
** When a card is selected by user, that card 
is added to add array cardsInPlay.

2) New func to group together the logic 
checking for card match. This will prompt the
results to user.
*/
