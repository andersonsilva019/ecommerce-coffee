import { api } from "./api"

export const coffeeService = {

  getCoffees: async () => {
    try {
      const response = await api.get('/coffees')
      return response.data
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getCoffee: async (id: number) => {
    try {
      const response = await api.get(`/coffees/${id}`)
      return response.data
    } catch (error) {
      return Promise.reject(error);
    }
  }
}