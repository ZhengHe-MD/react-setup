import { createStore } from 'redux';
import { Provider } from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import toggleDiv from './module/reducer';

const store = createStore(toggleDiv);
/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	// eslint-disable-next-line no-undef
	document.getElementById('app')
);
