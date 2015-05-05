var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var deck = [];

//Shuffle array function

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

//Build deck function

function buildDeck(){

    for(var i = 0; i < values.length; i++){

        for(var j = 0; j < suits.length; j++){

         deck.push(values[i] + " of " + suits[j]);
            }
      }
    console.log(deck);
}

buildDeck();

//High card function

function highCard(){

    playerDeck = (shuffle(deck));

    player1 = [];
    player2 = [];

    player1.push(playerDeck[0]);
    player2.push(playerDeck[1]);

    console.log("Player one's card: " + player1);
    console.log("Player two's card: " + player2);

    if (player1[0] > player2[0]) {
    console.log("Player one has the higher card!");
    }
    else if (player1[0] < player2[0]){
    console.log("Player two has the higher card!");
    }
    else {
      console.log("It's a tie!")
    }
}

highCard();
