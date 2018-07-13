
var Cells = (props) => {
	return (
		<td className={props.color} id = {props.rowID + '' + props.colID} onClick = {props.handleMove}/>
	)

}


export default Cells