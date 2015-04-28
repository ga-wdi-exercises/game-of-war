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

function buildDeck(values, suits){
   deck = [];

  for (value in values) {
    for (suit in suits){

  var card = {
             value: values[value],
             suit: suits[suit]
          };
  deck.push(card);
    }
  }
  return deck;
}

var newDeck = buildDeck(values, suits)
var shuffledDeck = shuffle(newDeck)


console.log(shuffledDeck)

//with shuffled deck, pull two cards and determine who wins


function highCard(deck, values) {
  var player1 = deck[0];
  var player2 = deck[1];
  console.log("Player 1 card is: " + player1.value + " of " + player1.suit);
  console.log("Player 2 card is: " + player2.value + " of " + player2.suit);

  currentGame = [player1, player2];

  if(values.indexOf(player1.value) > values.indexOf(player2.value)) {
    console.log("Player 1 wins!");
  }
  else if(values.indexOf(player1.value) < values.indexOf(player2.value)) {
    console.log("Player 2 wins!");
  }
  else {
    console.log("Tie!");
  }
 }

highCard(shuffledDeck, values);
