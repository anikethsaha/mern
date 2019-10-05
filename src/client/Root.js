import React from 'react';
import { Provider } from 'react-redux';

import store from './redux';

class Root extends React.Component {
  render() {
    const { children } = this.props;
    return <Provider store={store}>{children}</Provider>;
  }
}

export default Root;
