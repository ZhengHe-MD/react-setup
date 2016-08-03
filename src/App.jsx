import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './module/action';

class App extends Component {

	constructor() {
		super();
		this.handleButtonClick = this.handleButtonClick.bind(this);
	}

	getSeeMeJSX() {
		const { hidden } = this.props;
		return hidden
			? null
			: <div>See Me?</div>;
	}

	handleButtonClick(e) {
		e.preventDefault();
		this.props.toggle();
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

App.propTypes = {
	hidden: PropTypes.bool,
	toggle: PropTypes.func,
};

const mapStateToProps = state => ({ hidden: state.hidden });
const mapDispatchToProps = { toggle: actions.toggleDiv };

export default connect(mapStateToProps, mapDispatchToProps)(App);
