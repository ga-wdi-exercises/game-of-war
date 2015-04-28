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
  var deck = []
  for(v in values){
    for(s in suits){
      var new_card = {card_value: (values[v]), suitcard_value: (suits[s])}
      deck.push(new_card);
    }
  }
  var shuffled_deck = shuffle(deck)
  console.log(shuffled_deck);
}

var deck = buildDeck()

console.log(deck)

function high_card(deck){
    var player1 = deck.pop()
    var player2 = deck.pop()
  console.log(player1, player2)
}

high_card(deck)
