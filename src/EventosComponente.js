import React from "react";

export const EventosComponente = () => {
	const darClick = (e) => {
		alert("Tremendo Click!!!");
	};
	return (
		<div>
			<h1>Eventos en React</h1>

			{/* Evento click */}
			<button onClick={darClick}>Dame Click</button>
		</div>
	);
};
