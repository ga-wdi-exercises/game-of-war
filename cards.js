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
  var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

  var deck = new Array();

  var suit, value;
    for (suit = 0; suit < 4; suit++) {
      for (value = 0; value < 13; value++) {
        deck.push({suit: suits[suit], value: values[value]})
      }
    };
   return deck
  };

console.log(buildDeck());


// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// string.indexOf(searchvalue,start)
function highCard() {

  shuffleDeck = shuffle(buildDeck());

// var firstPlayer = shuffleDeck[Math.floor(Math.random()*shuffleDeck.length)]
// var secondPlayer  = shuffleDeck[Math.floor(Math.random()*shuffleDeck.length)]

var firstPlayer = shuffleDeck[5];
var secondPlayer = shuffleDeck[10];

if (values.indexOf(firstPlayer["value"]) > values.indexOf(secondPlayer["value"])) {
 console.log("First player wins with " + firstPlayer["value"] + " of " + firstPlayer["suit"]);
 console.log("Losing Card for Second Player was " + secondPlayer["value"] + " of " + secondPlayer["suit"]);
}
else if (values.indexOf(secondPlayer["value"]) > values.indexOf(firstPlayer["value"])) {
  console.log("Second player wins with " + secondPlayer["value"] + " of " + secondPlayer["suit"]);
  console.log("Losing Card for First Player was " + firstPlayer["value"] + " of " + firstPlayer["suit"]);
}
else {
  console.log("Tie, Try again");
}

};
// console.log(highCard());
highCard();
