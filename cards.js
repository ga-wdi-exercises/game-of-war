var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var deck = [];

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

function convertCardValues(card) {
 // goal: take a card value and return a number for comparison later in highcard()
 if (card === "J") {
   return 11;
 } else if (card === "Q") {
   return 12;
 } else if (card === "K") {
   return 13;
 } else if (card === "A") {
   return 14;
 } else {
   return card;
 }
};

function buildDeck(){
  for(var i = 0; i < suits.length; i++){
 for(var x = 0; x < values.length; x++){
     // { suit: "Spades", value: "A"}
     deck.push({
       suit: suits[i],
       value: values[x],
       numericValue: convertCardValues(values[x]),
       display: function () {
         return this.suit + " " + this.value;
       }
     });
   }
 }
   return deck;
}

function highcard() {
 var player1Card = deck.pop();
 var player2Card = deck.pop();
 console.log("Player 1 draws: " + player1Card.display() + ' ' + "Player 2 draws: " + player2Card.display());

 if (player1Card.numericValue > player2Card.numericValue) {
   console.log('Player 1 wins ' + player1Card.display() + "!");
 } else if (player2Card.numericValue > player1Card.numericValue) {
   console.log('Player 2 wins ' + player2Card.display() + "!");
 } else {
   console.log('Player 1 and Player 2 tie!');
 }

}

buildDeck();

shuffle(deck);

highcard();
