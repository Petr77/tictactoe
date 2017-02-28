window.onload = function(){
  var playerX = "X";
  var playerO = "O";
  var turns = 0;           // the game is only 9 turns long!!!!

  var currentPlayer = 'X';

  var checkWin = function () {

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

    // [0,1,2]
    //win if any player get these squares!!

    var winner = ''

    if( board[0] === board[1] && board[1] === board[2] ){
      winner = board[0];
    }else if ( board[3] === board[4] && board[4] === board[5] ){
      winner = board[3];
    }else if ( board[6] === board[7] && board[7] === board[8] ){
      winner = board[6];
    }else if ( board[0] === board[3] && board[3] === board[6] ){
      winner = board[0];
    }else if ( board[1] === board[4] && board[4] === board[7] ){
      winner = board[1];
    }else if ( board[2] === board[5] && board[5] === board[8] ){
      winner = board[2];
    }else if ( board[0] === board[4] && board[4] === board[8] ){
      winner = board[0];
    }else if ( board[2] === board[4] && board[4] === board[6] ){
      winner = board[2];
    };

    if(winner){
      alert("Winner is " + winner);
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

// var winningSquares = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,8]];

// for (var i = 0; i < winningSquares.length; i++) {
//   squares = winningSquares[i];
//   if( board[squares[0]] === board[squares[1]] && board[squares[1]] === board[squares[2]] ){
//     winner = board[squares[0]];
//   }
// }
