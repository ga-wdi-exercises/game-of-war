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
  var deck=[];
  for(var i = 0; i < values.length; i++){
    for(var j = 0; j < suits.length; j++){
      var temp_hash ={};
      temp_hash = {value: values[i], suit: suits[j], score: i+2};
      deck.push(temp_hash);
    };
  };

// Put some code in here!
return deck;
}

var warDeck = buildDeck();
var shuffledDeck = shuffle(warDeck);
// console.log(warDeck);

function highCard(deck) {
  var playerOne = deck.pop();
  var playerTwo = deck.pop();
  console.log(playerOne);
  console.log(playerTwo);
  if(playerOne.score > playerTwo.score){
    console.log('player one won!');
  } else if (playerOne.score === playerTwo.score) {
    console.log("Tie");
  } else {
    console.log('player two won!');
  };
}

// highCard(shuffledDeck);

function playWar(deck) {
  var playerOneDeck = [];
  for(var i = 0; i < 26; i++){
    card = deck.pop();
    playerOneDeck.push(card);
  }
  var playerTwoDeck = deck;
  // console.log(playerOneDeck.length);
  // console.log(playerTwoDeck.length);
  while (playerOneDeck.length > 0 || playerTwoDeck.length > 0){
    var playerOneCard = playerOneDeck.shift();
    var playerTwoCard= playerTwoDeck.shift();
    console.log(playerOneCard);
    console.log(playerTwoCard);
    if(playerOneCard.score > playerTwoCard.score){
      console.log('player one won!');
      playerOneDeck.push(playerTwoCard);
    } else if (playerOneCard.score === playerTwoCard.score) {
      console.log("Tie");
    } else {
      console.log('player two won!');
      playerTwoDeck.push(playerOneCard);
    };
  };
}

playWar(shuffledDeck);
