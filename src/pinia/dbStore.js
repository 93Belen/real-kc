import { defineStore } from 'pinia'
import { supabase } from '../supabase'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
const toast = useToast()

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
    async updateAddForm(content) {
        this.addForm = content
        const { error } = await supabase.from('local-business').insert(this.addForm)
        console.log(error)
        if(!error){
            console.log('added')
            toast.success('You have added a business!')
        }
        this.addForm = {
            name: '',
            description: '',
            address: '',
            type: []
            }
        this.getDB()
    },
    clearToast(){
        this.toast = null
    }
  }
})


