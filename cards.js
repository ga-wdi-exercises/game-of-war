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

// Put some code in here!

  deck = []
  for(var i=0; i< values.length; i++) {
    for(var j=0; j< suits.length; j++) {
      val = values[i];
      suit = suits[j];
        var card = {
          rank: i,
          value: val,
          suit: suit,
          face: val + suit
        }
        
        deck.push(card);
      }
    }
    return deck;
  }

  gameDeck = buildDeck(values, suits);
    shuffle(gameDeck);
    // for(card in deck) {
    //   console.log(deck[card].face);
    // }

    player1=gameDeck[0]
    player2=gameDeck[1]

    if (player1.rank > player2.rank) {
      console.log("Player 1 wins with a " + player1.face + " !")
    }
      else if (player1.rank < player2.rank) {
        console.log("Player 2 wins with a " + player2.face + " !")
      }
        else if (player1.rank === player2.rank) {
          console.log("It's a tie!")
        }
