import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppSwitch from './AppSwitch';

const AppRouter = (props) => (
    <Router { ...props }>
        <AppSwitch />
    </Router>
);

export default AppRouter;
