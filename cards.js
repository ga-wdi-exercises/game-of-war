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
  var deck = []

  var suit = ""
  //var face_value = "2"

  for (value_index in values){
    for(card_suit in suits){
      var card = {}


      card.suit = suits[card_suit];
      card.face_value = values[value_index];
      // console.log(card)
      deck.push(card);
    }

  }
  // Put some code in here!
  return deck
}


cardDeck = buildDeck()
console.log(cardDeck)
console.log("Now we deal the cards out")

var i = 0
var player1 = []
var player2 = []


var dealCards = function(){

  shuffle(cardDeck)

  while ( i < 6){
    var  player1Hand = {}
    var  player2Hand = {}

    console.log("for player 1");
    console.log( player1 = cardDeck.pop(1));
    player1Hand<<(player1);

    console.log("for player 2");
    console.log( player2 = cardDeck.pop(1));
    player2Hand<<(player2)


    i++;
return player2Hand
  }
}

dealCards()
