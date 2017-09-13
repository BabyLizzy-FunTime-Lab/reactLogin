let userdata = {
	username: "derp",
	password: "1234"
}

class ReactLogin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: ""
		};

		this.loginBTn = this.loginBTn.bind(this);
		this.handelInput = this.handelInput.bind(this);
	}

	loginBTn() {
		console.log("el buuuton werks")
		// here I compare the userdate with the input


	}

	handelInput() {

	}

	render() {
		return (
			<div> El Logo a tu in
				<div>
					<input type="text" name="username" placeholder="Username" 
					value={this.state.username} onChange={this.} />
				</div>
				<div>
					<input type="password" name="password" placeholder="Password" />
				</div>
				<div>
					<button name="Elbuuuton" onClick={this.loginBTn}>Let me in!!</button>
				</div>
			</div>
		);
	}
}

function renderLogin() {
	ReactDOM.render(
		<ReactLogin />,
		document.getElementById("app")
	);
}

document.addEventListener("DOMContentLoaded", renderLogin);

if (document.getElementById("app")){
  renderLogin();
};