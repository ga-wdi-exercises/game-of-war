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
  return(array);
}


function buildDeck(){

for(var i = 0; i < suits.length; i++){
  for(var x = 0; x < values.length; x++){
    deck.push(suits[i] + ' ' + values[x]);
    }
  }
    return deck
}

function highcard() {
player1 = deck.pop();
player2 = deck.pop();
console.log(player1 + ' ' + player2);

  if (player1 > player2) {
    console.log('player 1 wins ' + player1);
  } else if (player2 > player1) {
    console.log('player 2 wins ' + player2);
  } else if (player2 === player1) {
    console.log('player 1 and player 2 tie!');
  }

}

buildDeck();

shuffle(deck);

highcard();
