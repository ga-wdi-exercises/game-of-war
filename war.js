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
  var deckArray = [];

  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < suits.length; j++) {
      var card = {};
      var score = i + 1
      card = {score: score, value: values[i], suit: suits[j]};
      deckArray.push(card);
    };
  };
  return deckArray
}

var warDeck = buildDeck();
var shuffledDeck = shuffle(warDeck)

function warGamePlay(deck) {
  // Split the deck in half, one half to each player

  // Half to player one
  var playerOneCards = []
  for (var i = 0; i <= 25; i++) {
    playerOneCards.push(deck[i])
  };

  // Half to player two
  var playerTwoCards = []
  for (var i = 26; i < 52; i++) {
    playerTwoCards.push(deck[i])
  };

  //
  // Continuous loop through game
  //
  var i = 1
  while (playerOneCards.length > 0 && playerTwoCards.length > 0) {
    console.log("----------------");
    console.log("Round " + i + ":");
    var bounty = []

    console.log("Player One has " + playerOneCards.length + " cards");
    console.log("Player Two has " + playerTwoCards.length + " cards");

  // each player draws a card
    // first card from each deck
    console.log("Player 1: " + playerOneCards[0].value + " of " + playerOneCards[0].suit);
    console.log("Player 2: " + playerTwoCards[0].value + " of " + playerTwoCards[0].suit);

    // Player with the higher card wins

    // if the played cards are the same
    if (playerOneCards[0].score === playerTwoCards[0].score) {
      console.log("WAR!!!!")

      // remove the first card from each player into the bounty
      bounty.push(playerOneCards.shift());
      bounty.push(playerTwoCards.shift());

      // check the third card in each player's hands
      if (playerOneCards[2].score > playerTwoCards[2].score) {

        for (var j = 0; j <= 2; j++) {
          bounty.push(playerOneCards[j]);
        };

        for (var l = 0; l <= 2; l++) {
          bounty.push(playerTwoCards[l]);
        };

        for (var k = 0; k < bounty.length; k++) {
          playerOneCards.push(bounty[k]);
        };
      } else if (playerOneCards[2] < playerTwoCards[2]) {

        for (var j = 0; j <= 2; j++) {
          bounty.push(playerOneCards[j]);
        };

        for (var l = 0; l <= 2; l++) {
          bounty.push(playerTwoCards[l]);
        };

        for (var k = 0; k < bounty.length; k++) {
          playerOneCards.push(bounty[k]);
        };
      };
      
  // if player one has a higher card
    } else if (playerOneCards[0].score > playerTwoCards[0].score) {
      console.log("Player 1 wins");

      // place first card from each player in bounty
      bounty.push(playerOneCards.shift());
      bounty.push(playerTwoCards.shift());

      // add to the bottom of winning players' deck
      for (var k = 0; k < bounty.length; k++) {
        playerOneCards.push(bounty[k]);
      };
  // if player two has a higher card
    } else if (playerOneCards[0].score < playerTwoCards[0].score) {
      console.log("Player 2 wins");

      // place first card from each player in bounty
      bounty.push(playerOneCards.shift());
      bounty.push(playerTwoCards.shift());

      // add to the bottom of winning players' deck
      for (var m = 0; m < bounty.length; m++) {
        playerTwoCards.push(bounty[m]);
      };
    }

  // give each players' score
    console.log("Score is now: Player 1 has " + playerOneCards.length + " cards; Player 2 has " + playerTwoCards.length + " cards");

  // iterate up one
    i ++
  }

  if (playerOneCards.length > 0) {
    console.log("******************")
    console.log("Player One Wins!!!")
    console.log("******************")
  } else{
    console.log("******************")
    console.log("Player Two Wins!!!")
    console.log("******************")
  };

}

warGamePlay(warDeck)



