import Cells from './Cells.jsx'

var BoardRow = (props) => {
	console.log(props.board)
	return (
		<tr id = {props.rowID[0]} >
		{props.board.map((cell, index) => {
		 return <Cells colID= {index} rowID = {props.rowID} handleMove = {props.handleMove} color = {props.color}/>
		})}
		</tr>
	)
}

export default BoardRow;