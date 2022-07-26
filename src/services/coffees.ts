import { api } from "./api"

type GetCoffeesResponseType = {
  id: number
  name: string
  price: number
  description: string
  flavors: string[]
  image: string
}

export const coffeeService = {

  getCoffees: async () => {
    try {
      const response = await api.get<GetCoffeesResponseType[]>('/coffees')
      return response.data
    } catch (error) {
      return Promise.reject(error);
    }
  },

  getCoffee: async (id: number) => {
    try {
      const response = await api.get<GetCoffeesResponseType>(`/coffees/${id}`)
      return response.data
    } catch (error) {
      return Promise.reject(error);
    }
  }
}