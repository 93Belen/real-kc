import { defineStore } from 'pinia'
import { supabase } from '../supabase'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import {filtersArr} from '../assets/Filters'
const toast = useToast()

export const useDbStore = defineStore('db', {
  state: () => ({
    businesses: ref([]),
    businessesByFilter: {},
    display: [],
    addForm: {
        name: '',
        description: '',
        address: '',
        type: [],
        lat: null,
        lon: null
    },
    wantToDeleteId: null
  }),
  getters: {

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
    async getDataByFilter() {
      for (const filter of filtersArr) {
        const { data, error } = await supabase.from('local-business').select().filter('type', 'cs', `{${filter}}`)
        if (error) {
          console.error("Error fetching data:", error)
        } else {
          this.businessesByFilter[filter] = data
        }
      }
    },  
    setDisplay(type){
      if(type === 'all'){
        this.display = this.businesses
      }
      else {
        this.display = this.businessesByFilter[type]
      }    
    },
    async checkForDuplicated(info){
      const { data, error} = await supabase.from('local-business').select().eq('address', info.address);
      if(data.length > 0){
        console.log(data)
        toast.error(`${data[data[0]].name} is also attached to this adddress`)
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
            type: [],
            lat: null,
            lon: null
            }
        this.getDB()
    },
    async deleteBusiness(){
        const response = await supabase.from('local-business').delete().eq('id', this.wantToDeleteId)
        console.log(response)
        toast.warning('You have deleted a business!')
        this.wantToDeleteId = null
        this.getDB()
    },
    updateId(id){
        this.wantToDeleteId = id
    }
  }
})


