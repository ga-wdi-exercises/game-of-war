var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var combos = []
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

for(var i = 0; i < values.length; i++)
  {
    for(var j = 0; j < suits.length; j++)
      {
        card = {suit:suits[j], value: values[i]}
        combos.push(card);
      }
  }
  return combos;
}
console.log(buildDeck())

// if (values.indexof(card1) > values.indexof(card2)) {
//   console.log("card1 wins")
// }
// else if (values.indexof(card1) == values.indexof(card2)) {
//   console.log("UR BOTH FUCKTARDS")
// }
// else {  
//   console.log("card2 wins")
// } 







