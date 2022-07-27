import { CreditCard, CurrencyDollar, Money, XCircle } from "phosphor-react";

import * as S from './styles'

type PaymentProps = {
  selectedItems: string[]
  handleSelectPayment: (id: string) => void
  isError?: boolean
  errorMessage?: string
}

export function Payment({
  handleSelectPayment,
  selectedItems,
  isError = false,
  errorMessage = '',
}: PaymentProps) {
  return (
    <S.PaymentContainer>
      <S.FormHeader>
        {isError ? (
          <XCircle size={18} weight="fill" color="#f5222d" />
        ) : (<CurrencyDollar size={18} weight="regular" color="#8047F8" />)
        }
        <S.Info isError={isError}>
          {errorMessage ? (
            <p>{errorMessage}</p>
          ) : (
            <>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </>
          )}
        </S.Info>
      </S.FormHeader >
      <S.FormContent>
        <S.CreditCardButton
          isSelected={selectedItems.includes('credit-card')}
          onClick={() => handleSelectPayment('credit-card')}
        >
          <CreditCard size={18} weight="regular" color="#8047F8" />
          <span>Cartão de crédito</span>
        </S.CreditCardButton>
        <S.DebtCartButton
          isSelected={selectedItems.includes('debt-card')}
          onClick={() => handleSelectPayment('debt-card')}
        >
          <CreditCard size={18} weight="regular" color="#8047F8" />
          <span>Cartão de Débito</span>
        </S.DebtCartButton>
        <S.MoneyButton
          isSelected={selectedItems.includes('money')}
          onClick={() => handleSelectPayment('money')}
        >
          <Money size={18} weight="regular" color="#8047F8" />
          <span>Dinheiro</span>
        </S.MoneyButton>
      </S.FormContent>
    </S.PaymentContainer >
  );
}