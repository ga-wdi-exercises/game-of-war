  var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]; // all the values in the deck
  var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"]; // all the suits in the deck
  var deck = []


  //this is my array shuffle method
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
        for (var i = 0; i < values.length; i++) {       // loop through the length of values and execute the following after each iteration
        for (var j = 0; j < suits.length; j++)           // loop through the length of suits and execute the following after each iteration
        {
            var card = {                                 // store each iteration into the "card" hash
              suit: suits[j],
              card_value: values[i],
              rank: i                                    // "rank" represents the index at iteration. showing the idex of the first or second
            };                                           // array would yield the same results
            deck.push(card)                              // push the "card" hash inside of the "deck" variable

        }
      }
      return deck;                                       // return "deck" gives me back the deck variable, which was defined at the top as
                                                         // an empty container

  }



function highCard() {
    var playerDeck = shuffle(buildDeck()).slice(26);     //call shuffle method, reference and then call buildDeck
    return playerDeck;                                   //call slice method and pass in 26 as it's argument
}                                                        //return "playerDeck" give me back the playerDeck variable, which consist
                                                        // half of the deck


 var playerOne = highCard()                              // store and call the method highCard into playerOne
 console.log(playerOne[0])                               //within the returned hash, give me back the first key and value


 var playerTwo = highCard()                              // store and call the method highCard into playerTwo
 console.log(playerTwo[0])                               //within the returned hash, give me back the first key and value




 if (playerOne[0]["rank"] > playerTwo[0]["rank"]) {     //playerOne[0]["rank"] brings back the first property key and value, and
   console.log("Player One Wins")                       //within that property, give me the rank key's value
 }
  else if (playerOne[0]["rank"] ===  playerTwo [0]["rank"]) {
    console.log("Tie")
  }
  else {
    console.log("Player Two Wins")

  }
