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


function dealCard(){
  return shuffledDeck.pop();
}

function showDeck(deck){
  for (i in deck){
    console.log(deck[i]);
  }
}

function showCard(player){
  console.log(player.number + " of " + player.suit)
}

function highCard(card1, card2) {

  if (card1.rank > card2.rank) {
    console.log("PLAYER 1 WINS THIS ROUND\n")
    player1Deck = player1Deck.concat(pot);
    pot = []
  }
  else if (card1.rank < card2.rank){
    console.log("PLAYER 2 WINS THIS ROUND\n")
    player2Deck = player2Deck.concat(pot);
    pot = []
  }
  else {
    console.log("Players tie this round!")

    if (player1Deck.length >= 3 && player2Deck.length >= 3) {
      //If both players have 3 or more cards, go to a tiebreaker
      for(var i = 0; i < 3; i++){
        player1Card = player1Deck.pop();
        pot.push(player1Card)

        player2Card = player2Deck.pop();
        pot.push(player2Card)
      }
      console.log("Player 1's Card is:")
      showCard(player1Card)

      console.log("Player 2's Card is:")
      showCard(player2Card)

      highCard(player1Card, player2Card)
    }
    else{
      //If there aren't enough cards for a tiebreaker, the player with the most cards wins
      if(player1Deck.length > player2Deck.length){
        console.log("Player 2 has no more cards.\n----PLAYER 1 WINS THE GAME!----")
        for (var i = 0; i < player2Deck.length; i++){
          var card = player2Deck.pop();
          player1Deck.push(card);
        }
      }
      else{
        console.log("Player 1 has no more cards.\n----PLAYER 2 WINS THE GAME!----")
        for (var i = 0; i <= player1Deck.length; i++){
          var card = player1Deck.pop();
          player2Deck.push(card);
        }

      }
    }
  }
}


// Build a deck
gameDeck = buildDeck();

// Shuffle deck
shuffledDeck = shuffle(gameDeck)

// Give each player 26 cards
var player1Deck = []
var player2Deck = []
for(var i = 0; i <26; i++){
  player1Deck.push(dealCard());
  player2Deck.push(dealCard());
}

pot = []
while (player1Deck.length > 0 && player2Deck.length > 0) {

  console.log("Player 1 has " + player1Deck.length + " cards.")
  var player1Card = player1Deck.pop();
  pot.push(player1Card)
  console.log("Player 1's Card is:")
  showCard(player1Card)

  console.log("Player 2 has " + player2Deck.length + " cards.")
  var player2Card = player2Deck.pop();
  pot.push(player2Card)
  console.log("Player 2's Card is:")
  showCard(player2Card)

  highCard(player1Card, player2Card)
}

if (player1Deck.length === 52) {
  console.log("----PLAYER 1 WINS THE GAME!----")
}
if (player2Deck.length === 52) {
  console.log("----PLAYER 2 WINS THE GAME!----")
}


// PSUEDOCODE
// Build a deck
// Shuffle deck
// 26.times do
//   player one draws a card
//   player two draws a card

// if player1.deck.size > 1 && player2.deck.size > 1
//   call function playHighCard() {
//   Have each player play high card on last card drawn
//
//   If player1 > player2
//     player1 gets player2's card
//   else if player1 < player2
//     player2 gets player1's card
//   else
//     3.times do
//       player1 plays a card
//       player2 plays a card
//       call playHighCard function on last card drawn
// }
// else (if one player has zero cards)
//   if player1.deck.size === 52
//     player1 wins
//   if player2.deck.size === 52
//       player2 wins
