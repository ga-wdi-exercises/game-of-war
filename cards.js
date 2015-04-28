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
// Put some code in here!
deck =[]
for(var v = 0; v < values.length; v++){
  for(var s = 0; s < suits.length; s++){
    val = values[v];
    suit = suits[s];
      var card = {
        cardface: val + " of " + suit,
        value: val,
        suit: suit,
        strength: v
    }

    deck.push(card);
    }
  }
  return deck;
}
gameDeck = buildDeck(values, suits);
  shuffle(gameDeck);
  for(card in deck){
 
  }

var player1 = gameDeck[0];
  
var player2 = gameDeck[1];

console.log("Player 1: " + player1.cardface)
console.log("Player 2: " + player2.cardface)


if (player1.strength > player2.strength){
  console.log("Player 1 wins with a " + player1.cardface)
} else if (player2.strength > player1.strength){
  console.log("Player 2 wins with a " + player2.cardface)
} else {
  console.log("It's a tie!!!")
}


