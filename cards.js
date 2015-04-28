var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

// Initialize deck and player objects
var gameDeck = buildDeck();
var playerOne = { deck: gameDeck.slice(0,26) };
var playerTwo = { deck: gameDeck.slice(26,52) };

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
  for ( var i = 0; i < values.length ; i++ ) {
    for ( var j = 0; j < suits.length; j++ ) {
      deck.push( [values[i], suits[j]] );
    }
  }
  return deck = shuffle( deck );
}

function highCard(){
  while( playerOne.deck.length > 0 && playerTwo.deck.length > 0 ) {

    console.log( "==========================");
    console.log( "==========================");
    console.log( "START OF TURN");
    console.log( "Player 1 has " + playerOne.deck.length + " cards left." );
    console.log( "Player 2 has " + playerTwo.deck.length + " cards left." );
    var oneCard = playerOne.deck.pop();
    var twoCard = playerTwo.deck.pop();
    console.log( "--------------------------");
    console.log( "Player 1 card: " + oneCard );
    console.log( "Player 2 card: " + twoCard );

    // If Player 1 has the higher card...
    if ( values.indexOf(oneCard[0]) > values.indexOf(twoCard[0]) ) {
      console.log( "PLAYER 1 WINS!" );
      playerOne.deck.unshift( oneCard );
      playerOne.deck.unshift( twoCard );
    }

    // If Player 2 has the higher card...
    else if ( values.indexOf( twoCard[0] ) > values.indexOf( oneCard[0] )) {
      console.log( "PLAYER 2 WINS!" );
      playerTwo.deck.unshift( oneCard );
      playerTwo.deck.unshift( twoCard );
    }

    // If both cards are the same...
    else {

      // Initialize array to hold eight total cards played by each player in case of tie
      tempArray = [];
      for( var i = 0; i < 3; i++ ) {
        if ( (playerOne.deck.length > 0) || (playerTwo.deck.length > 0) ) {
          tempArray.push( playerOne.deck.pop() );
          tempArray.push( playerTwo.deck.pop() );
        }
      }
      // If Player #1 wins tie breaker, put all temp array cards into his deck
      if ( tempArray[tempArray.length-2] > tempArray[tempArray.length-1] ) {
        for ( var i = 0; i < tempArray.length; i++ ) {
          playerTwo.deck.unshift( tempArray[i] );
        }
      }
      // If Player #2 wins tie breaker, put all temp array cards into his deck
      else if ( tempArray[tempArray.length-1] > tempArray[tempArray.length-2] ) {
        for ( var i = 0; i < tempArray.length; i++ ) {
          playerOne.deck.unshift( tempArray[i] );
        }
      }
      // Need to figure out what to do in case of chained ties
      else if ( tempArray[tempArray.length-2] === tempArray[tempArray.length-1] ) {

      }
    }
    console.log( "--------------------------");
    console.log( "END OF TURN");
    console.log( "Player 1 has " + playerOne.deck.length + " cards left." );
    console.log( "Player 2 has " + playerTwo.deck.length + " cards left." );
  }

  console.log( "==========================");
  console.log( "==========================");
  if ( playerOne.deck.length > 0 ) {
    console.log( "PLAYER 1 WINS THE GAME!" );
  }
  else {
    console.log( "PLAYER 2 WINS THE GAME!" );
  }
}

highCard();
