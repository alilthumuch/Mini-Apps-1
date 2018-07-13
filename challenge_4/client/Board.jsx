
import BoardRow from './BoardRow.jsx'

var Board = (props) => {
	console.log(props.board)
	return (
		<table className = "rowWrap">
	   {props.board.map((rowID, index) => 
	   	<BoardRow rowID = {index} board = {props.board[index]} handleMove = {props.handleMove}/>
	   )}
	   </table>
	)
}

export default Board;