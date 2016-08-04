import React from 'react';

const TickTock = (props) => (
	<p>
		React has been running for {props.seconds} seconds.
	</p>
);

TickTock.propTypes = {
  seconds: React.PropTypes.number.isRequired,
};

export default TickTock;
