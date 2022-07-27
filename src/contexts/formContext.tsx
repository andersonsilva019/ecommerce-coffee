import { createContext, useState } from 'react'
import { MapIdToAmountType } from './cartContext'

export type PaymentType = 'debt-card' | 'credit-card' | 'money'

export type FormValues = {
  cep: string
  street: string
  neighborhood: string
  number: string
  complement: string
  city: string
  state: string
  payment: PaymentType
}

export interface FormData extends FormValues {
  products: MapIdToAmountType | null
}

type FormContextProviderProps = {
  children: React.ReactNode
}

type FormContextData = {
  formData: FormData
  saveFormData: (formData: FormData) => void
}

export const FormContext = createContext({} as FormContextData)

export function FormContextProvider({ children }: FormContextProviderProps) {

  const [formData, setFormData] = useState<FormData>({
    cep: '',
    street: '',
    neighborhood: '',
    number: '',
    complement: '',
    city: '',
    state: '',
    payment: 'money',
    products: null
  });

  function saveFormData(data: FormData) {
    setFormData(data)
  }

  return (
    <FormContext.Provider value={{ formData, saveFormData }}>
      {children}
    </FormContext.Provider>
  )
}