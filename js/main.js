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
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("No Match! Sorry, try again");
	}
}

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		setTimeout(checkForMatch, 500);
	}
}

var createBoard = function () {
	for (var i = 0; i <= 3; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

var resetBoard = function () {
	for (var i = 0; i <= 3; i++) {
		var cardElement = document.querySelectorAll("[data-id='"+i+"']")[0];
		console.log(cardElement);
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.addEventListener('click', flipCard);
		cardsInPlay = [];
	}
}

document.getElementsByClassName("reset-button")[0].addEventListener('click', resetBoard);

createBoard();