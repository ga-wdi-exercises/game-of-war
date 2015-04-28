var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var deck = []
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
  for(var i = 0; i < values.length; i++){ [i]
    for(y in suits){ suits[y]
    deck.push([i, suits[y]])
    }
  }
  return(deck);
}
buildDeck();
shuffle(deck);

function highCard(){
  player1 = deck.pop();
  player2 = deck.pop();
  if (player1[0] > player2[0]){
    console.log("player 1 wins!")
  }
  else if (player1[0] < player2[0]){
    console.log("player 2 wins!")
  }
  else{
    console.log("it's a tie!")
  }
}

highCard();
