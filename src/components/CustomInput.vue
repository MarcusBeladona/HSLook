<script setup>
	import { ref, computed } from "vue";
	import { useRecolorStore } from "../db/useRecolorStore.js";
	const RecolorStore = useRecolorStore();

	const input = ref("65758B");

	const isInputValid = computed(() => {
		// Checks if input is from A to F or from 0 to 9
		// including # or not and it's bigger than 5
		if (input.value.match("^#?[0-9a-fA-F]+$") && input.value.length > 5) {
			return true;
		} else return false;
	});

	const validateInput = () => {
		// UpperCase
		input.value = input.value.toUpperCase();
		// Case: #AAABBB
		if (input.value[0] === "#") {
			input.value = input.value.slice(1);
		}
		// Case: AAABBBc
		if (input.value.length > 6) {
			input.value = input.value.slice(0, 6);
		}
		// Case: True
		if (isInputValid.value) {
			RecolorStore.setHex(input.value);
		}
	};
</script>
<template>
	<article>
		<label for="input">#</label>
		<input id="input" type="text" :class="{ invalid: !isInputValid }" placeholder="HEX" :maxlength="7" v-model.trim="input" @input="validateInput" />
	</article>
</template>

<style scoped>
	article {
		height: 40px;
		display: inline-flex;
		border: 1px solid rgba(0, 0, 0, 0.12);
		border-radius: 8px;
		overflow: hidden;
	}

	label {
		width: 40px;
		height: inherit;
		font-size: 20px;
		display: flex;
		color: rgba(0, 0, 0, 0.36);
		align-items: center;
		justify-content: center;
		border-right: rgba(0, 0, 0, 0.12) 1px solid;
	}

	input {
		height: inherit;
		text-align: center;
		width: 88px;
		background: rgba(0, 0, 0, 0.04);
		border: none;
		font-size: 0.875rem;
	}

	input:focus {
		outline: none;
	}

	.invalid {
		background-color: rgba(255, 0, 0, 0.04);
		color: rgb(212, 0, 0);
	}
</style>
