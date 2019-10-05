import React from 'react';
// import PropTypes from 'prop-types'; This was not being used
import {Provider} from 'react-redux'
import store from "../../client/redux";

import {
  Switch,
  HashRouter ,
  Route,
} from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
           
              <Provider store = {store}> 
                <div>
                     <HashRouter>
                      <Switch>
                        <Route exact path="/hello" component={() => <h1>Hello</h1> } />
                        <Route exact path="/world" component={() => <h1>World</h1> } />
                      </Switch>
                    </HashRouter>
                </div>
               </Provider>
         
        );
    }
}

App.propTypes = {};

export default App;
