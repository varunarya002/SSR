import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';
export default (req) => {
	const axiosInstance  = axios.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: { cookie: req.get('cookie') || ''}
	});
	const store = createStore(reducers, {}, applyMiddleware(ReduxThunk.withExtraArgument(axiosInstance)));

	return store;
}
