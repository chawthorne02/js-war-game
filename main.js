
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

let player1Deck, player2Deck; 

startGame() 
    function startGame(){
        const deck = new Deck();
        deck.shuffleDeck();

        const deckMidCheckpoint = Math.ceil(deck.numberOfCards / 2);
        player1Deck = new Deck(deck.cards.slice( 0, deckMidCheckpoint));
        player2Deck = new Deck(deck.cards.slice(deckMidCheckpoint, deck.numberOfCards));
    }


    const playerOneDeck = document.querySelector('.player1-deck');
    const playerTwoDeck = document.querySelector('.player2-deck');
    const player1Cardhand = document.querySelector('.player1-cardhand');
    const player2Cardhand = document.querySelector('.player2-cardhand');
    const 
    








