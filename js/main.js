$(document).ready(function(){

  var turns = 0;

  var winner;

  var currentPlayer = 'X';

  var lastGameStart = currentPlayer;

  var playerX = 0;

  var playerO = 0;

  var board = [null,null,null,null,null,null,null,null,null];

  var windowAlert = function (message) {
    $('.alert').html(message);
  };

  var checkWin = function(){

    // winning combinations
    var winningSquares = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (var i = 0; i < winningSquares.length; i++) {
      squares = winningSquares[i];
      if( board[squares[0]] !== null
          && board[squares[0]] === board[squares[1]]
          && board[squares[1]] === board[squares[2]] ){

          winner = board[squares[0]];
          break;
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

    if (winner == "O") {
      playerO++;
      $('.playerO').html( playerO );
    } else {
      playerX++;
      $('.playerX').html( playerX );
    }
  }

  var clickSquareHandler = function(){

     //to check if square is already taken!
    if( winner || $(this).hasClass('X') || $(this).hasClass('O') ){
      return;
    }
    //adding a class to each square!
    $(this).addClass( currentPlayer )   //html( currentPlayer );
    // getting an id of each square
    var id = parseInt( $(this).attr('id') );
    //assigning and id to clicked square
    board[id] = currentPlayer;

    checkWin();
    // to switch between playerX and playerO
    if( currentPlayer === 'X' ){
      currentPlayer = 'O';
    } else {
      currentPlayer = 'X';
    }
    turns++;
  };

  $(".board > div").on('click', clickSquareHandler);



  var resetButton = function() {
    $('.board > div').removeClass("X O");
    //need to reset board to null!!!!
    board = [null,null,null,null,null,null,null,null,null];
    turns = 0;
    winner = false;
    //to change player after each game
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
