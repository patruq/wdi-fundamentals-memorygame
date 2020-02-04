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



function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	};
}



function flipCard() {
	// Store "data-id" in cardId
	let cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	// Set the clicked card img to correct img src
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
}



function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	};
}

createBoard();

// let resentEvent = document.getElementById("resetButton");
// resetEvent.addEventListener


/*
	Add HTML button
	Style with CSS
	Create event in JS file that resets game after
		playing (when button clicked)
	-----
	Create a clearBoard function
	Then call createBoard
	call cardElement and correct img, don't call flipboard?
	Embed createBoard() into new function?
*/