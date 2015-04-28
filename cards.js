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
    for (i = 0; i < values.length; i++){
      newCard = {suit: "Clubs", value: values[i]};
      deck.push(newCard);
      }
    for (i = 0; i < values.length; i++){
      newCard = {suit: "Diamonds", value: values[i]};
      deck.push(newCard);
        }
    for (i = 0; i < values.length; i++){
      newCard = {suit: "Hearts", value: values[i]};
      deck.push(newCard);
        }
    for (i = 0; i < values.length; i++){
      newCard = {suit: "Spades", value: values[i]};
      deck.push(newCard);
        }
  return deck
}

function highCard(){
  shuffledDeck = shuffle(buildDeck());
  var playerOne = shuffledDeck[0];
  var playerTwo = shuffledDeck[1];
  console.log("Player 1 has the " + playerOne["value"] + " of " + playerOne["suit"] + "!");
  console.log("Player 2 has the " + playerTwo["value"] + " of " + playerTwo["suit"] + "!");

  var cardValueOrder = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]

  if (cardValueOrder.indexOf(playerOne["value"]) > cardValueOrder.indexOf(playerTwo["value"])){
      console.log("Player 1 Wins!");
    }
  else if (cardValueOrder.indexOf(playerOne["value"]) < cardValueOrder.indexOf(playerTwo["value"])){
      console.log("Player 2 Wins!");
    }
  else {
    console.log("It's a tie!");
  }

}


highCard();
