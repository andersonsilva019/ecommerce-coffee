import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react';
import orderFinishedImage from '../../assets/order-finished-image.svg'
import { FormContext } from '../../contexts/formContext';
import * as S from './styles'

export function OrderSuccess() {

  const { formData } = useContext(FormContext)

  const payment = {
    money: 'Dinheiro',
    'credit-card': 'Cartão de crédito',
    'debt-card': 'Cartão de débito'
  }

  return (
    <S.OrderSuccessContainer>
      <S.OrderContentLeft>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <S.Box>
          <S.Info>
            <S.MapPinIconBox>
              <MapPin size={20} weight="fill" color="#FFFFFF" />
            </S.MapPinIconBox>
            <S.InfoTextLocalization>
              Entrega em <span>{formData.street}, {formData.number}</span>
              <p>{formData.neighborhood} - {formData.city}, {formData.state.toUpperCase()}</p>
            </S.InfoTextLocalization>
          </S.Info>
          <S.Info>
            <S.TimerIconBox>
              <Timer size={20} weight="fill" color="#FFFFFF" />
            </S.TimerIconBox>
            <S.InfoTextAddress>
              Previsão de entrega
              <p>20 min - 30 mim</p>
            </S.InfoTextAddress>
          </S.Info>
          <S.Info>
            <S.CurrentDollarIconBox>
              <CurrencyDollar size={20} weight="fill" color="#FFFFFF" />
            </S.CurrentDollarIconBox>
            <S.InfoTextPayment>
              Pagamento na entrega
              <p>{payment[formData.payment]}</p>
            </S.InfoTextPayment>
          </S.Info>
        </S.Box>
      </S.OrderContentLeft>
      <img src={orderFinishedImage} alt="" />
    </S.OrderSuccessContainer>
  );
}