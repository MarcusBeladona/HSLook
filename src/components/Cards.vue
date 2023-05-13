<script setup>
	import { computed, onMounted, ref } from "vue";
	import { store } from "../assets/useStore";

	const localList = computed(() => store.getHexList());
	const hover = ref(false);

	function copyToClipboard(item) {
		navigator.clipboard.writeText(item[1]);
		store.toggleTooltip(item[1]);
		store.tooltipColor = item[2] ? "black" : "white";
	}
</script>
<template>
	<section class="card-list">
		<article v-for="item in localList" :key="item[0]" class="card">
			<div :style="{ backgroundColor: '#' + item[1] }" @mouseover="hover = true" @mouseleave="hover = false" class="card-square" @click="copyToClipboard(item)">
				<p :style="{ color: item[2] ? 'black' : 'white' }">#{{ item[1] }}</p>
			</div>
			<p class="card-token">{{ item[0] }}</p>
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
