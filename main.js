const playerOneDeckElement = document.querySelector(".player1-deck");
const playerTwoDeckElement = document.querySelector(".player2-deck");
const player1Cardhand = document.querySelector(".player1-cardhand");
const player2Cardhand = document.querySelector(".player2-cardhand");
const playGameButton = document.querySelector(".deal-button");
const newGameButton = document.querySelector(".newgame-btn");
const gameTitle = document.querySelector(".game-title");
const gameText = document.querySelector(".text");

const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const CARD_VALUES_MAP = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

// class Deck {
//   constructor(cards = deckOfCards()) {
//     this.cards = cards;
//   }

//   get numberOfCards() {
//     return this.cards.length;
//   }

//   pop() {
//     return this.cards.shift();
//   }

//   push(card) {
//     this.cards.push(card);
//   }

//   // function to shuffle the deck
//   shuffleDeck() {
//     for (let i = this.numberOfCards - 1; i > 0; i--) {
//       const newIndex = Math.floor(Math.random() * (i + 1));
//       const oldValue = this.cards[newIndex];
//       this.cards[newIndex] = this.cards[i];
//       this.cards[i] = oldValue;
//     }
//     console.log('Corey\'s deck of cards', this.cards);
//   }
// }

// class Card {
//   constructor(suit, value) {
//     this.suit = suit;
//     this.value = value;
//   }
// }

// // function getColor(){
// //     return this.suit === "♣" || this.suit === "♠" ? "black" : "red";
// // }

// // function getHTML() {
// //     const cardDiv = document.createElement('div');
// //     cardDiv.innerText = this.suit;
// //     cardDiv.classList.add('card', this.color);
// //     cardDiv.dataset.value = `${this.value} ${this.suit}`;
// //     return cardDiv;
// // }

// //  creates deck of cards
// function deckOfCards() {
//   return SUITS.flatMap((suit) => {
//     // flatMap turns an array of arrays into a single array
//     return VALUES.map((value) => {
//       return new Card(suit, value);
//     });
//   });
// }

// let playerOneDeck, playerTwoDeck, inGame;

// let compHand = [];
// let warArray = [];

// playGameButton.addEventListener("click", () => {
//   if (inGame) {
//     beforeRound();
//   } else {
//     flipCards();
//   }
// });

// newGameButton.addEventListener("click", () => {
//   return beforeRound();
// });

// startGame();
// function startGame() {
//   const deck = new Deck();
//   deck.shuffleDeck();

//   //splits deck between the two players
//   const deckMidCheckpoint = Math.ceil(deck.numberOfCards / 2); //
//   playerOneDeck = new Deck(deck.cards.slice(0, deckMidCheckpoint));
//   playerTwoDeck = new Deck(
//     deck.cards.slice(deckMidCheckpoint, deck.numberOfCards)
//   );
//   inGame = false;

//   beforeRound();
// }

// function beforeRound() {
//   inGame = false;
//   player1Cardhand.innerHTML = "";
//   player2Cardhand.innerHTML = "";
//   // gameTitle.innerText = '';

//   updateDeckCount();
// }

// function flipCards() {
//   inGame = true;

//   const player1Card = playerOneDeck.pop();
//   const player2Card = playerTwoDeck.pop();
//   //  console.log(playerOneDeck.cards[0].value);

//   player1Cardhand.innerHTML = `${player1Card.value}${player1Card.suit}`;
//   player2Cardhand.innerHTML = `${player2Card.value}${player2Card.suit}`;

//   if (roundWinner(player1Card, player2Card)) {
//     gameText.innerText = "Player 1 Wins!";
//     playerOneDeck.push(player1Card);
//     playerOneDeck.push(player2Card);
//   } else if (roundWinner(player2Card, player1Card)) {
//     gameText.innerText = "Player 2 Wins!";
//     playerTwoDeck.push(player2Card);
//     playerTwoDeck.push(player1Card);
//   } else {
//     gameText.innerText = "Time for War!";
//     // playerOneDeck.push(player1Card);
//     // playerTwoDeck.push(player2Card);
//   }
// }

// function updateDeckCount() {
//   playerOneDeckElement.innerText = playerOneDeck.numberOfCards;
//   playerTwoDeckElement.innerText = playerTwoDeck.numberOfCards;
// }

