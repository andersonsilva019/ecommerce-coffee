import { CoffeeItemCart, CoffeeItemCartProps } from '../../../components/CoffeeItemCart'
import * as S from './styles'

type CartProps = {
  itens: CoffeeItemCartProps[]
}

export function Cart({ itens }: CartProps) {
  return (
    <S.CartContainer>
      {itens.map(item => (
        <CoffeeItemCart {...item} />
      ))}
      <S.CartInfo>
        <S.AmountItens>
          Total de itens
          <span>R$ 10,00</span>
        </S.AmountItens>
        <S.DeliveryFee>
          Entrega
          <span>R$ 10,00</span>
        </S.DeliveryFee>
        <S.Total>
          Total
          <span>R$ 33,20</span>
        </S.Total>
      </S.CartInfo>
      <S.ConfirmOrderButton>Confirmar pedido</S.ConfirmOrderButton>
    </S.CartContainer>
  )
}