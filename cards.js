function knuth_shuffle(array){
  var current_index = array.length;
  var random_index;
  var temporary_value;
  while(current_index > 0){
    random_index   = Math.floor(Math.random() * current_index);
    current_index -= 1;

    temporary_value       = array[current_index];
    array[current_index]  = array[random_index];
    array[random_index]   = temporary_value;
  }
  return array;
}

function build_deck(){ 
  var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var deck    = []

    for(var suit_index = 0; suit_index < suits.length; suit_index++){
      for(var value_index = 0; value_index < values.length; value_index++){
        deck.push({
          "suit"  : suits[suit_index],
          "value" : values[value_index]
        });
      }
    }
  return deck;
}

function high_card(deck){
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var player1_card = deck.shift();
  var player2_card = deck.shift();

  console.log("Player 1 drew the " + player1_card["value"] + " of " + player1_card["suit"] + ". Player 2 drew the " + player2_card["value"] + " of " + player2_card["suit"] + ".");

  if(values.indexOf(player1_card["value"]) > values.indexOf(player2_card["value"])){
    console.log("Player 1 won!");
  }else if(values.indexOf(player1_card["value"]) > values.indexOf(player2_card["value"])){
    console.log("Player 2 won!");
  }else{
    console.log("It was a tie!");
  }
  
  return deck;
}

high_card(knuth_shuffle(build_deck()));

function game_of_war(){
  var deck  = knuth_shuffle(build_deck());
  var player1_deck = deck.splice(0,26);
  var player2_deck = deck.splice(0,26);


}

game_of_war();
