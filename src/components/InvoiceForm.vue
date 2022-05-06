<template>
  <h1>Facture</h1>
  <p>Client : {{ store.clientFullName }}</p>
  <p>TVA : {{ store.invoice.tva }} %</p>
  <p>Échéance : {{ store.invoice.dueDate }}</p>
  <p>Prix total : {{ store.invoice.totalPrice }}</p>
  <h2>Client</h2>
  <template v-if="!displayClientForm">
    <ClientInformation v-bind:client="store.invoice.client" />
    <button v-on:click="showClientForm">Éditer</button>
  </template>
  <ClientForm
    v-else
    v-bind:client="store.invoice.client"
    v-on:form-submit="hideClientForm"
  />

   <h2>Lignes :</h2>
  <table>
    <thead>
      <tr>
        <td>Designation</td>
        <td>Prix</td>
        <td>Quantite</td>
        <td>Total</td>
      </tr>
    </thead>
    <tbody>
      <template v-for="(row, index) in store.invoice.rows">
        <Line
          v-if="!displayLineForm[index]"
          v-bind:line="row"
          @click="handleEditLine(index)"
        />
        
        <LineForm
          v-else
          v-bind:line="row"
          @finished-addition="handleEditLineFinished(index)"
        /> 
   </template> 
  </tbody>
    <button v-on:click="addLine">Ajouter une ligne</button>
  </table>  
</template>

<script lang ="ts">
import ClientInformation from "@/components/ClientInformation.vue";
import ClientForm from "@/components/ClientForm.vue";
import LineForm from "@/components/LineForm.vue";
import Line from "@/components/Line.vue";
import { useInvoiceStore } from "@/stores/invoice";

export default {
  setup() {
    const store = useInvoiceStore();
    return { store };
  },
  data() {
    return {
      displayClientForm: false,
      displayLineForm: [false],
    };
  },
  components: {
    ClientInformation,
    ClientForm,
    LineForm,
    Line,
  },

  methods: {
    showClientForm() {
      this.displayClientForm = true;
    },
    hideClientForm(newClient) {
      this.displayClientForm = false;
      this.store.invoice.client.name = newClient.name;
      this.store.invoice.client.surname = newClient.surname;
      this.store.invoice.client.telephone = newClient.telephone;
    },

    handleEditLine(index) {
      this.displayLineForm.splice(index, 1, true);
    },
    handleEditLineFinished(index) {
       this.displayLineForm.splice(index, 1, false);
    },
    addLine() {
      this.store.invoice.rows.push({
        designation: "",
        price: null,
        quantity: null,
      });
    },
  },
};
</script>
