let cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];
// The user's current selection/hand
let cardsInPlay = [];
// 
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
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
