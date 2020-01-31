let cards = ["Queen", "Queen", "King", "King"];
// The user's current selection/hand
let cardsInPlay = [];
// 
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);

/*
 Updates to game logic:

1) Create func to store steps for selecting a card
** When a card is selected by user, that card 
is added to add array cardsInPlay.

2) New func to group together the logic 
checking for card match. This will prompt the
results to user.
*/
