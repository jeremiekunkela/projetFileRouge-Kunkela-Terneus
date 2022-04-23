<template>
	<p>
		Prénom : <input type="text" v-model="name" />
		<br>
		Nom : <input type="text" v-model="surname" />
		<br>
		Numéro : <input type="phone" v-model="telephone" />
	</p>
	<button @click="$emit('formSubmit', this)">Valider</button>
</template>

<script>
	export default {
		data() {
			return {
				name: this.client.name,
				surname: this.client.surname,
				telephone: this.client.telephone,
			}
		},
		props: [
			"client",
		],
		emits: [
			"form-submit",
		],
	};
</script>