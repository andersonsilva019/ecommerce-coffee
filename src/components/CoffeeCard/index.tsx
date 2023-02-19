import { ShoppingCart, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { stockService } from '../../services/stock'
import { formatPrice } from '../../utils/formatPrice'
import * as S from './styles'

type CoffeeCartProps = {
  id: number
  imgUrl: string
  name: string
  description: string
  price: number
  flavors: string[]
  amount: number
}

export function CoffeeCard({
  id,
  name,
  price,
  description,
  flavors,
  imgUrl,
  amount
}: CoffeeCartProps) {

  const { addToCart, isInCart, removeFromCart } = useCart()

  const newPriceFormatted = formatPrice(price).split('R$')[1]

  const [currentAmount, setCurrentAmount] = useState(amount)

  async function incrementAmount() {

    try {
      const newAmount = currentAmount + 1

      const data = await stockService.verifyStock(id);

      const amountInStock = data.amount;

      if (newAmount <= amountInStock) {
        setCurrentAmount(currentAmount + 1)
      } else {
        alert('Não temos mais este produto no estoque');
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  function decrementAmount() {
    if (currentAmount > 1) {
      setCurrentAmount(currentAmount - 1)
    }
  }

  function addCoffeeToCart() {

    const coffee = {
      id,
      name,
      price,
      imgUrl,
    }

    addToCart(coffee, currentAmount);
  }

  function removeCoffeeFromCart() {
    removeFromCart(id);
  }

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
          R$ <span>{newPriceFormatted}</span>
        </S.Price>
        {!isInCart(id) ? (<S.CoffeeCardFooterRightSide>
          <S.Amount>
            <S.AmountButton
              onClick={decrementAmount}
              disabled={currentAmount === 1}
            >-</S.AmountButton>
            <span>{currentAmount}</span>
            <S.AmountButton onClick={incrementAmount}>+</S.AmountButton>
          </S.Amount>
          <S.AddToCartButton data-testid="AddToCartButton" onClick={addCoffeeToCart}>
            <ShoppingCart size={18} weight="fill" color="#F3F2F2" />
          </S.AddToCartButton>
        </S.CoffeeCardFooterRightSide>) : (
          <S.RemoveToCartButton onClick={removeCoffeeFromCart}>
            <Trash size={18} weight="regular" color="#8047F8" />
            Remover
          </S.RemoveToCartButton>
        )}
      </S.CoffeeCardFooter>
    </S.CoffeeCardContainer>
  )
}