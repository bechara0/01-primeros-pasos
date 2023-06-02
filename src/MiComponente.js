// importar módulos react
import React from "react";

// función del componente
const MiComponente = () => {
	let usuario = {
		nombre: "Juan",
		apellidos: "Bechara Baladi",
		web: "juanbechara.com",
	};
	return (
		<div className="mi-componente">
			<hr />
			<h2>Componente Creado</h2>
			<h3>Datos de usuarios:</h3>
			<li>
				Nombre: <strong>{usuario.nombre}</strong>
			</li>
			<li>
				Nombre: <strong>{usuario.apellidos}</strong>
			</li>
			<li>Web: {usuario.web} </li>
			<p>Este es mi primer componente</p>
			<ul>
				<li>React</li>
				<li>Angular</li>
				<li>Vue</li>
			</ul>
		</div>
	);
};

// exports
export default MiComponente;
