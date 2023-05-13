import { reactive, computed } from "vue";
import { useConverter } from "./useConverter";

export const store = reactive({
	// DO NOT CALL STATES DIRECTLY, USE GETTERS AND SETTERS

	// ------------------ TOOLTIP ------------------

	tooltip: false,
	tooltipText: "",
	tooltipColor: "",

	// GETTERS

	getTooltip() {
		return this.tooltip;
	},

	getTooltipText() {
		return this.tooltipText;
	},

	// METHODS

	toggleTooltip(item) {
		this.tooltipText = item;
		this.tooltip = !this.tooltip;
		//after 2s tooltip is closed
		setTimeout(() => {
			this.tooltip = false;
		}, 2000);
	},

	// ------------------- CARDS ------------------

	hex: "64748B",
	hexList: [
		// Default
		["50", "#f8fafc", true],
		["100", "#f8fafc", true],
		["200", "#f8fafc", true],
		["300", "#f8fafc", true],
		["400", "#f8fafc", true],
		["500", "#f8fafc", true],
		["600", "#f8fafc", false],
		["700", "#f8fafc", false],
		["800", "#f8fafc", false],
		["900", "#f8fafc", false],
		["950", "#f8fafc", false],
	],
	hsl: [0, 0, 0],
	hslList: [
		["50", [0, 0, 0], true],
		["100", [0, 0, 0], true],
		["200", [0, 0, 0], true],
		["300", [0, 0, 0], true],
		["400", [0, 0, 0], true],
		["500", [0, 0, 0], true],
		["600", [0, 0, 0], false],
		["700", [0, 0, 0], false],
		["800", [0, 0, 0], false],
		["900", [0, 0, 0], false],
		["950", [0, 0, 0], false],
	],

	// GETTERS

	getHex() {
		return this.hex;
	},

	getHexList() {
		this.hsl = useConverter.hexToHsl(this.hex);

		const h = this.hsl[0];
		const s = this.hsl[1];
		const l = this.hsl[2];

		let count = 95;
		const stepDown = (95 - l) / 5;

		this.hslList[0][1] = [h, s, 95];

		for (let i = 1; i < 6; i++) {
			count -= stepDown;
			this.hslList[i][1] = [h, s, parseInt(count.toFixed(0))];
		}

		const stepUp = (l - 15) / 5;

		for (let i = 6; i < 11; i++) {
			count -= stepUp;
			this.hslList[i][1] = [h, s, parseInt(count.toFixed(0))];
		}

		this.hslList.forEach((item, index) => {
			this.hexList[index][1] = useConverter.hslToHex(item[1]);
		});
		return this.hexList;
	},

	getHsl() {
		return this.hsl;
	},

	getHslList() {
		return this.hslList;
	},

	isLight(index) {
		return this.hslList[index][2];
	},

	// SETTERS

	setHex(hex) {
		this.hex = hex.toUpperCase();
		console.log("HEX Atualizado:", hex);
	},
});
