import React from 'react';
import Home from './pages/Home';
import UserLists from './pages/UserLists';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsPage from './pages/AdminsPage';

export default [
	{
		...App,
		routes: [
		{
			...Home,
			path: '/',
			exact: true
		},
		{
			...AdminsPage,
			path:'/admins'
		},
		{
			...UserLists,
			path:'/users',
		},
		{
			...NotFoundPage
		}

		]
	}
];
