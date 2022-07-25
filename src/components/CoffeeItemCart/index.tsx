import { Trash } from "phosphor-react";

import * as S from './styles'

export function CoffeeItemCart() {
  return (
    <S.CoffeeItemCartContainer>
      <S.ImageBox>
        <img src="https://firebasestorage.googleapis.com/v0/b/my-blog-a74d5.appspot.com/o/coffee-images%2FImage-13.svg?alt=media&token=242ebbb6-01cb-4b9f-b35a-cec0318fb327" alt="" />
      </S.ImageBox>
      <S.Content>
        <S.HeaderContent>
          <span>Expresso tradicional</span>
          <strong>R$ 10,00</strong>
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