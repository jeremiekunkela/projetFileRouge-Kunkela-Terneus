import { defineStore } from 'pinia'

export const useInvoiceStore  = defineStore({
  id: 'invoice',
  state: () => ({
    invoice: {
      client: {
        name: "",
        surname: "",
        telephone: "",
      },
      dueDate: new Date().toISOString().split('T')[0],
      tva: 0,
      rows: [
        {
          designation: "",
          price: null,
          quantity: null,
        },
      ],
    }
  })

  ,
  getters: {
    clientFullName: (state) => { 
      return `${state.invoice.client.name} ${state.invoice.client.surname} (${state.invoice.client.telephone})`
    },
    
    totalPrice :(state) =>  {
      let total: number = 0;
  
      for (let row of state.invoice.rows) {
        total += Number(row.quantity) * Number(row.price);
      }
  
      return total;
    }
  },
  actions: {
   
  }
})

