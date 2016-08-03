import React, { Component } from 'react';

class App extends Component {

	constructor() {
		super();
		this.state = { hidden: false };
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	getSeeMeJSX() {
		const { hidden } = this.state;
		return hidden
			? null
			: <div>See Me?</div>;
	}

	handleButtonClick(e) {
		e.preventDefault();
		const { hidden } = this.state;
		this.setState({ hidden: !hidden });
	}

	render() {
		const seeMeJSX = this.getSeeMeJSX();
		return (
			<div>
				<button onClick={this.handleButtonClick}>Click To See Me!</button>
				{seeMeJSX}
			</div>
		);
	}
}

export default App;
