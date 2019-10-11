import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hello from '../components/hello,jsx';

const AppSwitch = () => (
    <Switch>
        <Route exact path='/' component={ Hello } exact />
        <Route exact path="/test" component={() => <div>TESTING ROUTE</div>} />
    </Switch>
);

export default AppSwitch;
