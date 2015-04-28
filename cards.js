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
    for (var j = 0; j < values.length; j++) {
      var card = {suit: suits[i], value: values[j], rank: j}; 
      deck.push(card);
    }
  }
  return deck;
}


function highCard(deck) {
  var player1 = deck[0];
  var player2 = deck[1];
  console.log("Player1's card = " + player1.value)
  console.log("Player2's card = " + player2.value)
  if (player1.rank > player2.rank) {
    console.log("Player1 wins!");
  }
  else if (player1.rank === player2.rank) {
    console.log("It's a tie!");
  }
  else {
    console.log("Player2 wins!");
  }
}
var deck = buildDeck();
console.log(deck);
highCard(shuffle(deck))