<script setup>
import { onMounted, onUpdated, reactive } from "vue";
import hextohsl from "../assets/hextohsl";
import listMaker from "../assets/listMaker";

const props = defineProps(["hexMain"]);
const lista = listMaker(hextohsl(props.hexMain));
const tokens = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
function copyToClipboard(item) {
	navigator.clipboard.writeText(item);
}
</script>
<template>
	<!-- CARD LIST -->
	<section class="card-list">
		<article v-for="(item, index) in lista" :key="item" class="card">
			<div :style="{ backgroundColor: '#' + item }" class="card-square" @click="copyToClipboard(item)"></div>
			<p class="card-token">{{ tokens[index] }}</p>
		</article>
	</section>
</template>

<style scoped>
.card-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 16px;
}

.card {
	height: fit-content;
	display: flex;
	gap: 8px;
	flex-direction: column;
	justify-content: center;
}

.card-square {
	border: solid rgba(0, 0, 0, 0.06) 1px;
	width: 92px;
	height: 92px;
	border-radius: 8px;
	transition: transform 0.2s ease-out;
}

.card-square:hover {
	cursor: pointer;
	transform: scale(1.05);
	transition: transform 0.2s ease-out;
	outline: solid rgba(0, 0, 0, 0.04) 4px;
}

.card-square:active {
	transform: scale(0.95);
	transition: transform 0.1s ease-in-out;
	outline: solid rgba(0, 0, 0, 0.04) 2px;
}

.card-token {
	text-align: center;
}
.card-light {
	text-align: center;
}
</style>
