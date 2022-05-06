<template>
	<p>
		Prénom : <input type="text" v-model="name" />
		<br>
		Nom : <input type="text" v-model="surname" />
		<br>
		Numéro : <input type="text" v-model="telephone" />
	</p>
	<button @click="$emit('formSubmit', this)">Valider</button>
</template>

<script>
	export default {
		data() {
			return {
				name: this.name,
				surname: this.surname,
				telephone: this.telephone,
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