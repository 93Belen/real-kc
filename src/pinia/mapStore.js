import { defineStore } from 'pinia';

export const useMapStore = defineStore('map', {
  state: () => ({
    suggestions: [], 
  }),
  actions: {
    async fetchSuggestions(query) {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&viewbox=${-94.896},${39.198},${-94.325},${38.837}&bounded=1`
              );                           
            const data = await response.json();
            data.forEach(suggestion => {
                this.suggestions.push({
                    text: suggestion.display_name,
                    lat: suggestion.lat,
                    lon: suggestion.lon
                })
            })
            console.log(data)
            console.log(this.suggestions)
        } 
        catch (err) {
            console.error('Error fetching suggestions:', err);
            this.error = 'Failed to fetch suggestions. Please try again later.';
        }
    },

    clearSuggestions() {
      this.suggestions = [];
    },
  },
});
