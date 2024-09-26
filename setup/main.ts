import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { defineAppSetup } from '@slidev/types'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Add your routes here if needed
  ],
})

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(router)
})
