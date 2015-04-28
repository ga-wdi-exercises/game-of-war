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

// Put some code in here!
var deck = [];
function buildDeck(){
var deck =[];
// Put some code in here!
  for(var i = 0;i < suits.length;i++){
    for(var j = 0; j < values.length;j++){
      var card = {value:values[j],suit:suits[i]};
      deck.push(card);
    }
  }
  return deck;
}

// for(1, 2, 4)
// {
//   3
// }
deck = shuffle(buildDeck());
console.log(deck);

function drawDeck(deck){

  var card1 = deck.pop();
  console.log(card1.value);
  var card2 = deck.pop();
  console.log(card2.value);
  // values.indexOf(card1.value) > values.indexOf(card2.value);



  var player1 = values.indexOf(card1.value);
  var player2 = values.indexOf(card2.value);
console.log("This is player 1" + player1);
  if (player1 > player2)
  {
    console.log("player1 card = "+card1.value );
    console.log("player2 card = "+card2.value );
    console.log("player1 wins");
  }
  else if (player1 < player2)
  {
    console.log("player1 card = "+card1.value );
    console.log("player2 card = "+card2.value );
    console.log("player2 wins");
  }
  if (player1 == player2)
  {
    console.log("player1 card = "+card1.value );
    console.log("player2 card = "+card2.value );
    console.log("tie");
  }
}

drawDeck(deck);
// deck=[];
// function each (values, suits, fxn) {
//   for(var i in values) {
//     fxn(values[i]);
//   }
//   for(var i in suits) {
//     fxn(suits[i]);
//   }
// }
//
// function buildDeck() {
//   var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
//   var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
//   var combineElements = function() {
//     card = (values+" "+ suites);
//     console.log(card)
//   }
//   each([2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"], ["Clubs", "Diamonds", "Hearts", "Spades"], combineElements)
// }
