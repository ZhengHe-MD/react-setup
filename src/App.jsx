import React from 'react';
import { tickHOC } from './hoc';
import TickTock from './TickTock';

console.log(tickHOC);

const intervalFn = (state) => ({ seconds: state.seconds + 1 });

const WrappedA = tickHOC(TickTock, { seconds: 0 }, intervalFn);
const WrappedB = tickHOC(TickTock, { seconds: 3 }, intervalFn);
const WrappedC = tickHOC(TickTock, { seconds: 6 }, intervalFn);

const App = () => (
	<div>
		<WrappedA />
		<WrappedB />
		<WrappedC />
	</div>
);

export default App;
