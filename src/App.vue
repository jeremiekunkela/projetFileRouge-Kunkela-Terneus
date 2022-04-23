<script lang="ts">
export default {
  data() {
    return {
      invoice :{
      name: "",
      surname: "",
      telephone: "",
      dueDate: new Date(),
      tva:0,
      rows: []
      },
    };
  },
  methods: {
    addLine(event) {
      this.invoice.rows.push([
        {
          designation: "",
          price: 0,
          amount: 0,
          total: 0,
        },
      ]);
    },
    getTotalLinePrice(price, amount) {
      return price * amount;
    },
    getfinalPrice() {
      let finalPrice;
      finalPrice = 0;
      for (let row of this.invoice.rows) {
        finalPrice += this.getTotalLinePrice(row.price, row.amount);
      }

      return finalPrice;
    },
  },
};
</script>

<template>
  <section>
    <h1>Facture :</h1>
    <p>Client : {{ invoice.surname }} {{ invoice.name }} ({{ invoice.telephone }})</p>
    <p>TVA : {{ invoice.tva }}</p>
    <p>Echéance : {{ invoice.dueDate }}</p>
    <p>Prix Total : {{ getfinalPrice() }}</p>
  </section>
  <section>
    <h1>Client :</h1>
    <input v-model="invoice.surname" placeholder="Nom" />
    <input v-model="invoice.name" placeholder="Prenom" />
    <input v-model="invoice.telephone" placeholder="Téléphone" />
  </section>
  <section>
    <h1>Lignes :</h1>
    <input type="button" value="Ajouter une ligne" v-on:click="addLine" />
    <table>
      <tr>
        <td>Designation</td>
        <td>Prix</td>
        <td>Quantite</td>
        <td>Total</td>
      </tr>
      <tr v-for="row in invoice.rows">
        <td>
          <input type="text" v-model="row.designation" placeholder="Designation"
          />
        </td>
        <td><input type="text" v-model="row.price" placeholder="Prix" /></td>
        <td>
          <input type="text" v-model="row.amount" placeholder="Quantite" />
        </td>
        <td>
          <p>{{ getTotalLinePrice(row.price, row.amount) }}</p>
        </td>
      </tr>
    </table>
  </section>
</template>


