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
  deck = []
  for(s in suits){
    for(v in values){
      val = values[v];
      suit = suits[s];
      var card = {
        card: val + suit.charAt(0),
        suit: suit,
        value: val,
        strength: parseInt(v,10) //Cast to integer since for i in arr will make i a string
      };

      deck.push(card)
    }
  }
  return shuffle(deck);
}

function highCard(card1, card2){
  console.log(card1.card, 'vs', card2.card)
  if (card1.strength > card2.strength)
    return 1;
  if (card1.strength < card2.strength)
    return 2;
  return 0;
}

function dumpArray (target, source){
  while (source.length > 0){
    target.push(source.shift());
  }
}

deck = buildDeck();

roundPot = [];
p1 = [];
p2 = [];
players = [p1,p2];

while (deck.length > 1){
  p1.push(deck.shift());
  p2.push(deck.shift());
}

while(p1.length && p2.length){
  player1Draw = p1.shift();
  player2Draw = p2.shift();
  roundPot.push(player1Draw, player2Draw);
  winner = highCard(player1Draw, player2Draw);
  if (winner){
    console.log("Winner is Player", winner);
    //1 % 2 == 1
    //2  % 2 == 0
    //little trick for getting the index of the losing player
    dumpArray(players[winner%2], roundPot);
  }
  else{
    console.log("This around is a tie");
    for(var x = 0; x <2; x++)
      roundPot.push(p1.shift(),p2.shift());
  }
  console.log("P1 Deck", p1.length, "| P2 Deck", p2.length )

}
console.log("Player 1 card count", p1.length);
console.log("Player 2 card count", p2.length);

