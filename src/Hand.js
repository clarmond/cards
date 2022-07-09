function Hand() {
	this.cards = [];
}

Hand.prototype.addCard = function(Card) {
	this.cards.push(Card);
}

Hand.prototype.getCard = function(position) {
	return this.cards[position];
}

Hand.prototype.getHighestCard = function() {
	let highestCard = this.cards[0];
	for (let i = 1; i < this.cards.length; i++) {
		const currentCard = this.cards[i];
		if (currentCard.numericRank > highestCard.numericRank) {
			highestCard = currentCard;
		}
	}
	return highestCard;
}

Hand.prototype.size = function() {
	return this.cards.length;
}

module.exports = Hand;
