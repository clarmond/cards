const Card = require('./Card');

function Deck() {
	this.RANKS = {
		'J': 'Jack',
		'Q': 'Queen',
		'K': 'King',
		'A': 'Ace',
	};

	this.SUITS = {
		'C': 'Clubs',
		'D': 'Diamonds',
		'S': 'Spades',
		'H': 'Hearts',
	};

	this.COLORS = {
		'C': 'Black',
		'D': 'Red',
		'H': 'Red',
		'S': 'Black',
	}

	this.CARD_VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	this.cards = [];
	for (let val = 0; val < this.CARD_VALUES.length; val++) {
		for (const [suitKey, suitValue] of Object.entries(this.SUITS)) {
			const cardValue = this.CARD_VALUES[val];
			const card = new Card(val, cardValue, suitValue, this.COLORS[suitKey]);
			this.cards.push(card);
		}
	}
}

Deck.prototype.getCardAtPosition = function(postion) {
	const card = this.cards[postion];
	this.cards.splice(postion, 1);
	return card;
}

Deck.prototype.shuffle = function() {
	for (let i = this.cards.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * i);
		let temp = this.cards[i];
		this.cards[i] = this.cards[j];
		this.cards[j] = temp;
	}
}

module.exports = Deck;
