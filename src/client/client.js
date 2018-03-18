import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import axios from 'axios';
const axiosInstance = axios.create({
	baseURL: '/api'
});

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(ReduxThunk.withExtraArgument(axiosInstance)));
ReactDOM.hydrate(
	<Provider store={store}>
	<BrowserRouter>
	<div>{renderRoutes(Routes)}</div>
	</BrowserRouter>
	</Provider>,
	document.getElementById('root')
	);