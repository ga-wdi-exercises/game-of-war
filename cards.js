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
  nuevoDeck = [];
  var cardRank = 0;
  for (valueIndex in values) {
    for (suitIndex in suits) {
      nuevoDeck.push({number:values[valueIndex], suit:suits[suitIndex], rank:cardRank});
    }
    cardRank++;
  }
  return nuevoDeck;
}

function showDeck(deck){
  for (index in deck){
    console.log(deck[index]);
  }
}

function dealCard(){
  return shuffledDeck.pop();
}

function showPlayersCard(player){
  console.log(player.number + " of " + player.suit);
}


function highCard(){
  var player1 = dealCard();
  console.log("Player 1's Card is:");
  showPlayersCard(player1);

  var player2 = dealCard();
  console.log("Player 2's Card is:");
  showPlayersCard(player2);

  if (player1.rank > player2.rank) {
    console.log("Player 1 is the Winner!");
  }

  else if (player1.rank < player2.rank){
    console.log("Player 2 is the Winner!");
  }

  else {
    console.log("Player 1 and Player 2 tie!");
  }

}

deck = buildDeck();

shuffledDeck = shuffle(deck);

showDeck(shuffledDeck);

highCard();
