import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin: 6rem 0;

  display: flex;
  gap: 2rem;
  flex-wrap: wrap-reverse;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['black-700']};
    margin-bottom: 1rem;
  }
`

export const FormGroup = styled.div`
  flex: 1;
`

export const CartGroup = styled.div``