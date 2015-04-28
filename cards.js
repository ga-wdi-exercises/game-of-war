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
  var deck = []
  for (var i_s=0; i_s < suits.length; i_s++){
    for (var i_v=0; i_v < values.length; i_v++){
      var card = {}
      card["card"] = values[i_v] + " of " + suits[i_s];
      card["value"] = i_v;
      deck.push(card)
    }
  }
  return deck;
}

function dealCards(deck){
  var player1_deck = [];
  var player2_deck = [];
  // Possible JS error? var i=0; i < deck.length/2 returns 2 13-card decks
  for (var i=0; i < 26; i++){
    player1_deck.push(deck.pop());
    player2_deck.push(deck.pop());
  }
  return [player1_deck, player2_deck];
}

function sumCardAry(hand){
  var stats = {"cards":[], "sum":0}
  for(var i=0; i < hand.length; i++) {
    stats["sum"] = stats["sum"] + hand[i].value;
    stats["cards"].push(hand[i].card)
  }
  return stats
}


var deck = buildDeck()
var shuffled_deck = shuffle(deck)
var dealt_decks = dealCards(shuffled_deck)

var deck1 = dealt_decks[0]
var deck2 = dealt_decks[1]

while (deck1.length < 52 || deck2.length <52) {
  console.log("Player 1 has " +deck1.length+" cards; Player 2 has "+deck2.length+" cards.");

  var hand1 = deck1.pop()
  var hand2 = deck2.pop()
  console.log(hand1.card+" (Player 1) vs. "+hand2.card+ " (Player 2)...")

  if (hand1.value > hand2.value) {
    console.log("Player 1 wins.");
    deck1.unshift(hand1)
    deck1.unshift(hand2)

  } else if (hand2.value > hand1.value) {
    console.log("Player 2 wins.");
    deck2.unshift(hand2)
    deck2.unshift(hand1)

  } else {
    console.log("\n\n\nDraw. Picking three more cards each.");
    var tie = true;
    // while (tie == true) {
      hand1 =[hand1]
      hand2 = [hand2]
      for (var i=0; i < 3; i++) {
        hand1.push(deck1.pop());
        hand2.push(deck2.pop());
      }
      var hand1_stats = sumCardAry(hand1);
      var hand2_stats = sumCardAry(hand2);

      console.log(hand1_stats["cards"]+" (Player 1) vs. "+hand2_stats["cards"]+ " (Player 2)...")

      if (hand1_stats["sum"] > hand2_stats["sum"]) {
        for (var i=0; i < hand1.length; i++) {
          deck1.unshift(hand1[i])
          deck1.unshift(hand2[i])
         }
         tie = false;
         console.log("Player 1 wins tie-breaker.")

     } else if (hand2_stats["sum"] > hand1_stats["sum"]) {
        for (var i=0; i < hand2.length; i++) {
          deck2.unshift(hand2[i])
          deck2.unshift(hand1[i])
         }
         tie = false;
         console.log("Player  wins tie-breaker.")

     } else {
       tie = true;
    }
  }
}
