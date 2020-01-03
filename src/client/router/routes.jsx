/* eslint-disable react/display-name */
import React from 'react';

import Hello from '../components/hello';
const routes = [
	{
		path: '/',
		component: Hello,
		exact: true
	},
	{
		path: '/test',
		component: () => <div>TESTING ROUTE</div>,
		exact: true
	}
];

export default routes;
