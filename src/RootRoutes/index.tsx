import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../Layout/DefaultLayout'
import { Checkout } from '../pages/Checkout'
import { Home } from '../pages/Home'
import { OrderSuccess } from '../pages/OrderSuccess'
import { RequiredCreateOrder } from './RequiredCreateOrder'

export function RootRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={
          <RequiredCreateOrder>
            <OrderSuccess />
          </RequiredCreateOrder>
        } />
      </Route>
    </Routes>
  )
}