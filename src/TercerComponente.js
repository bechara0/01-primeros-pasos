import React from "react";
import propTypes from "prop-types";

export const TercerComponente = ({ nombre, apellidos, ficha }) => {
	return (
		<div>
			<h1>Comunicación entre componentes</h1>
			<ul>
				<li>{nombre}</li>
				<li>{apellidos}</li>
				<li>{ficha.alergias}</li>
			</ul>
		</div>
	);
};

TercerComponente.propTypes = {
	nombre: propTypes.string,
	apellidos: propTypes.string,
	ficha: propTypes.object,
};
