import { defineStore } from 'pinia'
import { supabase } from '../supabase'
import { ref } from 'vue'

export const useDbStore = defineStore('db', {
  state: () => ({
    businesses: ref([]),
    addForm: {
        name: '',
        description: '',
        address: '',
        type: []
    }
  }),
  getters: {
    // example: numberOfFilters: (state) => state.filters.length
  },
  actions: {
    async getDB() {
      const { data, error } = await supabase.from('local-business').select()
      if (error) {
        console.error("Error fetching data:", error)
      } else {
        this.businesses = data
      }
    },
    updateAddForm(content) {
        this.addForm = content
    }
  }
})


