var isPlayerTurn = true;
var playerIsX = true;
var isReady = true;
var ended = false;
var table = [0, 0, 0, 
             0, 0, 0, 
             0, 0, 0];
/*0: empty, 1: Player, 2: AI*/
/*index: 
0, 1, 2, 
3, 4, 5, 
6, 7, 8*/
var sendMsg = "Please send your moves to me, I will fix this. ";
/*functions*/
/*win check*/
var winCheck = function(){
  /*horizontal*/
  winCheckSub([0, 1, 2]);
  winCheckSub([3, 4, 5]);
  winCheckSub([6, 7, 8]);
  /*vertical*/
  winCheckSub([0, 3, 6]);
  winCheckSub([1, 4, 7]);
  winCheckSub([2, 5, 8]);
  /*diagonal*/
  winCheckSub([0, 4, 8]);
  winCheckSub([2, 4, 6]);
  /*tie*/
  if(!ended && function(){
    for(var i = 0; i < table.length; i++){
      if(table[i] === 0){
        return false;
      }
    }
    return true;
  }() ){
    /*log*/
    console.log("Tie! ");
    $("#status").html("Tie! ");
    ended = true;
  }
  return null;
};
var winCheckSub = function(index){
  var last = table[index[0]];
  if(last === 0){
    return false;
  }
  for(var i = 1; i < index.length; i++){
    if(table[index[i]] !== last){
      return false;
    }
    last = table[index[i]];
  }
  /*log*/
  var winner = (table[index[0]] === 1)? "Player" : "AI";
  var msg = (winner === "Player")? sendMsg : "";
  console.log(winner + " wins! " + msg);
  $("#status").html(winner + " wins! " + msg);
  ended = true;
  return true;
};
/*judge*/
var move = function(index){
  if(table[index - 1] === 0){
    /*change table and draw table*/
    table[index - 1] = (isPlayerTurn)? 1 : 2;
    $("#c" + (index).toString()).html( function(){
      var temp = (isPlayerTurn)? "X" : "O";
      return ((temp === "O") !== (playerIsX))? "X" : "O"; /*exclusive nor*/
    }() );
    /*check winner*/
    winCheck();
    /*switch turn*/
    isPlayerTurn = !isPlayerTurn;
    return true;
  }
  /*cannot do this*/
  return false;
};
/*reset*/
var reset = function(pStart){
  /*redraw html table*/
  for(var i = 1; i < 10; i++){
    $("#c" + (i).toString()).html("");
  }
  /*reset vars*/
  isPlayerTurn = pStart;
  playerIsX = $("#cbPIsX").prop("checked");
  ended = false;
  table = [0, 0, 0, 
           0, 0, 0, 
           0, 0, 0];
  /*ai*/
  if(!pStart){
    move(ai() + 1);
  }
  /*ready*/
  $("#status").html("Ready");
  isReady = true;
  return null;
};
/*main*/
window.onload = function(){
  /*status*/
  $("#status").html("Ready");
  /*main*/
  $(".cell").click( function(){
    if(!ended && isReady){
      isReady = false;
      if(move($(this).attr("id").substring(1, 2)) && !ended){
        if(!move(ai() + 1)){
          ended = true;
          $("#status").html("AI error! " + sendMsg);
          throw("AI error! " + sendMsg);
        }
      }
      isReady = true;
    }
    return null;
  });
  /*reset*/
  $("#bPStart").click( function(){
    reset(true);
    return null;
  });
  $("#bAIStart").click( function(){
    reset(false);
    return null;
  });
return null;}
