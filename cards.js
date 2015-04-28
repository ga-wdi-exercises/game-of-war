//
// This may look familiar...
//
// Write all your code in the existing cards.js file. Javascript doesn't natively have an array-shuffling method, unlike Ruby, so one has been included for you.
//
// First, modify the build_deck function so that it returns a complete deck of cards.
//
// Then, modify the high_card function so that it deals two players a card from the top of a shuffled deck. The computer should be playing against itself since, also unlike Ruby, Node doesn't have an built-in way of getting user input.
//
// Print out to the console the two cards, and which player had the higher card (or if it was a tie).


var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

function shuffle(array){
  var currentIndex = array.length;
  var randomIndex;
  var temporaryValue;
  while(currentIndex > 0){
    randomIndex   = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue       = array[currentIndex];
    array[currentIndex]  = array[randomIndex];
    array[randomIndex]   = temporaryValue;
  }
  return array;
}

var deck = []
function buildDeck(suits, values){
  for(var index_v in values){
    for(var index_s in suits){
      var card = {suit: suits[index_s], value: values[index_v]};
      deck.push(card);
    }
  }
  return deck
}

// split deck between two players
var player1 = []
var player2 = []
function dealCards(deck){
  for(var i=0; i < deck.length; i++){
    if (i % 2 === 0 ){
      player1.push(deck[i]);
    }
    else{
      player2.push(deck[i]);
    }
  }
  return deck
}

//confirm cards are dealt cards out to players
deck = buildDeck(suits, values)
shuffledDeck = shuffle(deck)
dealCards(shuffledDeck)
console.log("Player 1:  ")
console.log(player1)
console.log("Player 2:  ")
console.log(player2)


// // compare cards from two players
// function highCard(cards){
//   for(var card in cards){
//
//   }
// }

// Print out to the console the two cards, and which player had the higher card (or if it was a tie).
