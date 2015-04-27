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
  var cards = []
  var card = {}
  var suit = ""
  //var face_value = "2"

  for (value_index in values){
    face_value = values[value_index];
      cards.push(face_value);

      for(card_suit in suits){
        cards.push(card_suit);

        }

    // card.suit = suit


    // card.face_value = face_value
    // cards.push(card);
    // cards.push(card);

  }



// Put some code in here!
return cards
}


console.log(buildDeck())
