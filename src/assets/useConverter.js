export const useConverter = {
	hexToHsl(hex) {
		// FFFAAA -> [0, 0, 0]
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

		// Retorna o valor de HSL como uma lista
		return [h, parseInt((s * 100).toFixed(0)), parseInt((l * 100).toFixed(0))];
	},
	hslToHex([h, s, l]) {
		// [0, 0, 0] -> FFFAAA
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
	},
};
