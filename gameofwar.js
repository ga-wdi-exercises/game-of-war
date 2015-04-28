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
  function buildDeck(){
  var deck = []

  for (i = 0; i < values.length; i++) {
    for (j = 0; j < suits.length; j++) {
      var card = {value: values[i], suit: suits[j]};
      deck.push(card);
    }
  }

  return(deck);
}

function cardRank(card){
  var cardvalue = card.value;
  var rank = values.indexOf(cardvalue);
  return(rank);
}

//console.log(buildDeck());

function highCard(player1, player2){
  var shuffledDeck = shuffle(buildDeck());
  player1Card = "the " + shuffledDeck[0].value + " of " + shuffledDeck[0].suit;
  player2Card = "the " + shuffledDeck[1].value + " of " + shuffledDeck[1].suit;
  console.log(player1 + " got " + player1Card);
  console.log(player2 + " got " + player2Card);
  player1Rank = cardRank(shuffledDeck[0]);
  player2Rank = cardRank(shuffledDeck[1]);

  if (player1Rank === player2Rank){
    console.log("It's a tie!");
  } else if (player1Rank > player2Rank){
    console.log(player1 + " wins!");
  } else {
    console.log(player2 + " wins!");
  }

}


}
