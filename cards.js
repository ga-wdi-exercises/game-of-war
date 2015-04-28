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

function buildDeck(){
  var deck = [];
  for (var value_key = 0; value_key < values.length; value_key++) {
    for (var suit_key = 0; suit_key < suits.length; suit_key++) {
      var card = {
        value: values[value_key], 
        suit: suits[suit_key], 
        rank: value_key,
        // display: function() {return this.value + ":" + this.suit;}
      };
      deck.push(card);
    }
  }

  return deck;
// Put some code in here!
}

// console.log(buildDeck());
function highCard(card1, card2) {
  console.log("Player 1: " + card1.value + ":" + card1.suit)
  console.log("Player 2: " + card2.value + ":" + card2.suit) 
  if (card1.rank > card2.rank) {
    console.log("Player 1 wins!")
  }else if (card1.rank === card2.rank) {
    console.log("It's a tie!")
  }else {
    console.log("Player 2 wins!")
  }
}




var deck = buildDeck();
console.log(deck);
var shuffled_deck = shuffle(deck);

highCard(shuffled_deck[0], shuffled_deck[1])

// test Ace of Spades vs. Ace of Hearts 
// function highCard(deck) {
//   var player1= deck[0];
//   var player2= deck[1];
//   console.log("Player 1: " + player1.value)
//   console.log("Player 2: " + player2.value)
//   if (player1.rank > player2.rank) {
//     console.log("Player 1 wins!")
//   }else if (player1.rank === player2.rank) {
//     console.log("It's a tie!")
//   }else {
//     console.log("Player 2 wins!")

