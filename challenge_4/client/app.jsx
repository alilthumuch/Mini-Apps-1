
import Board from './Board.jsx'

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			row: [0,1,2,3,4,5],
			board: [ [0, 0, 0, 0, 0, 0, 0], 
					 [0, 0, 0, 0, 0, 0, 0], 
					 [0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0],
					 [0, 0, 0, 0, 0, 0, 0] 
				    ]
		}
	}

	handleMove (event) {
		console.log(event.target.id)
		//change board position from 0 to 1
		//call win function
	}

	checkSingleArray (currentArray) {
	  //row win
	  	var moveCounter = 0;
	  	for (var i = 0; i < currentArray.length; i++){
	  		if(currentArray[i] === currentArray[i +1]) {
	  			moveCounter += 1;
	  			if(moveCounter ==== 4) {
	  				return currentArray[i];
	  			}
	  		} 
	  	}
	  	return false;
	  }

	checkBoardWin (board) {
	  	for (var row = 0; row < board.length; row++) {
	  		if (checkSingleArray(board[i]) === false) {
	  			return false;
	  		} else if (checkSingleArray(board[i]) === 1 || checkSingleArray(board[i]) === 2) {
	  			return checkSingleArray(board[i])
	  		}
	  	} 
	  }
	}



	checkRowWin () {
		var board = this.state.board
		checkBoardWin(board);
	}



	checkColWin () {
	  //col win 
	  var colArray = [];

	  for (var row = 0; row < board.length; row ++) {
	  	var innerArr = [];
	  	for (var col = 0; col < board[row].length; col ++) {
	  		innerArr.push(board[col][row])
	  	}
	  }


	  var checkSingleCol = function(colIndex) {
	  	var board = this.state.board
	  	var rowTracker = [];
	  	for (var row = 0; row < board.length; row ++) {
	  		if (board[row][colIndex] === 1) {
	  			rowTracker.push(row);
	  		}
	  	}
	  	for (var i = 0; i < rowTracker.length; i ++) {
	  		if (rowTracker[i] !== rowTracker[i] + 1) {
	  			return false;
	  		} 
	  	}
	  	return true;
	  }

	  var checkColWin = function() {
	  	var colIndex = [0,1,2,3,4,5,6]
	  	for (var i = 0; i < colIndex; i ++) {
	  		if (checkSingleCol[i] === false) {
	  			return false;
	  		}
	  	}
	  	return true;
	  }
	  


	  //diagonal win
	}

	render () {
		return (
			<div>
			<Board rowID = {this.state.row} board = {this.state.board} handleMove = {this.handleMove.bind(this)} />
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('app'));
