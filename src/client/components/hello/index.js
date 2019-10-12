import React from 'react';
import styles from './style.css';

const { container } = styles;

class Hello extends React.Component {
	render() {
		return (
			<div className={container}>
				<img
					src="https://imgur.com/yr0sfsR.png"
					alt="LOGO"
					style={{
						display: 'block',
						marginLeft: 'auto',
						marginRight: 'auto',
						width: '50%'
					}}
				/>
			</div>
		);
	}
}

export default Hello;
