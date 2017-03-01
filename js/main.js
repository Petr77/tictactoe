window.onload = function(){
  var playerX = "X";
  var playerO = "O";
  var turns = 0;           // the game is only 9 turns long!!!!

  var currentPlayer = 'X';

  var board = [null,null,null,null,null,null,null,null,null];


  var checkWin = function(){


    var winningSquares = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    var winner;
    for (var i = 0; i < winningSquares.length; i++) {
      squares = winningSquares[i];
      if( board[squares[0]] !== null
      && board[squares[0]] === board[squares[1]] && board[squares[1]] === board[squares[2]] ){
          winner = board[squares[0]];
      }
    }
    if(winner){
      setTimeout(function(){alert("Winner is " + winner)}, 100);
    }
  };


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

  };

  $(".board > div").on('click', clickSquareHandler);


     //need remove class and set board to null!!
  var resetButton = function() {
    $('.board > div').removeClass("X O");
    //need to reset board to null!!!!
    board = [null,null,null,null,null,null,null,null,null];
  };

  $('#reset').on('click', resetButton);
  
};
