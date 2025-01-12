import { defineStore } from 'pinia'

export const useModalsStore = defineStore('modal', {
    state: () => ({ 
      addForm: false,
      trashModal: false
    }),
    getters: {
      // numberOfFilters: (state) =>  state, example
    },
    actions: {
      toggleAddForm() {
        this.addForm = !this.addForm
        this.trashModal = false
      },
      toggleTrashModal() {
        this.trashModal = !this.trashModal
        this.addForm = false
      },
    },
  })