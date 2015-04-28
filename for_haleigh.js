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

function each (array1, array2, fxn) {
  for(var i in array1) {
    console.log("first =" + i);
    fxn(array1[i]);
  }
  for(var i in array2) {
    console.log("second =" + i);
    fxn(array2[i]);
  }
}
//
// function buildDeck() {
//   var combineElements = function(suits) {
//     console.log(values + suits)
//   }
//   each(values), suits, combineElements);
// }
var deck = [];
var card = {suit:0,value:0};
for(var i =0;i<(values.length*suits.length);i++){
deck.push(card);
}

function buildDeck(){


  var combinElements = function(a_value){
    var suit_passed = (suits.indexOf(a_value) >= 0)&&!(values.indexOf(a_value) >=0);
    console.log(suit_passed);
    var value_passed = (values.indexOf(a_value) >= 0)&&!(suits.indexOf(a_value) >= 0);
    console.log(value_passed);

    if (suit_passed){
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      console.log("a_value is = "+a_value);
        var start = (suits.indexOf(a_value));
        console.log("start is "+start);
        for(var i = start*13;i < (start*13+13);i++){
          // console.log("card suit before is = " +deck[i].suit);
          console.log("a_value = "+ a_value);
          console.log("i is "+i);
          console.log(deck[i].suit);
          deck[i].suit = a_value;
          console.log("card suit is = " +deck[i].suit);
          console.log("===============================================");
        }
      }

      else {
        console.log("############################################");
      // else if (value_passed){
      console.log("Deck length is = "+deck.length);
        var start = (values.indexOf(a_value));
        console.log("index start value is  "+start);
        for(var i = start;i < deck.length;i+=13){
          console.log("i is "+i);
          console.log("card value before is = " +deck[i].value);
          console.log("card suit before is = " +deck[i].suit);
          console.log("a_value = "+ a_value);

          deck[i].value = a_value;
          console.log("card after value is = " +deck[i].value);
          console.log("===============================================");
        }
      }
    }
    each(suits, values, combinElements);
    console.log(deck);
}
buildDeck();

// Put some code in here!
// var deck = [];
// function buildDeck1(){
// var deck =[];
// // Put some code in here!
//   for(var i = 0;i < suits.length;i++){
//     for(var j = 0; j < values.length;j++){
//       var card = {value:values[j],suit:suits[i]};
//       deck.push(card);
//     }
//   }
//   return deck;
// }

// for(1, 2, 4)
// {
//   3
// }
// deck = shuffle(buildDeck());
// console.log(deck);
//
// function drawDeck(deck){
//
//   var card1 = deck.pop();
//   console.log(card1.value);
//   var card2 = deck.pop();
//   console.log(card2.value);
//   // values.indexOf(card1.value) > values.indexOf(card2.value);
//
//
//
//   var player1 = values.indexOf(card1.value);
//   var player2 = values.indexOf(card2.value);
// console.log("This is player 1" + player1);
//   if (player1 > player2)
//   {
//     console.log("player1 card = "+card1.value );
//     console.log("player2 card = "+card2.value );
//     console.log("player1 wins");
//   }
//   else if (player1 < player2)
//   {
//     console.log("player1 card = "+card1.value );
//     console.log("player2 card = "+card2.value );
//     console.log("player2 wins");
//   }
//   if (player1 == player2)
//   {
//     console.log("player1 card = "+card1.value );
//     console.log("player2 card = "+card2.value );
//     console.log("tie");
//   }
// }
//
// drawDeck(deck);
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
