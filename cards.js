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
  return array;
}

//use shuffle function to shuffle the deck after the pairs have been made


function buildDeck(){
// Put some code in here!
// There are two arrays with all of the card names in them
// There is also a function that is supposed to be used like the .each enumerator in ruby
//

    for(index = 0; index < values.length; index++){
      for(counter = 0; counter < suits.length; counter++){
        deck.push(values[index] + " " + suits[counter]);
      }
    }
    console.log(deck);
}

buildDeck();

function highCard(){
  deck2 = (shuffle(deck));
  // console.log(deck2[0]);
  // console.log(deck2[1]);

  player1 = [];
  player2 = [];

player1.push(deck2[0]);
player2.push(deck2[1]);

console.log("player1: "+ player1);
console.log("player2: " + player2);
  // counter = 0;
  // while (counter <= 0){
  //     console.log(deck2[counter]);
  //
  //     counter++;
  // }
  if (player1[0] < player2[0]){
    console.log("Player2 has the higher card");
  }
    else if (player1[0] > player2[0]) {
    console.log("Player1 has the higher card");
  }
    else {
      console.log("It's a tie %!&*")
    }
}

highCard();
