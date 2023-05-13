<template>
	<p :style="{ backgroundColor: '#' + store.getTooltipText(), color: store.tooltipColor }" v-if="store.getTooltip()" ref="tooltip">#{{ store.getTooltipText() }}</p>
</template>

<script setup>
	import { onMounted, ref } from "vue";
	import { store } from "../assets/useStore";

	const tooltip = ref(null);

	onMounted(() => {
		document.addEventListener("mousemove", event => {
			if (tooltip.value) {
				tooltip.value.style.left = `${event.pageX + 16}px`;
				tooltip.value.style.top = `${event.pageY + 16}px`;
			}
		});
	});
</script>

<style scoped>
	p {
		position: absolute;
		font-size: 12px;
		top: 100%;
		left: 100%;
		padding: 0.5rem 0.875rem;
		border-radius: 0px 8px 8px 8px;
		animation: faseInOut 2s;
		transition: opacity 0.3 ease;
		border: solid rgba(0, 0, 0, 0.12) 1px;
	}
	@keyframes faseInOut {
		0% {
			opacity: 0;
		}
		25% {
			opacity: 1;
		}
		75% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
