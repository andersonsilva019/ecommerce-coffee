import { useCart } from "../../hooks/useCart";
import { AddressForm } from "./AddressForm";
import { Cart } from "./Cart";
import { Payment } from "./Payment";

import * as S from './styles'

export function Checkout() {

  const { cartItens } = useCart()

  return (
    <S.CheckoutContainer>
      <S.FormGroup>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <Payment />
      </S.FormGroup>
      <S.CartGroup>
        <h2>Cafés selecionados</h2>
        <Cart itens={cartItens} />
      </S.CartGroup>
    </S.CheckoutContainer>
  )
}