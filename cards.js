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
  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      deck.push({ suit: suits[i], value: values[j]});
    };
  };
  return deck;
}

var newDeck = buildDeck();
shuffle(newDeck);

function faceCardValue(value){
  if(value === 'J'){
    return 11;
  } else if(value === 'Q'){
    return 12;
  } else if(value === 'K'){
    return 13;
  } else if(value === 'A'){
    return 14;
  } else{
    return value;
  }
}

function printCard(card){
  return card.value + ' ' + card.suit;
}

function highCard(deck){
  var card1 = deck.shift();
  var card2 = deck.shift();
  var winner;
  if (faceCardValue(card1.value) > faceCardValue(card2.value)){
    winner = card1;
  } else if(faceCardValue(card1.value) < faceCardValue(card2.value)){
    winner = card2;
  };
  console.log('card 1: ' + printCard(card1));
  console.log('card 2: ' + printCard(card2));
  if (winner === undefined) {
    console.log('It\'s a tie');
  } else{
    console.log(printCard(winner) + ' won');
  };
}

while(newDeck.length > 0){
  highCard(newDeck);
};

var secondDeck = buildDeck();
shuffle(secondDeck);

function gameOfWar(deck){
  var turnsTaken = 0;
  var p1Deck = [];
  var p2Deck = [];
  while(deck.length > 0){
    p1Deck.push(deck.shift());
    p2Deck.push(deck.shift());
  };
  while(p1Deck.length > 0 && p2Deck.length > 0){
    var card1 = p1Deck.shift();
    var card2 = p2Deck.shift();
    var winner;
    console.log('P1: ' + printCard(card1) + ', P2: ' + printCard(card2));
    if (faceCardValue(card1.value) > faceCardValue(card2.value)){
      winner = card1;
      p1Deck.push(card1, card2);
    } else if(faceCardValue(card1.value) < faceCardValue(card2.value)){
      winner = card2;
      p2Deck.push(card1, card2);
    } else{
      while(winner === undefined){
        var p1TieDiscards = []
        p1TieDiscards.push(p1Deck.shift(), p1Deck.shift());
        var p2TieDiscards = []
        p2TieDiscards.push(p2Deck.shift(), p2Deck.shift());
        var tieCard1 = p1Deck.shift();
        var tieCard2 = p2Deck.shift();
        if (faceCardValue(card1.value) > faceCardValue(card2.value)){
          winner = tieCard1;
          p1Deck.push(card1, card2, tieCard1, tieCard2);
          Array.prototype.push.apply(p1Deck, p1TieDiscards);
          Array.prototype.push.apply(p1Deck, p2TieDiscards);
        } else if(faceCardValue(card1.value) < faceCardValue(card2.value)){
          winner = tieCard2;
          p2Deck.push(card1, card2, tieCard1, tieCard2);
          Array.prototype.push.apply(p2Deck, p1TieDiscards);
          Array.prototype.push.apply(p2Deck, p2TieDiscards);
        };
      };
    };
    if (winner === card1) {
      console.log('P1 wins this round with ' + printCard(winner));   
    } else{
      console.log('P2 wins this round with ' + printCard(winner));
    };
    turnsTaken++;
    console.log('P1 has ' + p1Deck.length + ' cards.');
    console.log('P2 has ' + p2Deck.length + ' cards.');
    console.log(turnsTaken + ' turns');
  }
  if (p1Deck.length > 0) {
    console.log('P1 wins!');
  } else{
    console.log('P2 wins!');
  };
}

gameOfWar(secondDeck);
