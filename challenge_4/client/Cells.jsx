
var Cells = (props) => {
	return (
		<td className="row" id = {props.rowID + '' + props.colID} onClick = {props.handleMove}/>
	)

}


export default Cells