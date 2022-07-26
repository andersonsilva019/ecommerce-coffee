import { AddressForm } from "./AddressForm";
import { Cart } from "./Cart";
import { Payment } from "./Payment";

import * as S from './styles'

export function Checkout() {
  return (
    <S.CheckoutContainer>
      <S.FormGroup>
        <h2>Complete seu pedido</h2>
        <AddressForm />
        <Payment />
      </S.FormGroup>
      <S.CartGroup>
        <h2>Cafés selecionados</h2>
        <Cart itens={[{
          name: "Expresso tradicional",
          price: "R$ 10,00",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage.svg?alt=media&token=6ca59bfa-2c82-4225-a256-f32ca63c0a91"
        }, {
          name: "Expresso tradicional",
          price: "R$ 10,00",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage.svg?alt=media&token=6ca59bfa-2c82-4225-a256-f32ca63c0a91"
        }]} />
      </S.CartGroup>
    </S.CheckoutContainer>
  )
}