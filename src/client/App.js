import React from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';
import * as actions from './actions';
const App = ({ route }) =>{
	return (
		<div>
		<Header />
		{ renderRoutes(route.routes) }
		</div>
		);
}
export default {
 component : App,
 loadData: ({ dispatch }) => dispatch(actions.fetchCurrentUser())
};