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

function buildDeck(suits, values){
  // make a new deck so that each suit gets one of each card value
  var deck = [];
  for(suit in suits) {
    for(value in values){
      deck.push({suit: suits[suit], value: values[value]});
    }
  }
return deck;
}

var newDeck = buildDeck(suits, values)
var shuffledDeck = shuffle(newDeck)

console.log(shuffledDeck)

function highCard(deck, values) {
  // make the players and give them each a card; player1 gets the first card in the deck array and player 2 gets the second card in the deck array
  var player1 = deck[0];
  var player2 = deck[1];
  console.log("Player 1's card is: " + player1.value + " of " + player1.suit);
  console.log("Player 2's card is: " + player2.value + " of " + player2.suit);
  
  currentGame = [player1, player2];

  if(values.indexOf(player1.value) > values.indexOf(player2.value)) {
    console.log("Player 1 wins!");
  }
  else if(values.indexOf(player1.value) < values.indexOf(player2.value)) {
    console.log("Player 2 wins!");
  }
  else {
    console.log("It's a tie!");
  }
}

var newGame = highCard(shuffledDeck, values);

// 