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
  var deck = [];
  for(var suitIndex = 0; suitIndex < suits.length; suitIndex++){
    for(var valueIndex = 0; valueIndex < values.length; valueIndex++){
      deck.push({
        "suit"  : suits[suitIndex],
        "value" : values[valueIndex]
      });
    }
  }
  return deck;
}

function Player(){
  this.deck     = [];
  this.discard  = [];
  this.card     = [];
  this.total    = function(){
    return this.deck.length + this.discard.length;
  };
}

function draw(){
  for(var x in players){
    var player  = players[x];
    if(player.deck.length === 0 && player.discard.length !== 0){
      player.deck     = shuffle(player.discard);
      player.discard  = [];
    }else if(player.total() === 0){
      return false;
    }
    player.card = player.deck.shift();
    pot.push(player.card);
    console.log(x + " DRAW " + player.card["value"] + " TOTAL " + (player.total() + 1));
  }
}

function winner(which){
  var winner = players[which];
  winner.discard = winner.discard.concat(pot);
  pot = [];
}

function turn(){
  do{
    draw();
    cardA = values.indexOf(players["a"].card["value"]);
    cardB = values.indexOf(players["b"].card["value"]);
    if(cardA > cardB){
      winner("a");
    }else if(cardA < cardB){
      winner("b");
    }else{
      console.log("BATTLE!");
      for(var x = 0; x < 2; x++){
        draw();
      }
    }
  }while(pot.length > 0);
}


var deck    = shuffle(buildDeck());
var players = {"a" : new Player(), "b" : new Player()};
var pot     = [];
var turns   = 0;

for(var x in players){
  players[x].deck = deck.splice(0,26);
}
while(players["a"].total() !== 52 && players["a"].total() !== 0){
  turns += 1;
  console.log("TURN " + turns);
  turn();
}
console.log("GAME OVER!");
