<script setup>
import { ref } from "vue"
import { useRecolorStore } from "../db/useRecolorStore.js"
import Tooltip from "./Tooltip.vue"

const RecolorStore = useRecolorStore()
const itemCopy = ref({})

function copyToClipboard (item) {
	navigator.clipboard.writeText(item.color)
	itemCopy.value = item
}
</script>
<template>
	<section class="card-list">
		<article v-for="item in RecolorStore.getHexList()" :key="item.token" class="card">
			<div :style="{ backgroundColor: item.color }" class="card-square" @click="copyToClipboard(item)">
				<p :style="{ color: item.contrast > 4.5 ? 'black' : 'white' }">{{ item.color }}</p>
			</div>
			<p class="card-token">{{ item.token }}</p>
		</article>
	</section>
	<Tooltip :item="itemCopy"></Tooltip>
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
	display: flex;
	justify-content: center;
	align-items: center;
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

.card-square p {
	opacity: 0;
	transition: opacity 0.2s ease-out;
}

.card-square:hover p {
	opacity: 1;
	transition: opacity 0.2s ease-out;
}
</style>
