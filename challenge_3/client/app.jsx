
// import axios from 'axios';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
			name: "",
			email: "",
			password: "",
			address1: "",
			address2: "",
			state: "",
			zip: 1,
			cardNumber: 1,
			expiryDate: 1,
			cvv: 1,
			billingZip: 1,
		}
	}

	handleChange (event) {
		var obj = {};
		obj[event.target.id] = event.target.value;
		this.setState(obj);

		console.log(this.state)
	}

	handleSubmit (event) {
		event.preventDefault();
		this.setState({
			currentPage: this.state.currentPage + 1
		})

	}

	
	postRequest(info) {
		axios.post('/', grocery)
		.then(results =>  console.log("Post"))
		.catch(err => console.log('err posting', err));
	}

	// render() {
	// 	return (
	// 		<div>Yo</div>
	// 	)
	// }

	render () {
		if (this.state.currentPage === 0) {
			return (
				<form onSubmit = {this.handleSubmit.bind(this)}>
				  <input value = "checkout" type= "submit"/>
				</form>
			)
		} 
		else if (this.state.currentPage === 1) {
			return (
				<Login onSubmit = {this.handleSubmit.bind(this)} onChange = {this.handleChange.bind(this)}/>
			)
		} 
		else if (this.state.currentPage === 2) {
			return (
				<Address onSubmit = {this.handleSubmit.bind(this)} onChange = {this.handleChange.bind(this)}/>
			)
		} else if (this.state.currentPage === 3) {
			return (
				<Credit onSubmit = {this.handleSubmit.bind(this)} onChange = {this.handleChange.bind(this)}/>
			)
		} else if (this.state.currentPage ===4) {
			return (
				<FinalPage />
			)
		}
	}
}

var Login = (props) => {
	return (
		<div>
			<form onSubmit = {props.onSubmit}>
			  Name: <br/>
			  <input type="text" id="name" onChange = {props.onChange}/><br/>
			  Email:<br/>
			  <input type="text" onChange = {props.onChange}/>
			  Password:<br/>
			  <input type="text" onChange = {props.onChange}/>
			   <input value = "next" type= "submit"/>
			</form>
			
		
		</div>
	)
}

var Address = (props) => {
	return (
		<div>
			<form onSubmit = {props.onSubmit}>
			  Address1: <br/>
			  <input type="text" /><br/>
			  Address2: <br/>
			  <input type="text"/>
			  state:<br/>
			  <input type="text"/>
			  zip:<br/>
			  <input type="text"/>
			  userID:<br/>
			  <input type="text"/>
			  <input value = "next" type= "submit"/>
			</form>
			 
		</div>
	)
}


var Credit = (props) => {
	return (
		<div>
			<form onSubmit = {props.onSubmit}>
			  cardNumber: <br/>
			  <input type="text"/><br/>
			  expiryDate: <br/>
			  <input type="text"/>
			  cvv:<br/>
			  <input type="text"/>
			  zip:<br/>
			  <input type="text"/>
			  <input value = "next" type= "submit"/>
			</form>
			
		</div>
	)
}

var FinalPage = (props) => {
	return (
		<div>
		<h1>purchase donee</h1>
		</div>
	)
}



ReactDOM.render(<App />, document.getElementById('app'))