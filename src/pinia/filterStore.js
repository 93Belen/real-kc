import { defineStore } from 'pinia'
import {filtersArr} from '../assets/Filters'
let filterObj = {}
filtersArr.forEach(filter => filterObj[filter] = {name: filter, selected: false})

export const useFilterStore = defineStore('filter', {
    state: () => ({ 
      filters: filterObj
    }),
    getters: {
      // numberOfFilters: (state) =>  state, example
    },
    actions: {
      select(filter) {
        if(this.filters[filter]){
          this.filters[filter].selected = !this.filters[filter].selected
        }
      },
      deselectAll(filterSelected) {
        for (const filter in this.filters) {
          if (filter !== filterSelected) {
            this.filters[filter].selected = false
          }
        }
      }
    },
  })