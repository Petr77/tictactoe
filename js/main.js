window.onload = function(){


var playerX = "X";
var playerO = "O";
var turns = 0;           // the game is only 9 turns long!!!!

var currentPlayer = 'X';


var checkWin = function () {

  var winningSquares = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,8]];

  var board = [
    $('#square0').attr('class'),
    $('#square1').attr('class'),
    $('#square2').attr('class'),
    $('#square3').attr('class'),
    $('#square4').attr('class'),
    $('#square5').attr('class'),
    $('#square6').attr('class'),
    $('#square7').attr('class'),
    $('#square8').attr('class'),
  ];

// debugger

  // [0,1,2]
  board[0] + board[1] + board[2]

};


// var clickSquareHandler = function(){
//   alert(this.id);
// }

var clickSquareHandler = function(){

   //check if square is already taken!
  if( $(this).hasClass('X') || $(this).hasClass('O') ){
    return;
  }

  $(this).addClass( currentPlayer )   //html( currentPlayer );

  checkWin();

  if( currentPlayer === 'X' ){
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }

};

$(".board > div").on('click', clickSquareHandler);


};
