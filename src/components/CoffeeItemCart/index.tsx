import { Trash } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";

import * as S from './styles'

export type CoffeeItemCartProps = {
  id: number
  imgUrl: string
  name: string
  price: number
}

export function CoffeeItemCart({
  id,
  imgUrl,
  name,
  price
}: CoffeeItemCartProps) {

  const {
    mapIdToAmount,
    incrementAmount,
    removeFromCart,
    decrementAmount
  } = useCart()

  function increment() {
    incrementAmount(id)
  }

  function decrement() {
    decrementAmount(id)
  }

  function removeCoffeeFromCart() {
    removeFromCart(id)
  }

  return (
    <S.CoffeeItemCartContainer>
      <S.ImageBox>
        <img src={imgUrl} alt="" />
      </S.ImageBox>
      <S.Content>
        <S.HeaderContent>
          <span>{name}</span>
          <strong>{formatPrice(price)}</strong>
        </S.HeaderContent>
        <S.FooterContent>
          <S.Amount>
            <S.AmountButton
              onClick={decrement}
              disabled={mapIdToAmount[id] <= 1}
            >-</S.AmountButton>
            <span>{mapIdToAmount[id]}</span>
            <S.AmountButton onClick={increment}>+</S.AmountButton>
          </S.Amount>
          <S.RemoveToCartButton onClick={removeCoffeeFromCart}>
            <Trash size={18} weight="regular" color="#8047F8" />
            Remover
          </S.RemoveToCartButton>
        </S.FooterContent>
      </S.Content>
    </S.CoffeeItemCartContainer>
  )
}