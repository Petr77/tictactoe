window.onload = function(){
  var playerX = "X";
  var playerO = "O";
  var turns = 0;           // the game is only 9 turns long!!!!

  var currentPlayer = 'X';



  var checkWin = function(){

    var board = ['X','X','X','O','O','O','X','O','X'];

    var winningSquares = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,8]];
    var winner;
    for (var i = 0; i < winningSquares.length; i++) {
      squares = winningSquares[i];
      if( board[squares[0]] !== null
      && board[squares[0]] === board[squares[1]] && board[squares[1]] === board[squares[2]] ){
          winner = board[squares[0]];
      }
    }
    if(winner){
      console.log("Winner is " + winner);
    }
  };


  var clickSquareHandler = function(){

     //to check if square is already taken!
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

// var checkWin = function () {
//
//   var board = [
//     $('#square0').attr('class'),
//     $('#square1').attr('class'),
//     $('#square2').attr('class'),
//     $('#square3').attr('class'),
//     $('#square4').attr('class'),
//     $('#square5').attr('class'),
//     $('#square6').attr('class'),
//     $('#square7').attr('class'),
//     $('#square8').attr('class'),
//   ];
//
//   var winningSquares = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,8]];
//
//   for (var i = 0; i < winningSquares.length; i++) {
//     squares = winningSquares[i];
//     if( board[squares[0]] === board[squares[1]] && board[squares[1]] === board[squares[2]] ){
//       winner = board[squares[0]];
//       debugger
//     }
//   }
