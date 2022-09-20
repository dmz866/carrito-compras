import { Component } from "react";
import { BubbleAlert } from "./BubbleAlert.js";
import { DetallesCarro } from "./DetallesCarro.js";

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
		const { carro, mostrarCarro, esCarroVisible } = this.props;
		const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

		return (
			<div>
				<span style={styles.bubble}>
					{(cantidad !== 0) ? <BubbleAlert value={cantidad} /> : ''}
				</span>
				<button style={styles.carro} onClick={mostrarCarro}>Carro</button>

				{(esCarroVisible) ? <DetallesCarro carro={carro} /> : null}
			</div >
		);
	}
}