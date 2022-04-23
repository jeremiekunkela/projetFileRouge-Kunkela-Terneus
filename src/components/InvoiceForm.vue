<template>
  <h1>Facture</h1>
  <p>Client : {{ clientFullName }}</p>
  <p>TVA : {{ invoice.client.tva }} %</p>
  <p>Échéance : {{ invoice.client.dueDate }}</p>
  <p>Prix total : {{ totalPrice }}</p>
  <h2>Client</h2>
  <template v-if="!displayClientForm">
    <ClientInformation
     v-bind:client="invoice.client"
      />
    <button v-on:click="showClientForm">Éditer</button>
  </template>
  <ClientForm
    v-else
    v-bind:client="invoice.client"
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
      <template v-for="(row, index) in invoice.rows"> 
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
import ClientInformation from "../components/Client.vue";
import ClientForm from "../components/ClientForm.vue";
import LineForm from "../components/LineForm.vue";
import Line from "../components/Line.vue";

export default {
  data() {
    return {
      displayClientForm: false,
      displayLineForm: [false],

      invoice: {
        client: {
          name: "",
          surname: "",
          telephone: "",
        },
        dueDate: new Date(),
        tva: 0,
        rows: [
          {
            designation: "",
            price: null,
            quantity: null,
          },
        ],
      },
    };
  },
  components: {
    ClientInformation,
    ClientForm,
    LineForm,
    Line,
  },
  computed: {
    clientFullName() {
      return `${this.invoice.client.name} ${this.invoice.client.surname} (${this.invoice.client.telephone})`;
    },
    totalPrice() {
      let total: number = 0;

      for (let row of this.invoice.rows) {
        total += Number(row.quantity) * Number(row.price);
      }

      return total;
    },
  },
  methods: {
    showClientForm() {
      this.displayClientForm = true;
    },
    hideClientForm(newClient) {
      this.displayClientForm = false;
      this.invoice.client.name = newClient.name;
      this.invoice.client.surname = newClient.surname;
      this.invoice.client.telephone = newClient.telephone;
    },
    handleEditLine(index) {
      this.displayLineForm.splice(index, 1, true);
    },
    handleEditLineFinished(index) {
      this.displayLineForm.splice(index, 1, false);
      console.log("line s'affiche");
    },
    addLine() {
      this.invoice.rows.push({
        designation: "",
        price: null,
        quantity: null,
      });
    },
  },
};
</script>