import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hello from '../components/hello,jsx';

const AppSwitch = () => (
    <Switch>
        <Route path='/' component={ Hello } exact />
    </Switch>
);

export default AppSwitch;
