
const SUITS = ["♠", "♣", "♥", "♦"] 
const VALUES = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ]


class Deck {
    constructor(cards = deckOfCards()) {
        this.cards = cards;
    }

get numberOfCards(){
    return this.cards.length;
}

// function to shuffle the deck
shuffleDeck(){
    for (let i = this.numberOfCards - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * ( i + 1 ));
        const oldValue = this.cards[newIndex];
        this.cards[newIndex] = this.cards[i];
        this.cards[i] = oldValue
    }
}
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
//  creates deck of cards
function deckOfCards() {
    return SUITS.flatMap(suit => {   // flatMap turns an array of arrays into a single array
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

const deck = new Deck()
deck.shuffleDeck();
console.log(deck.cards)

