<template>
    <router-link to="/">retour</router-link>
    <InvoiceForm />
</template>
<script lang='ts'>
import InvoiceForm from '@/components/InvoiceForm.vue'

export default {
    components : {
        InvoiceForm,
    }
}
</script>
