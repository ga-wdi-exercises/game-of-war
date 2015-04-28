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



function buildDeck(n){
  for(var i = 0; i < n; i ++)
    for(var j = 0; j < suits.length; j ++)
      for(var k = 0; k < values.length; k ++)
          new Card(values[k], suits[j]);
  return buildDeck();
  }
