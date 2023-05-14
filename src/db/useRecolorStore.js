import { reactive, ref, watch } from "vue";
import { defineStore } from "pinia";

import Color from "color";

export const useRecolorStore = defineStore("Recolor", () => {
	// STATES

	const hex = ref("65758B");
	const hsl = ref([0, 0, 0]);

	const hexList = reactive([]);
	const hslList = reactive([]);
	const tokens = ref(["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]);

	// GETTERS

	function getHex() {
		return hex;
	}

	function getHsl() {
		return hsl;
	}

	function getHexList() {
		return hexList;
	}

	function getHhslList() {
		return hslList;
	}

	// ACTIONS

	function setHex(newHex) {
		hex.value = newHex;
	}

	// WATCHERS

	watch(
		hex,
		hex => {
			hsl.value = Color("#" + hex)
				.hsl()
				.round()
				.array();
		},
		{
			immediate: true,
		}
	);

	watch(
		hsl,
		hsl => {
			const [h, s, l] = [hsl[0], hsl[1], hsl[2]];

			let count = 95;
			const listL = [];

			listL.push([h, s, 95]);

			const stepDown = (95 - l) / 5;

			for (let i = 1; i < 6; i++) {
				count -= stepDown;
				listL.push([h, s, parseInt(count.toFixed(0))]);
			}

			const stepUp = (l - 15) / 5;

			for (let i = 6; i < 11; i++) {
				count -= stepUp;
				listL.push([h, s, parseInt(count.toFixed(0))]);
			}

			hslList.splice(0, hslList.length);
			tokens.value.forEach((token, index) => {
				hslList.push({
					token: token,
					color: listL[index],
				});
			});
		},
		{
			immediate: true,
		}
	);

	watch(
		hslList,
		hslList => {
			hexList.splice(0, hexList.length);
			hslList.forEach(hsl => {
				const getColor = Color.hsl(hsl.color).hex();
				const getContrast = parseFloat(Color.hsl(hsl.color).contrast(Color("#000000")).toFixed(2));
				hexList.push({
					token: hsl.token,
					color: getColor,
					contrast: getContrast,
				});
			});
		},
		{
			immediate: true,
		}
	);

	return {
		getHex,
		getHsl,
		getHexList,
		getHhslList,
		setHex,
	};
});
