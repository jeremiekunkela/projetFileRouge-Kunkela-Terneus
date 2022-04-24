import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import InvoiceForm from "@/components/InvoiceForm.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/invoice1',
  name: 'InvoiceForm',
  component: InvoiceForm
  }
    
  ]
})

export default router
