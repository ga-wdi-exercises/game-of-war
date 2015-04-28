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
for(var i = 0; i < suits.length; i++) {
  for(var j = 0; j < values.length; j++) {
  var card = {suit: suits[i], values: values[j], rank: j};
  deck.push(card);
  }
}
  return deck;
}

// console.log(buildDeck());

deck = buildDeck();
shuffled_deck = shuffle(deck);

function highCard(){
  var player1 = shuffled_deck[0]["rank"]
  var player2 = shuffled_deck[1]["rank"]
  if (player1 > player2 ) {
    console.log("Player 1 wins");
  }
  else if (player1 < player2) {
    console.log("Player 2 wins");
  }
  else if (player1 === player2){
    console.log("It's a tie");  
  }
}

 highCard();

 