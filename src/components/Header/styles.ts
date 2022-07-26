import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.background};

  padding: 2rem 0;
`

export const RightSide = styled.aside`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Locale = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors['purple-900']};
  background-color: ${({ theme }) => theme.colors['purple-300']};
  font-size: 1rem;

  padding: 0.625rem 0.5rem;
  border-radius: 6px;
`

export const Cart = styled.div`
  background-color: ${({ theme }) => theme.colors['yellow-300']};
  border-radius:  6px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.625rem 0.5rem;

  position: relative;
`

export const TotalCart = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors['yellow-900']};

  display: flex;
  align-items: center;
  justify-content: center;

  top: -0.5rem;
  right: -0.5rem;
  padding: 0.25rem;
  border-radius: 50%;

  font-size: ${({ theme }) => theme.fonts['12px']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;

  height: 20px;
  width: 20px;
`