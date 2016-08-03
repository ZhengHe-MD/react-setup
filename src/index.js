import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import createLogger from 'redux-logger';

import App from './App';
import toggleDiv from './module/reducer';

const logger = createLogger();

const store = createStore(toggleDiv, applyMiddleware(logger));
/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	// eslint-disable-next-line no-undef
	document.getElementById('app')
);
