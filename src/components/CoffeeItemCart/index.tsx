import { Trash } from "phosphor-react";

import * as S from './styles'

export type CoffeeItemCartProps = {
  imgUrl: string
  name: string
  price: string
}

export function CoffeeItemCart({
  imgUrl,
  name,
  price
}: CoffeeItemCartProps) {
  return (
    <S.CoffeeItemCartContainer>
      <S.ImageBox>
        <img src={imgUrl} alt="" />
      </S.ImageBox>
      <S.Content>
        <S.HeaderContent>
          <span>{name}</span>
          <strong>{price}</strong>
        </S.HeaderContent>
        <S.FooterContent>
          <S.Amount>
            <S.AmountButton>-</S.AmountButton>
            <span>1</span>
            <S.AmountButton>+</S.AmountButton>
          </S.Amount>
          <S.RemoveToCartButton>
            <Trash size={18} weight="regular" color="#8047F8" />
            Remover
          </S.RemoveToCartButton>
        </S.FooterContent>
      </S.Content>
    </S.CoffeeItemCartContainer>
  )
}