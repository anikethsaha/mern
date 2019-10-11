import React, { Component } from 'react';
import AppRouter from './router/appRouter.jsx';

class App extends Component {
    render() {
        return (
            <AppRouter { ...this.props } />
        );
    }
}

export default App;
