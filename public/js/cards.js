class Card {
	constructor(numericRank, textRank, suit, color, image, faceUp = false) {
		this.numericRank = numericRank;
		this.textRank = textRank;
		this.suit = suit;
		this.color = color;
		this.image = image;
		this.faceUp = faceUp;
	}
}

class Deck {
	RANKS = {
		'J': 'Jack',
		'Q': 'Queen',
		'K': 'King',
		'A': 'Ace',
	};

	SUITS = {
		'C': 'Clubs',
		'D': 'Diamonds',
		'S': 'Spades',
		'H': 'Hearts',
	};

	COLORS = {
		'C': 'Black',
		'D': 'Red',
		'H': 'Red',
		'S': 'Black',
	}

	cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

	constructor(image) {
		this.image = image;
		this.cards = [];
		for (let val = 0; val < this.cardValues.length; val++) {
			for (const [suitKey, suitValue] of Object.entries(this.SUITS)) {
				const cardValue = this.cardValues[val];
				let rankText = cardValue;
				if (val > 8) {
					rankText = this.RANKS[cardValue].toLowerCase();
				}
				const image = `images/fronts/${rankText.toLowerCase()}_of_${suitValue.toLowerCase()}.svg`;
				const card = new Card(val, cardValue, suitKey, this.COLORS[suitKey], image);
				this.cards.push(card);
			}
		}
	}
}

