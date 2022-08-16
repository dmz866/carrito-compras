import { Component } from "react";
import { BubbleAlert } from "./BubbleAlert.js";

const styles = {
	carro: {
		backgroundColor: '#359A2C',
		color: '#FFF',
		border: 'none',
		padding: '15px',
		borderRadius: '15px',
		cursor: 'pointer',
	},
	bubble: {
		position: 'relative',
		left: '12px',
		top: '20px',
	}
};

export class Carro extends Component {
	render() {
		return (
			<div>
				<span style={styles.bubble}>
					<BubbleAlert value={5} />
				</span>
				<button style={styles.carro}>
					Carro
				</button>
			</div>
		);
	}
}