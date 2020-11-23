import {React, Component} from 'react';

class Clock extends Component {

	date = new Date()
	state = {
		currentTime: this.date.toLocaleTimeString()
	}

	constructor() {
		super();
		setInterval(this.getMyTime, 1000)
	}

	getMyTime = () => {
		let d = new Date()
		this.setState({currentTime: d.toLocaleTimeString()})
	}

	render() {
		return (<span className="clock">{this.state.currentTime}</span>);
	}

}
export default Clock;
