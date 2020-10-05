import React from 'react';
import { StoreProvider } from './store';

class Root extends React.Component {
	render() {
		const { children } = this.props;
		return <StoreProvider>{children}</StoreProvider>;
	}
}

export default Root;
