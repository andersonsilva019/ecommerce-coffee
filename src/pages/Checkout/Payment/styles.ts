import styled from "styled-components";

export const PaymentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['gray-300']};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  margin-top: 0.75rem;
`

export const FormHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    font-size: ${({ theme }) => theme.fonts['16px']};
    color: ${({ theme }) => theme.colors['black-700']};
    font-weight: 400;
    line-height: 130%;
  }
  
  > p {
    font-size: ${({ theme }) => theme.fonts['14px']};
    color: ${({ theme }) => theme.colors['black-500']};
    font-weight: 400;
    line-height: 130%;
  }
`

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  `
const BaseButton = styled.button`
  flex: 1;
  background-color: ${({ theme }) => theme.colors['gray-700']};
  border: 0;
  cursor: pointer;
  padding: 1rem 0.5rem;
  
  display: flex;
  align-items: center;
  
  gap: 0.75rem;
  border-radius: 6px;

  > span {
    font-size: ${({ theme }) => theme.fonts['12px']};
    color: ${({ theme }) => theme.colors['black-500']};
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }
`

export const CreditCardButton = styled(BaseButton)``

export const DebtCartButton = styled(BaseButton)``

export const MoneyButton = styled(BaseButton)``