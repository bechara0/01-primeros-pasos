import logo from "./logo.svg";
import "./App.css";
import MiComponente from "./MiComponente";
import SegundoComponente from "./SegundoComponente";
import { TercerComponente } from "./TercerComponente";

function App() {
	const ficha_medica = {
		altura: "1.9m",
		grupo: "AB+",
		estado: "Regular",
		alergias: "Penicillina",
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Bienvenido al Master en React</p>
				{/*cargar primer componente*/}
				<div className="componentes">
					<hr />
					<TercerComponente
						nombre="Juan"
						apellidos="Bechara Baladi"
						ficha={ficha_medica}
					/>
					<hr />
					<SegundoComponente />
					<hr />
					<MiComponente />
				</div>
			</header>
		</div>
	);
}

export default App;