// function roundWinner(cardOne, cardTwo) {
//   return CARD_VALUES_MAP[cardOne.value] > CARD_VALUES_MAP[cardTwo.value];
// }

// function gameOver(deck) {
//   return deck.numberOfCards === 0;
// }

// function warToArray() {
//   var length = 0;

//   //if not able to draw 4 cards, draw as many as possible
//   if (playerOneDeck.length < 4 || playerTwoDeck.length < 5) {
//     //if player 2 has less than 4 cards
//     if (playerOneDeck.length > playerTwoDeck.length) {
//       length = player2Cardhand.length - 1;
//     }

//     //if the player hand has less than 4 cards
//     else if (playerOneDeck.length < playerTwoDeck.length) {
//       length = player1Cardhand.length - 1;
//     }
//   }

//   //if both decks have greater than or equal to four cards
//   else {
//     length = 3;
//   }

//   //take the cards from each deck and push them to the war array
//   for (var i = 0; i < length; i++) {
//     warArray.push(playerOneDeck[0]);
//     playerOneDeck.shift();
//     warArray.push(playerTwoDeck[0]);
//     playerTwoDeck.shift();
//   }

//   // warArray = warArray[ ...warArray, playerOneDeck.splice(-3, 3)]
// }

// console.log(playerOneDeck.shift());

// // function warTie() {
// //     warPot.push(player1Card);
// //     warPot.push(player2Card);

// //   warCards1 = player1Card.splice(player1Card.length - 3);
// //   warCards2 = player2Card.splice(player2Card.length - 3);

// //   warPot.push(...warCards1);
// //   warPot.push(...warCards2);

// //   console.log(warPot);
// //   isWar = true;

// // }

// //  function updateCardHand () {
// //     player1Cardhand.innerHTML = `${this.player1Cardhand.value}${this.player1Cardhand.suit}`;
// //     player2Cardhand.innerHTML = `${this.player2Cardhand.value}${this.player2Cardhand.suit}`;
// //   };

/////////////////////////////////////////////////////////////////////////////////////////////////////// COREY'S OG CODE ABOVE

function Card({suite, value}) {
    this.suite = suite;
    this.value = value;
}

Card.prototype.getDescription = function() {
    console.log(`Player drew a ${CARD_VALUES_MAP[this.value]} of ${SUITS[this.suite]}.`);
}

function Deck() {
    this.cards = [];
    for(let i = 0; i < 4; i++){
        for(let j = 2; j < 15; j++){
            this.cards.push(new Card({value: j, suite: i}))
        }
    }
}

function Player({name}) {
    this.name = name;
    this.hand = [];
}

function Game() {
    this.player1 = new Player({name: 'Corey'});
    this.player2 = new Player({name: 'James'});
    this.deck = new Deck();
    this.pot = [];
}

Game.prototype.shuffle = function() {
    for (let i = this.deck.cards.length - 1; i > 0; i--) {
        const newIndex = Math.floor(Math.random() * ( i + 1 ));
        const oldValue = this.deck.cards[newIndex];
        this.deck.cards[newIndex] = this.deck.cards[i];
        this.deck.cards[i] = oldValue
    }
}

Game.prototype.deal = function() {
    this.player1.hand = this.deck.cards.filter((card, index) => index % 2 === 0);
    this.player2.hand = this.deck.cards.filter((card, index) => index % 2 !== 0);
}

Game.prototype.compare = function () {
  if(this.player1.flipCard.value > this.player2.flipCard.value) {
    this.player1.hand = [...this.pot, ...this.player1.hand];
  } else if (this.player1.flipCard.value < this.player2.flipCard.value) {
    this.player2.hand = [...this.pot, ...this.player2.hand];
  } else if (this.player1.flipCard.value === this.player2.flipCard.value) {
    this.pot = [this.player1.hand.splice(0, 3), this.player2.hand.splice(0, 3), ...this.pot];
  }
  this.draw();
}

Game.prototype.draw = function () {
    this.player1.flipCard = this.player1.hand.splice(0,1);
    this.player2.flipCard = this.player2.hand.splice(0, 1);
    this.pot = [this.player1.flipCard, this.player2.flipCard, ...pot]
    this.compare();
}

Game.prototype.play = function() {
    this.shuffle();
    this.deal();
}

const game = new Game();
game.play();
