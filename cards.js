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

  for(var i = 0; i < suits.length; i++) {
    for(var j = 0; j < values.length; j++) {
      var card = {
        suit: suits[i],
        value: values[j],
        numericValue: j + 2
      };
      deck.push(card);
    }
  };

  return deck;
}

function highCard(){
  var shuffled_deck = shuffle(buildDeck());
  var card1 = shuffled_deck.shift();
  var card2 = shuffled_deck.shift();
  console.log("Card 1: " + card1.value + " of " + card1.suit + "\nCard 2: " + card2.value + " of " + card2.suit);
  if (card1.numericValue > card2.numericValue) {
    console.log("Winner: Player 1");
  } else if (card1.numericValue < card2.numericValue) {
    console.log("Winner: Player 2");
  } else {
    console.log("Tie.");
  }
}


function gameOfWar(){
  var shuffled_deck = shuffle(buildDeck());
  var player1Deck = shuffled_deck.slice(0, 26);
  var player2Deck = shuffled_deck.slice(26);
  while (player1Deck.length > 0 && player2Deck.length > 0){
    var card1 = player1Deck.shift();
    var card2 = player2Deck.shift();
    console.log("Card 1: " + card1.value + " of " + card1.suit + "\nCard 2: " + card2.value + " of " + card2.suit);
    if (card1.numericValue > card2.numericValue) {
      player1Deck.push(card1);
      player1Deck.push(card2);
      console.log("Player 1 now has " + player1Deck.length + " cards.")
      console.log("Player 2 now has " + player2Deck.length + " cards.")
    } else if (card1.numericValue < card2.numericValue) {
      player2Deck.push(card2);
      player2Deck.push(card1);
      console.log("Player 1 now has " + player1Deck.length + " cards.")
      console.log("Player 2 now has " + player2Deck.length + " cards.")
    } else if (player1Deck.length > 3 && player2Deck.length > 3) {
      console.log("Tie!")
      player1Deck.unshift(card1);
      player2Deck.unshift(card2);
      card1 = player1Deck[3];
      card2 = player2Deck[3];
      if (card1.numericValue > card2.numericValue){
        for (var i = 0; i < 4; i++) {
          card1 = player1Deck.shift();
          card2 = player2Deck.shift();
          player1Deck.push(card1);
          player1Deck.push(card2);
        };
      } else if (card1.numericValue < card2.numericValue){
        for (var i = 0; i < 4; i++) {
          card1 = player1Deck.shift();
          card2 = player2Deck.shift();
          player2Deck.push(card1);
          player2Deck.push(card2);
        };
      } 
      // If the decks tied again, or when there were less than three cards in 
      // a deck, I returned the cards to the original decks. 
      else {
        for (var i = 0; i < 4; i++) {
          card1 = player1Deck.shift();
          card2 = player2Deck.shift();
          player1Deck.push(card1);
          player2Deck.push(card2);
        };
        console.log("Player 1 still has " + player1Deck.length + " cards.")
        console.log("Player 2 still has " + player2Deck.length + " cards.")
      }
    } else {
      player1Deck.push(card1);
      player2Deck.push(card2);
      console.log("Player 1 now has " + player1Deck.length + " cards.")
      console.log("Player 2 now has " + player2Deck.length + " cards.")
     }
    }
    if (player1Deck.length > player2Deck.length) {
      console.log("Player 1 wins!")
    } else {
      console.log("Player 2 wins!")
    }
  }

gameOfWar();