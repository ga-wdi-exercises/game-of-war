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
  new_deck = []
  var rankCounter = 0
  for (valueIndex in values) {
    for (suitIndex in suits) {
      new_deck.push({number:values[valueIndex], suit:suits[suitIndex], rank:rankCounter});
    }
    rankCounter++;
  }
  return new_deck;
}


function highCard(){
  var player1 = dealCard();
  console.log("Player 1's Card is:")
  showPlayersCard(player1)

  var player2 = dealCard();
  console.log("Player 2's Card is:")
  showPlayersCard(player2)

  if (player1.rank > player2.rank) {
    console.log("Player 1 wins")
  }
  else if (player1.rank < player2.rank){
    console.log("Player 2 wins")
  }
  else {
    console.log("Players tie!")
  }
}

function dealCard(){
  return shuffledDeck.pop();
}

function showDeck(deck){
  for (i in deck){
    console.log(deck[i]);
  }
}

function showPlayersCard(player){
  console.log(player.number + " of " + player.suit)
}




deck = buildDeck();
shuffledDeck = shuffle(deck)
highCard();
