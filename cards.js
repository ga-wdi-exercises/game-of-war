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
  for(i=0; i<values.length; i++){
    for(j=0; j<suits.length; j++){
      var card = {
        value: values[i],
        suit: suits[j],
        rank: i
        }
      deck.push(card);
    }
  }

  return deck;
// Put some code in here!

}

console.log(buildDeck(values, suits));

console.log(shuffle(buildDeck(values, suits)));




function high_card(){
  var shuffledDeck = shuffle(buildDeck(values, suits));
  var player1Card = {
    suit: shuffledDeck[0]["suit"],
    value: shuffledDeck[0]["value"],
    rank: shuffledDeck[0]["rank"]
  }
  var player2Card = {
    suit: shuffledDeck[1]["suit"],
    value: shuffledDeck[1]["value"],
    rank: shuffledDeck[1]["rank"]
  }
  console.log("Player one is dealt a " + player1Card.value + " of " + player1Card.suit);
  console.log("Player two is dealt a " + player2Card.value + " of " + player2Card.suit);

  if (player1Card.rank === player2Card.rank) {
    console.log("It's a tie");
  }else if (player1Card.rank > player2Card.rank) {
    console.log("Player one wins");
  }else if (player1Card.rank < player2Card.rank) {
    console.log("Player two wins");
  }

}

high_card();

function gameOfWar(){
  var startDeck = shuffle(buildDeck(values, suits)));
  var player1Hand = startDeck.splice(0,24);
  var player2Hand = startDeck.splice(24);

  var round = {
    player1Hand
  }



}
