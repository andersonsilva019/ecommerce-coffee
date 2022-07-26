import styled from 'styled-components'
import { CoffeeItemCartContainer } from '../../../components/CoffeeItemCart/styles'


export const CartContainer = styled.div`
  padding: 2.5rem;
  width: 28rem;
  background-color: ${({ theme }) => theme.colors['gray-300']};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 6px 48px;

  ${CoffeeItemCartContainer}{
    border-bottom: 1px solid ${({ theme }) => theme.colors['gray-700']};
    padding: 1rem 0 2rem;
  }
`

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AmountItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.fonts['14px']};
  color: ${({ theme }) => theme.colors['black-500']};
  font-weight: 400;
  line-height: 130%;

  > span {
    font-size: ${({ theme }) => theme.fonts['16px']};
    color: ${({ theme }) => theme.colors['black-500']};
    font-weight: 400;
    line-height: inherit;
  }
`

export const DeliveryFee = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.fonts['14px']};
  color: ${({ theme }) => theme.colors['black-500']};
  font-weight: 400;
  line-height: 130%;

  > span {
    font-size: ${({ theme }) => theme.fonts['16px']};
    color: ${({ theme }) => theme.colors['black-500']};
    font-weight: 400;
    line-height: inherit;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: ${({ theme }) => theme.fonts['20px']};
  color: ${({ theme }) => theme.colors['black-700']};
  font-weight: 700;
  line-height: 130%;
`

export const ConfirmOrderButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['yellow-500']};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 0.875rem 1.5rem;
  border: 0;
  font-size: ${({ theme }) => theme.fonts['14px']};
  font-weight: 700;
  border-radius: 6px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-900']};
  }
`