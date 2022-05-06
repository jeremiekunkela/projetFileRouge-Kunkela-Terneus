<template>
  <router-view></router-view>
  <h2>Liste des Factures :</h2>
  <br />
  <table>
    <thead>
      <tr>
        <td>Numéro</td>
        <td>Client</td>
        <td>Date</td>
        <td>Montant en €</td>
      </tr>
      <tr>
        <td>0</td>
        <td>{{ store.clientFullName }}</td>
        <td>{{ store.invoice.dueDate }}</td>
        <td>{{ store.totalPrice }}</td>
      </tr>
      <router-link to="/invoice">ma facture</router-link>
    </thead>
  </table>
</template>

<script lang ="ts">
import { useInvoiceStore } from "@/stores/invoice";

export default {
  setup() {
    const store = useInvoiceStore();
    return { store };
  },
};
</script>
          

