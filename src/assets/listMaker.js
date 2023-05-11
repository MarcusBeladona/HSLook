import { hsltohex } from "./hsltohex.js";
export default function listMaker(hslMain) {
	const h = hslMain[0];
	const s = hslMain[1];
	const l = hslMain[2];

	const lista = [];
	let count = 15;

	lista.push([h, s, 15]);

	const stepUp = (l - 15) / 5;

	for (let i = 0; i < 5; i++) {
		count += stepUp;
		lista.push([h, s, count]);
	}

	const stepDown = (95 - l) / 5;

	for (let i = 0; i < 5; i++) {
		count += stepDown;
		lista.push([h, s, count]);
	}

	const listaHex = lista.map(item => hsltohex(item[0], item[1], item[2]));
	return listaHex.reverse();
}
