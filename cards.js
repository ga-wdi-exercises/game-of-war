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
// console.log(warDeck)
var shuffledDeck = shuffle(warDeck)


function highCard(deck) {
  var firstCard = deck[0];  
  var secondCard = deck[1];

  console.log("Computer One has " + firstCard.value + " of " + firstCard.suit)
  console.log("Computer One has " + secondCard.value + " of " + secondCard.suit)
  if (firstCard.score === secondCard.score) {
    console.log("It's a tie!");
  } else if (firstCard.score > secondCard.score) {
    console.log("Computer One wins!")
  } else {
    console.log("Computer Two wins!")
  };
}

highCard(warDeck);





