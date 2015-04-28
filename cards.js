
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

function buildDeck()
{
  var deck_array = []

  for(var suits_i = 0; suits_i < suits.length; suits_i++)
  {
    for(var values_i = 0; values_i < values.length; values_i++)
    {
      deck_array.push(
          {suit: (suits[suits_i]),
          value: (values[values_i])}
        );
    }
  }

  return deck_array
}

/*function deal(){
for(var deck_i = 0; deck_i < deck.length; deck_i++)
{
      var dealt = deck.pop;
      return dealt;
}
}
*/


var deck    = shuffle(buildDeck());

var dealtPlayer1 = deck[0]
var dealtPlayer2 = deck[1]



console.log("Player 1: ")
console.log(dealtPlayer1)
console.log("Player 2: ")
console.log(dealtPlayer2)


var cardA = dealtPlayer1.value
var cardB = dealtPlayer2.value

if (cardA > cardB){
  console.log("Player 1 wins!")
}

else if (cardA === cardB){
  console.log("Tie.")
}

else {
  console.log("Player 2 wins!")
}
/*if (dealtPlayer1[value] > dealtPlayer2[value])
{
    console.log("Player 1 wins!")
  }

  else {
    console.log("Player 2 wins!")
  }
  */
