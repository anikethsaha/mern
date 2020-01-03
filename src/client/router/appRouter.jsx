import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Hello from '../components/hello';

const AppRouter = props => (
	<Router {...props}>
		<Switch>
			<Route exact path="/" component={Hello} />
			<Route exact path="/test" component={() => <div>TESTING ROUTE</div>} />
		</Switch>
	</Router>
);

export default AppRouter;
