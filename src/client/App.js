import React, { Component } from 'react';
import AppRouter from './router/AppRouter';

class App extends Component {
    render() {
        return (
            <AppRouter { ...this.props } />
        );
    }
}

export default App;
