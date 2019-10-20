console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var matches = 0;
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		matches++;
		//check if all matches found
		if (matches === 2) {
			alert("Another match! Congratulations, you won!");
		} else {
			alert("You found a match!");
		}
	} else {
		alert("Sorry, try again.");
		//reset game board
		document.getElementById('game-board').innerHTML = "";
		createBoard();
	}
	//empty array for next match
	cardsInPlay = [];
}
function flipCard() {
	var cardID = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardID].rank + " of " + cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	this.setAttribute('src', cards[cardID].cardImage);
	//prevent clicking flipped cards
	this.removeEventListener('click', flipCard);
	cardsInPlay.push(cards[cardID].rank);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();
