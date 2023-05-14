<script setup>
import { ref, watch } from "vue"

const toast = ref("")

const props = defineProps({
	item: {
		type: Object,
	},
})

watch(
	() => props.item,
	() => {
		if (props.item.color) {
			toast.value.style.opacity = "1"
			toast.value.style.animation = "fadeIn 0.5s ease-in"

			setTimeout(() => {
				toast.value.style.opacity = "0"
				toast.value.style.animation = "fadeOut 0.5s ease-out"
			}, 2000)
		}
	}
)

document.addEventListener("mousemove", event => {
	toast.value.style.left = `${event.pageX + 12}px`
	toast.value.style.top = `${event.pageY + 16}px`
})
</script>

<template>
	<button :style="{ backgroundColor: item.color, color: item.contrast > 4.5 ? 'black' : 'white' }" ref="toast">
		{{ item.color }}
	</button>
</template>

<style scoped>
button {
	opacity: 0;
	z-index: 999;
	width: fit-content;
	padding: 0px 16px;
	height: 36px;
	position: absolute;
	border-radius: 0px 8px 8px 8px;
	transition: opacity 0.3s ease-in-out;
	border: solid rgba(0, 0, 0, 0.04) 1px;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}

@keyframes fadeOut {
	0% {
		opacity: 1;
	}

	100% {
		opacity: 0;
	}
}
</style>
