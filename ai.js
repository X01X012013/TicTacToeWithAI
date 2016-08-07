/*main*/
var ai = function(){
/*Tic Tac Toe AI V1.3*/
/*make sure that global var table will not be changed*/
var lOri = table.slice();
var l = [0, 0, 0,  0, 0, 0,  0, 0, 0];
/*self last move*/
/*init*/
l = lOri.slice();
for(var i = 0; i < l.length; i++){
  if(l[i] === 1){l[i] = -1;}
  if(l[i] === 2){l[i] = 1;}
}
/*horizontal*/
if((l[0] + l[1] + l[2]) === 2){
  if(l[0] === 0){return 0;}
  if(l[1] === 0){return 1;}
  if(l[2] === 0){return 2;}
}
if((l[3] + l[4] + l[5]) === 2){
  if(l[3] === 0){return 3;}
  if(l[4] === 0){return 4;}
  if(l[5] === 0){return 5;}
}
if((l[6] + l[7] + l[8]) === 2){
  if(l[6] === 0){return 6;}
  if(l[7] === 0){return 7;}
  if(l[8] === 0){return 8;}
}
/*vertical*/
if((l[0] + l[3] + l[6]) === 2){
  if(l[0] === 0){return 0;}
  if(l[3] === 0){return 3;}
  if(l[6] === 0){return 6;}
}
if((l[1] + l[4] + l[7]) === 2){
  if(l[1] === 0){return 1;}
  if(l[4] === 0){return 4;}
  if(l[7] === 0){return 7;}
}
if((l[2] + l[5] + l[8]) === 2){
  if(l[2] === 0){return 2;}
  if(l[5] === 0){return 5;}
  if(l[8] === 0){return 8;}
}
/*diagonal*/
if((l[0] + l[4] + l[8]) === 2){
  if(l[0] === 0){return 0;}
  if(l[4] === 0){return 4;}
  if(l[8] === 0){return 8;}
}
if((l[2] + l[4] + l[6]) === 2){
  if(l[2] === 0){return 2;}
  if(l[4] === 0){return 4;}
  if(l[6] === 0){return 6;}
}
/*end self last move*/
/*block adversary last move*/
/*init*/
l = lOri.slice();
for(var i = 0; i < l.length; i++){
  if(l[i] === 2){l[i] = -1;}
}
/*horizontal*/
if((l[0] + l[1] + l[2]) === 2){
  if(l[0] === 0){return 0;}
  if(l[1] === 0){return 1;}
  if(l[2] === 0){return 2;}
}
if((l[3] + l[4] + l[5]) === 2){
  if(l[3] === 0){return 3;}
  if(l[4] === 0){return 4;}
  if(l[5] === 0){return 5;}
}
if((l[6] + l[7] + l[8]) === 2){
  if(l[6] === 0){return 6;}
  if(l[7] === 0){return 7;}
  if(l[8] === 0){return 8;}
}
/*vertical*/
if((l[0] + l[3] + l[6]) === 2){
  if(l[0] === 0){return 0;}
  if(l[3] === 0){return 3;}
  if(l[6] === 0){return 6;}
}
if((l[1] + l[4] + l[7]) === 2){
  if(l[1] === 0){return 1;}
  if(l[4] === 0){return 4;}
  if(l[7] === 0){return 7;}
}
if((l[2] + l[5] + l[8]) === 2){
  if(l[2] === 0){return 2;}
  if(l[5] === 0){return 5;}
  if(l[8] === 0){return 8;}
}
/*diagonal*/
if((l[0] + l[4] + l[8]) === 2){
  if(l[0] === 0){return 0;}
  if(l[4] === 0){return 4;}
  if(l[8] === 0){return 8;}
}
if((l[2] + l[4] + l[6]) === 2){
  if(l[2] === 0){return 2;}
  if(l[4] === 0){return 4;}
  if(l[6] === 0){return 6;}
}
/*end block adversary last move*/
/*self double last move*/
/*init*/
l = lOri.slice();
/*left up*/
if(l[0] === l[4] && l[4] === 2){
  if(l[1] === l[2] && l[2] === l[7] && l[7] === 0){return 1;}
  if(l[1] === l[2] && l[2] === l[6] && l[6] === 0){return 2;}
  if(l[3] === l[5] && l[5] === l[6] && l[6] === 0){return 3;}
  if(l[2] === l[3] && l[3] === l[6] && l[6] === 0){return 6;}
}
if(l[1] === l[3] && l[3] === 2){
  if(l[0] === l[2] && l[2] === l[6] && l[6] === 0){return 0;}
  if(l[4] === l[5] && l[5] === l[7] && l[7] === 0){return 4;}
}
/*right up*/
if(l[2] === l[4] && l[4] === 2){
  if(l[0] === l[1] && l[1] === l[7] && l[7] === 0){return 1;}
  if(l[0] === l[1] && l[1] === l[8] && l[8] === 0){return 0;}
  if(l[3] === l[5] && l[5] === l[8] && l[8] === 0){return 5;}
  if(l[0] === l[5] && l[5] === l[8] && l[8] === 0){return 8;}
}
if(l[1] === l[5] && l[5] === 2){
  if(l[0] === l[2] && l[2] === l[8] && l[8] === 0){return 2;}
  if(l[3] === l[4] && l[4] === l[7] && l[7] === 0){return 4;}
}
/*left down*/
if(l[4] === l[6] && l[6] === 2){
  if(l[0] === l[3] && l[3] === l[5] && l[5] === 0){return 3;}
  if(l[0] === l[3] && l[3] === l[8] && l[8] === 0){return 0;}
  if(l[1] === l[7] && l[7] === l[8] && l[8] === 0){return 7;}
  if(l[0] === l[7] && l[7] === l[8] && l[8] === 0){return 8;}
}
if(l[3] === l[7] && l[7] === 2){
  if(l[0] === l[6] && l[6] === l[8] && l[8] === 0){return 6;}
  if(l[1] === l[4] && l[4] === l[5] && l[5] === 0){return 4;}
}
/*right down*/
if(l[4] === l[8] && l[8] === 2){
  if(l[1] === l[6] && l[6] === l[7] && l[7] === 0){return 7;}
  if(l[2] === l[6] && l[6] === l[7] && l[7] === 0){return 6;}
  if(l[2] === l[3] && l[3] === l[5] && l[5] === 0){return 5;}
  if(l[2] === l[6] && l[6] === l[5] && l[5] === 0){return 2;}
}
if(l[5] === l[7] && l[7] === 2){
  if(l[2] === l[6] && l[6] === l[8] && l[8] === 0){return 6;}
  if(l[1] === l[3] && l[3] === l[4] && l[4] === 0){return 4;}
}
/*end self double last move*/
/*special moves*/
/*init*/
l = lOri.slice();
/*#1*/
if(areSame(l,[2, 0, 0,  0, 1, 0,  0, 0, 1])){return 2;}
/*end special moves*/
/*block adversary double last move*/
/*init*/
l = lOri.slice();
/*special: 
X| | 
 |O|X
 | | */
if(l[4] === 2){
  if(l[0] === 1){
    if(l[5] === 1 && l[2] === 0){return 2;}
    if(l[7] === 1 && l[6] === 0){return 6;}
  }
  if(l[2] === 1){
    if(l[3] === 1 && l[0] === 0){return 0;}
    if(l[7] === 1 && l[8] === 0){return 8;}
  }
  if(l[6] === 1){
    if(l[1] === 1 && l[0] === 0){return 0;}
    if(l[5] === 1 && l[8] === 0){return 8;}
  }
  if(l[8] === 1){
    if(l[1] === 1 && l[2] === 0){return 2;}
    if(l[3] === 1 && l[6] === 0){return 6;}
  }
}
/*left up*/
if(l[0] === l[4] && l[4] === 1){
  if(l[1] === l[2] && l[2] === l[7] && l[7] === 0){return 1;}
  if(l[1] === l[2] && l[2] === l[6] && l[6] === 0){return 2;}
  if(l[3] === l[5] && l[5] === l[6] && l[6] === 0){return 3;}
  if(l[2] === l[3] && l[3] === l[6] && l[6] === 0){return 6;}
}
if(l[1] === l[3] && l[3] === 1){
  if(l[0] === l[2] && l[2] === l[6] && l[6] === 0){return 0;}
  if(l[4] === l[5] && l[5] === l[7] && l[7] === 0){return 4;}
}
/*right up*/
if(l[2] === l[4] && l[4] === 1){
  if(l[0] === l[1] && l[1] === l[7] && l[7] === 0){return 1;}
  if(l[0] === l[1] && l[1] === l[8] && l[8] === 0){return 0;}
  if(l[3] === l[5] && l[5] === l[8] && l[8] === 0){return 5;}
  if(l[0] === l[5] && l[5] === l[8] && l[8] === 0){return 8;}
}
if(l[1] === l[5] && l[5] === 1){
  if(l[0] === l[2] && l[2] === l[8] && l[8] === 0){return 2;}
  if(l[3] === l[4] && l[4] === l[7] && l[7] === 0){return 4;}
}
/*left down*/
if(l[4] === l[6] && l[6] === 1){
  if(l[0] === l[3] && l[3] === l[5] && l[5] === 0){return 3;}
  if(l[0] === l[3] && l[3] === l[8] && l[8] === 0){return 0;}
  if(l[1] === l[7] && l[7] === l[8] && l[8] === 0){return 7;}
  if(l[0] === l[7] && l[7] === l[8] && l[8] === 0){return 8;}
}
if(l[3] === l[7] && l[7] === 1){
  if(l[0] === l[6] && l[6] === l[8] && l[8] === 0){return 6;}
  if(l[1] === l[4] && l[4] === l[5] && l[5] === 0){return 4;}
}
/*right down*/
if(l[4] === l[8] && l[8] === 1){
  if(l[1] === l[6] && l[6] === l[7] && l[7] === 0){return 7;}
  if(l[2] === l[6] && l[6] === l[7] && l[7] === 0){return 6;}
  if(l[2] === l[3] && l[3] === l[5] && l[5] === 0){return 5;}
  if(l[2] === l[6] && l[6] === l[5] && l[5] === 0){return 2;}
}
if(l[5] === l[7] && l[7] === 1){
  if(l[2] === l[6] && l[6] === l[8] && l[8] === 0){return 6;}
  if(l[1] === l[3] && l[3] === l[4] && l[4] === 0){return 4;}
}
/*end block adversary double last move*/
/*block adversary double*/
/*init*/
l = lOri.slice();
/*main*/
if(l[4] === 1){
  if(l[0] === 0){return 0;}
  if(l[2] === 0){return 2;}
  if(l[6] === 0){return 6;}
  if(l[8] === 0){return 8;}
}
/*end block adversary double*/
/*self double*/
/*init*/
l = lOri.slice();
/*left up*/
/*0 - 4*/
if((l[1] === l[2] && l[2] === l[7] && l[7] === 0) || 
   (l[1] === l[2] && l[2] === l[6] && l[6] === 0) || 
   (l[3] === l[5] && l[5] === l[6] && l[6] === 0) || 
   (l[2] === l[3] && l[3] === l[6] && l[6] === 0)){
  if(l[0] === 2 && l[4] === 0){return 4;}
  if(l[4] === 2 && l[0] === 0){return 0;}
}
/*1 - 3*/
if((l[0] === l[2] && l[2] === l[6] && l[6] === 0) || 
   (l[4] === l[5] && l[5] === l[7] && l[7] === 0)){
  if(l[1] === 2 && l[3] === 0){return 3;}
  if(l[3] === 2 && l[1] === 0){return 1;}
}
/*right up*/
/*2 - 4*/
if((l[0] === l[1] && l[1] === l[7] && l[7] === 0) || 
   (l[0] === l[1] && l[1] === l[8] && l[8] === 0) || 
   (l[3] === l[5] && l[5] === l[8] && l[8] === 0) || 
   (l[0] === l[5] && l[5] === l[8] && l[8] === 0)){
  if(l[2] === 2 && l[4] === 0){return 4;}
  if(l[4] === 2 && l[2] === 0){return 2;}
}
/*1 - 5*/
if((l[0] === l[2] && l[2] === l[8] && l[8] === 0) || 
   (l[3] === l[4] && l[4] === l[7] && l[7] === 0)){
  if(l[1] === 2 && l[5] === 0){return 5;}
  if(l[5] === 2 && l[1] === 0){return 1;}
}
/*left down*/
/*4 - 6*/
if((l[0] === l[3] && l[3] === l[5] && l[5] === 0) || 
   (l[0] === l[3] && l[3] === l[8] && l[8] === 0) || 
   (l[1] === l[7] && l[7] === l[8] && l[8] === 0) || 
   (l[0] === l[7] && l[7] === l[8] && l[8] === 0)){
  if(l[4] === 2 && l[6] === 0){return 6;}
  if(l[6] === 2 && l[4] === 0){return 4;}
}
/*3 - 7*/
if((l[0] === l[6] && l[6] === l[8] && l[8] === 0) || 
   (l[1] === l[4] && l[4] === l[5] && l[5] === 0)){
  if(l[3] === 2 && l[7] === 0){return 7;}
  if(l[7] === 2 && l[3] === 0){return 3;}
}
/*right down*/
/*4 - 8*/
if((l[1] === l[6] && l[6] === l[7] && l[7] === 0) || 
   (l[2] === l[6] && l[6] === l[7] && l[7] === 0) || 
   (l[2] === l[3] && l[3] === l[5] && l[5] === 0) || 
   (l[2] === l[6] && l[6] === l[5] && l[5] === 0)){
  if(l[4] === 2 && l[8] === 0){return 8;}
  if(l[8] === 2 && l[4] === 0){return 4;}
}
/*5 - 7*/
if((l[2] === l[6] && l[6] === l[8] && l[8] === 0) || 
   (l[1] === l[3] && l[3] === l[4] && l[4] === 0)){
  if(l[5] === 2 && l[7] === 0){return 7;}
  if(l[7] === 2 && l[5] === 0){return 5;}
}
/*end self double*/
/*self line*/
/*init*/
l = lOri.slice();
for(var i = 0; i < l.length; i++){
  if(l[i] === 1){l[i] = -1;}
  if(l[i] === 2){l[i] = 1;}
}
/*horizontal*/
if((l[0] + l[1] + l[2]) === 1){ 
  if(l[0] === 0){return 0;}
  if(l[1] === 0){return 1;}
  if(l[2] === 0){return 2;}
}
if((l[3] + l[4] + l[5]) === 1){
  if(l[3] === 0){return 3;}
  if(l[4] === 0){return 4;}
  if(l[5] === 0){return 5;}
}
if((l[6] + l[7] + l[8]) === 1){
  if(l[6] === 0){return 6;}
  if(l[7] === 0){return 7;}
  if(l[8] === 0){return 8;}
}
/*vertical*/
if((l[0] + l[3] + l[6]) === 1){
  if(l[0] === 0){return 0;}
  if(l[3] === 0){return 3;}
  if(l[6] === 0){return 6;}
}
if((l[1] + l[4] + l[7]) === 1){
  if(l[1] === 0){return 1;}
  if(l[4] === 0){return 4;}
  if(l[7] === 0){return 7;}
}
if((l[2] + l[5] + l[8]) === 1){
  if(l[2] === 0){return 2;}
  if(l[5] === 0){return 5;}
  if(l[8] === 0){return 8;}
}
/*diagonal*/
if((l[0] + l[4] + l[8]) === 1){
  if(l[0] === 0){return 0;}
  if(l[4] === 0){return 4;}
  if(l[8] === 0){return 8;}
}
if((l[2] + l[4] + l[6]) === 1){
  if(l[2] === 0){return 2;}
  if(l[4] === 0){return 4;}
  if(l[6] === 0){return 6;}
}
/*end self line*/
/*suggested moves*/
/*init*/
l = lOri.slice();
/*take centre first*/
if(l[4] === 0){return 4;}
/*take line centre first*/
if(l[1] === 0){return 1;}
if(l[3] === 0){return 3;}
if(l[5] === 0){return 5;}
if(l[7] === 0){return 7;}
/*take the rest*/
if(l[0] === 0){return 0;}
if(l[2] === 0){return 2;}
if(l[6] === 0){return 6;}
if(l[8] === 0){return 8;}
/*end suggested moves*/
};
/*compare two arrays*/
var areSame = function(array1, array2){
  if(array1.length !== array2.length){
    return false;
  }
  for(var i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}
