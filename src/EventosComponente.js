import React from "react";

export const EventosComponente = () => {
	const darClick = (e, nombre) => {
		alert("Tremendo Click!!! " + nombre);
	};

	function darDobleClick(e) {
		alert("Has dado doble click");
	}

	const hasEntrado = (e, accion) => {
		alert("Has " + accion + " a la caja con el mousse!");
	};

	const estasDentro = (e) => {
		console.log("Estas dentro el input, mete el nombre");
	};

	const estasFuera = (e) => {
		console.log("Estas fuera el input, mete el nombre");
	};

	return (
		<div>
			<h1>Eventos en React</h1>

			<p>
				{/* Evento click */}
				<button onClick={(e) => darClick(e, "Juancho")}>Dame Click</button>
			</p>
			<p>
				{/* Evento Doble click */}
				<button onDoubleClick={darDobleClick}>Dame Doble Click</button>
			</p>
			<div
				id="caja"
				onMouseEnter={(e) => hasEntrado(e, "entrado")}
				onMouseLeave={(e) => hasEntrado(e, "salido")}
			>
				{/* Evento mousse enter mousse leave */}
				Pasa por encima!
			</div>
			<p>
				<input
					type="text"
					placeholder="Introduce tu nombre"
					onFocus={estasDentro}
					onBlur={estasFuera}
				></input>
			</p>
		</div>
	);
};
