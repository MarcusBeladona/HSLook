function hsltohex(h, s, l) {
	// Converte a saturação e a luminosidade para a escala de 0 a 1
	s /= 100;
	l /= 100;

	let c = (1 - Math.abs(2 * l - 1)) * s;
	let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
	let m = l - c / 2;

	let r, g, b;
	if (h >= 0 && h < 60) {
		r = c;
		g = x;
		b = 0;
	} else if (h >= 60 && h < 120) {
		r = x;
		g = c;
		b = 0;
	} else if (h >= 120 && h < 180) {
		r = 0;
		g = c;
		b = x;
	} else if (h >= 180 && h < 240) {
		r = 0;
		g = x;
		b = c;
	} else if (h >= 240 && h < 300) {
		r = x;
		g = 0;
		b = c;
	} else {
		r = c;
		g = 0;
		b = x;
	}

	// Converte os valores RGB para hexadecimal
	r = Math.round((r + m) * 255)
		.toString(16)
		.padStart(2, "0");
	g = Math.round((g + m) * 255)
		.toString(16)
		.padStart(2, "0");
	b = Math.round((b + m) * 255)
		.toString(16)
		.padStart(2, "0");

	return (r + g + b).toUpperCase();
}

export { hsltohex };
