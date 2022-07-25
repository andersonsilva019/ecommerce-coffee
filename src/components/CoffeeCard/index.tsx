import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'

type CoffeeCartProps = {
  imgUrl: string
  name: string
  description: string
  price: string
  flavors: string[]
}

export function CoffeeCard({
  name,
  price,
  description,
  flavors,
  imgUrl
}: CoffeeCartProps) {
  return (
    <S.CoffeeCardContainer>
      <S.ImageBox>
        <img
          src={imgUrl}
          alt=""
        />
      </S.ImageBox>
      <S.BadgeContainer>
        {flavors.map(flavor => (
          <S.Badge key={flavor}>
            {flavor}
          </S.Badge>
        ))}
      </S.BadgeContainer>
      <h3>{name}</h3>
      <p>{description}</p>

      <S.CoffeeCardFooter>
        <S.Price>
          R$ <span>{price}</span>
        </S.Price>
        <S.CoffeeCardFooterRightSide>
          <S.Amount>
            <S.AmountButton>-</S.AmountButton>
            <span>1</span>
            <S.AmountButton>+</S.AmountButton>
          </S.Amount>
          <S.AddToCartButton>
            <ShoppingCart size={18} weight="fill" color="#F3F2F2" />
          </S.AddToCartButton>
        </S.CoffeeCardFooterRightSide>
      </S.CoffeeCardFooter>
    </S.CoffeeCardContainer>
  )
}