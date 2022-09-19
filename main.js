
const playerOneDeckElement = document.querySelector('.player1-deck');
const playerTwoDeckElement = document.querySelector('.player2-deck');
const player1Cardhand = document.querySelector('.player1-cardhand');
const player2Cardhand = document.querySelector('.player2-cardhand');
const playGameButton = document.querySelector('.deal-button');
const newGameButton = document.querySelector('.newgame-btn');
const gameTitle = document.querySelector('.game-title');



const SUITS = ["♠", "♣", "♥", "♦"] 
const VALUES = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ]


const CARD_VALUES_MAP = {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,

}

class Deck {
    constructor(cards = deckOfCards()) {
        this.cards = cards;
    }

get numberOfCards(){
    return this.cards.length;
}


pop() {
    return this.cards.shift();
}

push(card) {
    this.cards.push(card)
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

// function getColor(){
//     return this.suit === "♣" || this.suit === "♠" ? "black" : "red";
// }

// function getHTML() {
//     const cardDiv = document.createElement('div');
//     cardDiv.innerText = this.suit;
//     cardDiv.classList.add('card', this.color);
//     cardDiv.dataset.value = `${this.value} ${this.suit}`;
//     return cardDiv;
// }

//  creates deck of cards
function deckOfCards() {
    return SUITS.flatMap(suit => {   // flatMap turns an array of arrays into a single array
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

let playerOneDeck, playerTwoDeck, inGame; 
 

playGameButton.addEventListener('click', () => {
    if (inGame) {
        beforeRound()
    } else {
        flipCards()
    }
})

    

startGame() 
    function startGame() {
        const deck = new Deck();
        deck.shuffleDeck();

        //splits deck between the two players
        const deckMidCheckpoint = Math.ceil(deck.numberOfCards / 2); //
        playerOneDeck = new Deck(deck.cards.slice( 0, deckMidCheckpoint));
        playerTwoDeck = new Deck(deck.cards.slice(deckMidCheckpoint, deck.numberOfCards));
        inGame = false;

        beforeRound()
    }

function beforeRound() {
    inGame = false; 
    player1Cardhand.innerHTML = '';
    player2Cardhand.innerHTML = '';
    // gameTitle.innerText = '';
 

    updateDeckCount()
}

function flipCards(){
     inGame = true;

     const player1Card = playerOneDeck.pop();
     const player2Card = playerTwoDeck.pop();

     player1Cardhand.appendChild(player1Card.getHTML());
     player2Cardhand.appendChild(player2Card.getHTML());


    updateDeckCount()
    
}

function updateDeckCount() {
    playerOneDeckElement.innerText = playerOneDeck.numberOfCards;
    playerTwoDeckElement.innerText = playerTwoDeck.numberOfCards; 
}

function roundWinner(cardOne, cardTwo) {
    return CARD_VALUES_MAP[cardOne.value] > CARD_VALUES_MAP[cardTwo.value]
}
    
 function updateCardHand () {
    player1Cardhand.innerHTML = `${this.player1Cardhand.value}${this.player1Cardhand.suit}`;
    player2Cardhand.innerHTML = `${this.player2Cardhand.value}${this.player2Cardhand.suit}`;
  };