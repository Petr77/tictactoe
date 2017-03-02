$(document).ready(function(){

  var turns = 0;

  var currentPlayer = 'X';

  var lastGameStart = currentPlayer;

  var board = [null,null,null,null,null,null,null,null,null];

  var windowAlert = function (message) {
    $('.alert').html(message);
  };

  var playerX = 0;

  var playerO = 0;

  var checkWin = function(){

    // winning combinations
    var winningSquares = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    var winner;
    for (var i = 0; i < winningSquares.length; i++) {
      squares = winningSquares[i];
      if( board[squares[0]] !== null
          && board[squares[0]] === board[squares[1]]
          && board[squares[1]] === board[squares[2]] ){

          winner = board[squares[0]];
      }
    }
    if(winner){
      updateWinCount(winner);
      setTimeout(function(){
        windowAlert("Winner is " + winner);
      }, 100);
    }else if(turns >= 8 ){
      windowAlert("Draw!")
    }
    return winner;
  };

  var updateWinCount = function(winner){
    // debugger;
    if (winner == "O") {
      playerO++;
      $('.playerO').html( playerO );
      // $('.playerO').
    } else {
      playerX++;
      $('.playerO').html( playerO );
      // $('.playerX').
    }
  }

  var clickSquareHandler = function(){

     //to check if square is already taken!
    if( $(this).hasClass('X') || $(this).hasClass('O') ){
      return;
    }

    $(this).addClass( currentPlayer )   //html( currentPlayer );

    var id = parseInt( $(this).attr('id') );

    board[id] = currentPlayer;

    checkWin();

    if( currentPlayer === 'X' ){
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    turns++;
  };

  $(".board > div").on('click', clickSquareHandler);


     //need remove class!!!
  var resetButton = function() {
    $('.board > div').removeClass("X O");
    //need to reset board to null!!!!
    board = [null,null,null,null,null,null,null,null,null];
    turns = 0;

    if( lastGameStart === 'X' ){
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    lastGameStart = currentPlayer;
    windowAlert("");
  };

  $('#reset').on('click', resetButton);

});
