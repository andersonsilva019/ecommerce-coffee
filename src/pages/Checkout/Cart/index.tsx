import { CoffeeItemCart, CoffeeItemCartProps } from '../../../components/CoffeeItemCart'
import { DELIVERY_FEE } from '../../../contexts/cartContext'
import { useCart } from '../../../hooks/useCart'
import { formatPrice } from '../../../utils/formatPrice'
import * as S from './styles'

type CartProps = {
  itens: CoffeeItemCartProps[]
  onSubmit: () => void
  isSubmitting: boolean
}

export function Cart({ itens, onSubmit, isSubmitting }: CartProps) {

  const { totalInCart } = useCart();

  return (
    <S.CartContainer>
      {itens.map(item => (
        <CoffeeItemCart {...item} />
      ))}
      <S.CartInfo>
        <S.AmountItens>
          Total de itens
          <span>{formatPrice(totalInCart)}</span>
        </S.AmountItens>
        <S.DeliveryFee>
          Entrega
          <span>R$ 10,00</span>
        </S.DeliveryFee>
        <S.Total>
          Total
          <span>{formatPrice(totalInCart + DELIVERY_FEE)}</span>
        </S.Total>
      </S.CartInfo>
      <S.ConfirmOrderButton onClick={onSubmit} type="button">
        {isSubmitting ? 'Aguarde...' : 'Confirmar pedido'}
      </S.ConfirmOrderButton>
    </S.CartContainer>
  )
}