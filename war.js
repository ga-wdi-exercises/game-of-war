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
var i = 0
function buildDeck(sAry, vAry){
    var buildDeckArray = [];
    for(i =0; i< sAry.length; i++){
      for(t=0; t< vAry.length; t++){
        var card = {value: vAry[t], suit: sAry[i], cardIndex: t};
        buildDeckArray.push(card);
      }
    }
    return buildDeckArray
}
var shuffleDeck = shuffle(buildDeck(suits, values))

var player1card = shuffleDeck[0];
var player2card = shuffleDeck[1];


console.log(player1card.value + " of "+ player1card.suit);
console.log(player2card.value + " of "+ player2card.suit);

function winner(x, y){
  console.log(x, y)
  if (x.cardIndex > y.cardIndex){
    return console.log("Player 1 Wins!")
  }else if (y.cardIndex > x.cardIndex){
    return console.log("Player 2 Wins!")
  }else{
    return console.log("Its A Tie!")
  }

}

winner(player1card, player2card)
