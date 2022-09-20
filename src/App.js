import { Component } from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
import { Productos } from './components/Productos';
import { Title } from './components/Title';

class App extends Component {
	state = {
		productos: [
			{ name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
			{ name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
			{ name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg' },
		],
		carro: [
		],
		esCarroVisible: false,
	};

	mostrarCarro = () => {
		if (this.state.carro?.length > 0) {
			this.setState({ esCarroVisible: !this.state.esCarroVisible });
		}
	}

	render() {
		return (
			<div>
				<NavBar mostrarCarro={this.mostrarCarro} carro={this.state.carro} esCarroVisible={this.state.esCarroVisible} />
				<Layout>
					<Title />
					<Productos
						agregarAlCarro={this.agregarAlCarro}
						productos={this.state.productos}>
					</Productos>
				</Layout>
			</div>
		);
	}

	agregarAlCarro = (producto) => {
		const { carro } = this.state;

		if (carro.find(p => p.name === producto.name)) {
			const newCarro = carro.map(p => {
				if (p.name === producto.name) {
					return { ...p, cantidad: p.cantidad + 1 }
				}

				return p;
			});
			return this.setState({ carro: newCarro });
		}

		this.setState({
			carro: [...this.state.carro, { ...producto, cantidad: 1 }]
		});
	}
}

export default App;
