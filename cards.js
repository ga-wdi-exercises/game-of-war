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
  
  for (i = 0; i < values.length; i++) {
    for (j = 0; j < suits.length; j++) {
      var card = {value: values[i], suit: suits[j]};
      deck.push(card);
    }
  }

  return(deck);
}

function cardRank(card){
  var cardvalue = card.value;
  var rank = values.indexOf(cardvalue);
  return(rank);
}

//console.log(buildDeck());

function highCard(player1, player2){
  var shuffledDeck = shuffle(buildDeck());
  player1Card = "the " + shuffledDeck[0].value + " of " + shuffledDeck[0].suit;
  player2Card = "the " + shuffledDeck[1].value + " of " + shuffledDeck[1].suit;
  console.log(player1 + " got " + player1Card);
  console.log(player2 + " got " + player2Card);
  player1Rank = cardRank(shuffledDeck[0]);
  player2Rank = cardRank(shuffledDeck[1]);

  if (player1Rank === player2Rank){
    console.log("It's a tie!");
  } else if (player1Rank > player2Rank){
    console.log(player1 + " is the winner!");
  } else {
    console.log(player2 + " is the winner!");
  }

}

// highCard("Julia", "God");


function gameOfWar(player1, player2){
  var deck1 = []
  var deck2 = []
  var shuffledDeck = shuffle(buildDeck());
  for (i = 0; i < 26; i++) {
    deck1.push(shuffledDeck[i]);
  }
  for (i = 26; i < 52; i++) {
    deck2.push(shuffledDeck[i]);
  }

  function compare(card1, card2) {
    rank1 = cardRank(card1);
    rank2 = cardRank(card2);
    if (rank1 === rank2) {
      return("tie");
    } else if (rank1 > rank2) {
      return("card1 is higher");
    } else {
      return("card2 is higher");
    }

  }

  function play(deck1, deck2) {
    i = 0; //index for deck1
    j = 0; //index for deck2
    while (deck1.length > 0 && deck2.length > 0){

      if (i === (deck1.length - 1)) {
        i = 0;
      }

      if (j === (deck2.length - 1)) {
        j = 0;
      }

      console.log(deck1[i].value + " of " + deck1[i].suit + " vs. " + deck2[j].value + " of " + deck2[j].suit);

      var result = compare(deck1[j], deck2[j]);
      if (result === "card1 is higher") {
        deck1.push(deck2[j]);
        deck2.splice(j, 1);
        console.log("Card goes to " + player1);
        i++;
        j++;
      } else if (result === "card2 is higher") {
        deck2.push(deck1[j]);
        deck1.splice(j, 1);
        console.log("Card goes to " + player2);
        i++;
        j++;
      } else {
        console.log("It's war!");
        //war code here
      }

      if (j === deck1.length || j === deck2.length)

      if (deck1.length === 0) {
        console.log(player2 + " wins!");
        return(player2);
      } else if (deck2.length === 0 ) {
        console.log(player1 + " wins!");
        return(player1);
      }
    }
  }

  play(deck1, deck2);

}

gameOfWar("Julia", "God");











