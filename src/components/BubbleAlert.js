import { Component } from "react";

const styles = {
	bubbleAlert: {
		backgroundColor: '#E9725A',
		borderRadius: '15px',
		color: '#FFF',
		padding: '2px 10px',
		fontSize: '0.9rem',
		width: '20px',
	}
};

export class BubbleAlert extends Component {

	render() {
		const { value } = this.props;
		return (
			<span style={styles.bubbleAlert}>
				{this.getNumber(value)}
			</span>
		);
	}

	getNumber(n) {
		if (!n) {
			return '';
		}

		return (n > 9) ? '9+' : n;
	}
}