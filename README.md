# wdi-fundamentals-memorygame

Some notes on my approach to part 1 of the bonus problem of the pre-work project:
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
	Mess with gameBoard?
	Reset all global variables?
	function resetEvent() {
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
	let cardsInPlay = [];
	createBoard();
}