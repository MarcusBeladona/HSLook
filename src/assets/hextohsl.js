export default function hextohsl(hex) {
	// Extrai os componentes RGB do valor hex
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);

	// Divide os valores R, G e B por 255 para obter um valor normalizado entre 0 e 1
	r /= 255;
	g /= 255;
	b /= 255;

	// Encontra o valor mínimo e máximo entre os componentes RGB
	let cmin = Math.min(r, g, b);
	let cmax = Math.max(r, g, b);
	let delta = cmax - cmin;

	let h = 0,
		s = 0,
		l = 0;

	// Define o valor de luminosidade como a média entre o mínimo e máximo
	l = (cmax + cmin) / 2;

	// Se a diferença entre cmax e cmin for zero, a cor é acinzentada e não tem matiz
	if (delta == 0) {
		h = 0;
		s = 0;
	} else {
		// Se o vermelho for o componente dominante, calcula a matiz baseado nas diferenças entre verde e azul
		if (cmax == r) {
			h = ((g - b) / delta) % 6;
		}
		// Se o verde for o componente dominante, calcula a matiz baseado nas diferenças entre azul e vermelho
		else if (cmax == g) {
			h = (b - r) / delta + 2;
		}
		// Se o azul for o componente dominante, calcula a matiz baseado nas diferenças entre vermelho e verde
		else {
			h = (r - g) / delta + 4;
		}

		// Converte a matiz de graus para um valor entre 0 e 1
		h = Math.round(h * 60);
		if (h < 0) {
			h += 360;
		}

		// Calcula a saturação baseado na diferença entre cmax e cmin
		s = delta / (1 - Math.abs(2 * l - 1));
	}

	// Retorna o valor de HSL como uma string
	return [h, parseInt((s * 100).toFixed(0)), parseInt((l * 100).toFixed(0))];
}
