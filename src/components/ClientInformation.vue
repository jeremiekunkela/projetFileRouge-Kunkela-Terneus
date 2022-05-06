<template>
	<p>
		Prénom : {{ client.name }}
		<br>
		Nom : {{ client.surname }}
		<br>
		Numéro : {{ client.telephone }}
	</p>
</template>

<script>
	export default {
		props: [
			"client",
		]
	}
</script>