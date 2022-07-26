import { CreditCard, CurrencyDollar, Money } from "phosphor-react";

import * as S from './styles'

export function Payment() {
  return (
    <S.PaymentContainer>
      <S.FormHeader>
        <CurrencyDollar size={18} weight="regular" color="#8047F8" />
        <S.Info>
          <span>Pagamento</span>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </S.Info>
      </S.FormHeader>
      <S.FormContent>
        <S.CreditCardButton>
          <CreditCard size={18} weight="regular" color="#8047F8" />
          <span>Cartão de crédito</span>
        </S.CreditCardButton>
        <S.DebtCartButton>
          <CreditCard size={18} weight="regular" color="#8047F8" />
          <span>Cartão de Débito</span>
        </S.DebtCartButton>
        <S.MoneyButton>
          <Money size={18} weight="regular" color="#8047F8" />
          <span>Dinheiro</span>
        </S.MoneyButton>
      </S.FormContent>
    </S.PaymentContainer>
  );
}