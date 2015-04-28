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

function buildDeck(values, suits){
  var deck = [];
      for( var suitIndex = 0; suitIndex < suits.length; suitIndex++ ) {
      for( var valueIndex = 0; valueIndex < values.length; valueIndex++ ) {
        cardValue = values[valueIndex];
        cardSuit = suits[suitIndex];
        newCard =  {
          cardSuit: cardSuit,
          cardValue: cardValue,
        // n+1
        }
        deck.push(newCard)
      }
   }
  return deck;
}

var deck = buildDeck(values, suits);
console.log(deck);
console.log("*******************************")

var shuffledDeck = shuffle(deck);
console.log(shuffledDeck);
console.log("*******************************")

var player1Card = shuffledDeck.pop()
console.log(player1Card)
console.log("*******************************")

//console.log(shuffledDeck.slice(26))
//console.log(shuffledDeck.pop());

var player2Card = shuffledDeck.pop()
console.log(player2Card)
console.log("*******************************")

function highCard(cardValue){
  if (player2Card > player1Card){
    return true;
  } else {
    return false;
  }
}
