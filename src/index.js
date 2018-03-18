import 'babel-polyfill';
import express from 'express';
import http from 'http';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes'; 
const app = express();
app.use('/api',proxy('http://react-ssr-api.herokuapp.com', {
	proxyReqOptDecorator(opts){
		opts.headers['x-forwarded-host'] = 'localhost:3000';
		return opts;
	}
}));
app.use(express.static('public'));
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.get('*',  async (req, resp)=>{
	const store = createStore(req);

	const promise = matchRoutes(Routes, req.path).map(({route})=>{
		return route.loadData ? route.loadData(store) : null;
	}).map((promise)=>{
		if(promise)
		{
			return new Promise((resolve, reject)=>{
				promise.then(resolve).catch(resolve);
			});
		}
	});
	await Promise.all(promise);
		const context = {};
		const content = renderer(req, store, context);
		if(context.url)
		{
			return res.redirect(301, context.url);
		}
		if(context.notFound)
		{
			resp.status(404);
		}
		resp.send(content);
	
	
});




server.listen(port, ()=>{
	console.log('Listening on PORT: ',port);
});