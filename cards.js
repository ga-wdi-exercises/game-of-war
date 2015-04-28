// Make your deck!

// This may look familiar...

// Write all your code in the existing cards.js file. Javascript doesn't natively have an array-shuffling method, unlike Ruby, 
// so one has been included for you.

// First, modify the build_deck function so that it returns a complete deck of cards.

// Then, modify the high_card function so that it deals two players a card from the top of a shuffled deck. 
// The computer should be playing against itself since, also unlike Ruby, Node doesn't have a built-in way of getting user input.

// Print out to the console the two cards, and which player had the higher card (or if it was a tie).


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
  var completeDeck = [];
  for(iV in values) {
    for(iS in suits) {
      completeDeck.push({value: values[iV], suit: suits[iS]});
    }
  }
  return completeDeck;
}

var shuffledDeck = buildDeck();
shuffledDeck = shuffle(shuffledDeck);

function dealCards(valuesArray, shuffledDeckArray) {                // Need to print-to-console 2 cards; and then compare values to determine winner.
  var firstCard = shuffledDeckArray[0];
  var secondCard = shuffledDeckArray[1];

  console.log("The first card is the " + firstCard.value + " of " + firstCard.suit);
  console.log("The second card is the " + secondCard.value + " of " + secondCard.suit);

  if (valuesArray.indexOf(shuffledDeckArray[0]["value"]) > valuesArray.indexOf(shuffledDeckArray[1]["value"]));
    return console.log("First card wins!");
  if (valuesArray.indexOf(shuffledDeckArray[0]["value"]) < valuesArray.indexOf(shuffledDeckArray[1]["value"]));   // use of 'else if' here returns ERROR
    return console.log("Second card wins!");
  if (valuesArray.indexOf(shuffledDeckArray[0]["value"]) === valuesArray.indexOf(shuffledDeckArray[1]["value"]));    // use of 'else' here returns ERROR
    return console.log("It's a tie!");
}


dealCards(values, shuffledDeck);          // call the function in order to instruct the above program to run
























