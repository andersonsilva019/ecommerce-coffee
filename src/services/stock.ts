import { api } from "./api"

type VerifyStockResponseType = {
  id: number
  amount: number
}

export const stockService = {

  verifyStock: async (id: number) => {
    try {
      const response = await api.get<VerifyStockResponseType>(`/stock/${id}`)
      return response.data
    } catch (error) {
      return Promise.reject(error);
    }
  },
}