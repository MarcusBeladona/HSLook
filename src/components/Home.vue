<script setup>
import { ref } from "vue";
import Cards from "./Cards.vue";

const input = ref("");
const hex = ref("");
const isValidHex = ref(true);
const maxlength = ref(7);

const inputFixer = () => {
	input.value = input.value.toUpperCase();
	if (input.value.includes("#")) {
		maxlength.value = 6;
		hex.value = input.value.replace("#", "").toUpperCase();
		input.value = input.value.replace("#", "").toUpperCase();
	}
	if (input.value.length === 6 && !input.value.match(/[g-z]/i)) {
		hex.value = input.value.toUpperCase();
		isValidHex.value = true;
	} else {
		isValidHex.value = false;
	}
};
</script>
<template>
	<main>
		<section>
			<header>
				<input v-model="input" @input="inputFixer" placeholder="Digite um HEX" type="text" :maxlength="maxlength" />
			</header>
			<Cards v-if="isValidHex" :hexMain="hex" />
		</section>
		<footer><a href="http://marcusbeladona.com/">@MarcusBeladona</a></footer>
	</main>
</template>

<style scoped>
main {
	width: auto;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8rem;
}

main > section {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 6rem;
}

footer {
	display: flex;
	padding-bottom: 2rem;
	justify-content: center;
	font-size: 14px;
}

footer a {
	color: rgb(47, 72, 141);
	text-decoration: none;
}

/* HEADER */

header {
	display: flex;
	flex-direction: column;
	align-items: center;
}

header input {
	min-width: fit-content;
	width: 200px;
	text-align: center;
	padding: 1rem;
	background-color: rgba(0, 0, 0, 0.04);
	border: solid rgba(0, 0, 0, 0.12) 2px;
	border-radius: 6px;
	color: black;
}
</style>
