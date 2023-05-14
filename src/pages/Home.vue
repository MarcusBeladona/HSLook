<script setup>
import CustomInput from "../components/CustomInput.vue"
import Cards from "../components/Cards.vue"
</script>

<template>
	<main>
		<section>
			<CustomInput></CustomInput>
			<Cards></Cards>
			<footer><a href="https://marcusbeladona.com">@MarcusBeladona</a></footer>
		</section>
	</main>
</template>

<style scoped>
main {
	width: auto;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

main>section {
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
</style>
