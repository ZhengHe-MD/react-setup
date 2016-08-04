import React, { PureComponent, PropTypes } from 'react';

class App extends PureComponent {
	render() {
		return (
			<div>{this.props.text}</div>
		);
	}
}

App.propTypes = {
	text: PropTypes.string,
};

App.defaultProps = {
	text: 'hello',
};

export default App;
