import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { FormContext } from '../contexts/formContext'

type RequiredCreateOrderProps = {
  children: React.ReactNode
}

export function RequiredCreateOrder({ children }: RequiredCreateOrderProps) {
  const { formData } = useContext(FormContext);

  if (!formData.products) {
    return <Navigate to="/checkout" />
  }

  return (
    <>
      {children}
    </>
  )
}