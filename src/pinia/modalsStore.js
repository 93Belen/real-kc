import { defineStore } from 'pinia'

export const useModalsStore = defineStore('modal', {
    state: () => ({ 
      addForm: false
    }),
    getters: {
      // numberOfFilters: (state) =>  state, example
    },
    actions: {
      toggleAddForm() {
        this.addForm = !this.addForm
      },
    },
  })