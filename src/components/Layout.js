import { Component } from "react";

const styles = {
	layout: {
		backgroundColor: '#FFF',
		color: '#A283E',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
	container: {
		width: '1200px'
	}
};

export class Layout extends Component {
	render() {
		return (
			<div style={styles.layout}>
				<div style={styles.container}>
					{this.props.children}
				</div>
			</div>
		);
	}
}