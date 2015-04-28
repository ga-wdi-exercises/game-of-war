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
  for (var i=0; i<suits.length; i++) {
    for (var j=0; j<values.length; j++) {
      var card= {suit: suits[i], value: values[j], rank: j};
      deck.push(card);
    }
  }
  return deck;
// Put some code in here!
}

function highCard(deck) {
  var player1= deck[0];
  var player2= deck[1];
  console.log("Player 1: " + player1.value)
  console.log("Player 2: " + player2.value)
  if (player1.rank > player2.rank) {
    console.log("Player 1 wins high card!")
  }else if (player1.rank === player2.rank) {
    console.log("High card is a tie!")
  }else {
    console.log("Player 2 wins high card!")
  }
}


function war(deck1, deck2) {
  var player1= deck1;
  var player2= deck2;
  var turn = 0
  while (player1 != "" && player2 != "" ) {
    var card1= player1[0];
    var card2= player2[0];
    if (card1.rank > card2.rank) {
      player2.splice(0,1);
      player1.splice(0,1);
      player1.push(card1);
      player1.push(card2);
      console.log(card1);
      console.log(card2);
    }else if (card2.rank > card1.rank) {
      player2.splice(0,1);
      player1.splice(0,1);
      player2.push(card1);
      player2.push(card2);
      console.log(card1);
      console.log(card2);
   }else if (card1.rank === card2.rank) {
      var add1 = player1.splice(0,1);
      var add2 = player2.splice(0,1);
      while (card1.rank === card2.rank) {
        card1= player1[2];
        card2= player2[2];
        var pushCards1= player1.splice(0,3);
        var pushCards2= player2.splice(0,3);
        for (var cc=0; cc<pushCards1.length; cc++) {
          add1.push(pushCards1[cc]);
          add2.push(pushCards1[cc]);
        }
      }
      if (card1.rank > card2.rank) {
        console.log(card1);
        console.log(card2);
        for (var ii=0; ii<add1.length; ii++) {
          player1.push(add1[ii]);
          player1.push(add2[ii]);
        }
      }else if (card2.rank > card1.rank) {
        console.log(card1);
        console.log(card2);
        for (var jj=0; jj<add1.length; jj++) {
          player2.push(add1[jj]);
          player2.push(add2[jj]);
        }
      }
    }
   turn += 1;
   console.log("Turn: " + turn);
  }
  if (player1 == "") {
    console.log("Player 2 Wins War!");
  }else {
    console.log("Player 1 Wins War!");
  }
}

var deck= buildDeck();
var shuffled= shuffle(deck);

var deck1= shuffled.slice(0,26);
var deck2= shuffled.slice(26,52);

// war(deck1,deck2);

highCard(shuffle(deck));


