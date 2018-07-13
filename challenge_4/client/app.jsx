
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
				    ],
			currentPlayer: 1,
			gameOver: false,
			color: "lightGray"
		}
	}


	handleMove (event) {
		// console.log(event.target.id)
		//change board position to either 1 or 2. 
		//call win function 
		var row = Number(event.target.id[0]);
		var col = Number(event.target.id[1]);
		// console.log(row, col, typeof row)
		var split = JSON.stringify(event.target.id).split(',')
		// console.log(split)
		if (this.state.color === "red" || this.state.color === "lightGray"){
			this.setState({
				color: "black" 
			})
		} else {
			this.setState({
				color: "red" 
			})
		}


		if (this.state.currentPlayer === 1) {
			this.setState({
				currentPlayer: 2
			})
			this.state.board[row][col] = 2;
		} 
	    if (this.state.currentPlayer === 2) {
			this.setState({
				currentPlayer: 1
			})
			this.state.board[row][col] = 1;
		}
		console.log("YO CURRENT PLAYER", this.state.currentPlayer)
	
		
		this.checkBoardWin(this.state.board)
		if(this.state.gameOver === true) {
			console.log("game over")
		}
	}

	checkSingleArray (currentArray) {
	  //row win
	  	var moveCounter = 0;
	  	for (var i = 0; i < currentArray.length; i++){
	  		if(currentArray[i] === currentArray[i +1]) {
	  			moveCounter += 1;
	  			if(moveCounter === 3) {
	  				console.log(currentArray[i])
	  				this.setState({
	  					gameOver: true,
	  				})
	  				return currentArray[i];
	  			}
	  		} 
	  	}
	  	return false;
	  }

	checkBoardWin (board) {
	  	for (var row = 0; row < board.length; row++) {
	  		if (this.checkSingleArray(board[row]) === false) {
	  			return false;
	  		} else if (this.checkSingleArray(board[row]) === 1 || this.checkSingleArray(board[row]) === 2) {
	  			return this.checkSingleArray(board[row])
	  		}
	  	} 
	  	return false;
	}

	checkRowWin () {
		var board = this.state.board;
		checkBoardWin(board);
	}


	checkColWin (board) {
	  //col win 
	  var colBoard = [];

	  for (var row = 0; row < board.length; row ++) {
	  	var innerArr = [];
	  	for (var col = 0; col < board[row].length; col ++) {
	  		innerArr.push(board[col][row])
	  	}
	  	colBoard.push(innerArr)
	  }

	  checkBoardWin(colBoard)

	  // var checkSingleCol = function(colIndex) {
	  // 	var board = this.state.board
	  // 	var rowTracker = [];
	  // 	for (var row = 0; row < board.length; row ++) {
	  // 		if (board[row][colIndex] === 1) {
	  // 			rowTracker.push(row);
	  // 		}
	  // 	}
	  // 	for (var i = 0; i < rowTracker.length; i ++) {
	  // 		if (rowTracker[i] !== rowTracker[i] + 1) {
	  // 			return false;
	  // 		} 
	  // 	}
	  // 	return true;
	  // }

	  // var checkColWin = function() {
	  // 	var colIndex = [0,1,2,3,4,5,6]
	  // 	for (var i = 0; i < colIndex; i ++) {
	  // 		if (checkSingleCol[i] === false) {
	  // 			return false;
	  // 		}
	  // 	}
	  // 	return true;
	  // }	  
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
