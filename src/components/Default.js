import {React, Component} from 'react';

class Default extends Component {
	render() {
		var message = "Error Page";

		if(this.props.message) {
			message = this.props.message;
		}

		return (
			<div className="container">
				<h3>{message}</h3>
			</div>
		)
	}
}
export default Default;
