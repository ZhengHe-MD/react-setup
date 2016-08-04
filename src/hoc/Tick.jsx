import React, { Component } from 'react';

const tickHOC = (ChildComponent, state, intervalFn) => class extends Component {
	constructor(props) {
		super(props);
		this.state = state;
		this.tick = this.tick.bind(this);
	}

	componentWillMount() {
		this.intervals = [];
	}

	componentWillUnmount() {
		this.intervals.forEach(clearInterval);
	}

	componentDidMount() {
		this.setInterval(this.tick, 1000);
	}

	setInterval() {
		/* eslint-disable */
		this.intervals.push(setInterval.apply(null, arguments));
		/* eslint-enable */
	}

	tick() {
		this.setState(intervalFn(this.state));
	}

	render() {
		return <ChildComponent {...this.props} {...this.state} />;
	}
};

export default tickHOC;
