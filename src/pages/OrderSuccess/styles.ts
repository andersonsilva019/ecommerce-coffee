import styled from 'styled-components'

export const OrderSuccessContainer = styled.div`
  margin: 6rem 0;

  display: flex;
  justify-content: space-between;
  gap: 2rem;
`

export const OrderContentLeft = styled.aside`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['yellow-900']};
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 0.25rem;
  }
  
  > p {
    font-size: ${({ theme }) => theme.fonts['20px']};
    font-weight: 400;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['black-700']};
    margin-bottom: 2.5rem;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #8047F8;
  padding: 2.5rem;
  border-radius: 6px 36px;
  gap: 2rem;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const MapPinIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['purple-500']};
  padding: 0.5rem;
  border-radius: 50%;
`

export const InfoTextLocalization = styled.div`
  font-size: ${({ theme }) => theme.fonts['16px']};
  font-weight: 400;
  color: ${({ theme }) => theme.colors['black-500']};
  line-height: 130%;

  > span {
    font-weight: 700;
  }
`

export const TimerIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['yellow-500']};
  padding: 0.5rem;
  border-radius: 50%;
`

export const InfoTextAddress = styled.div`
  font-size: ${({ theme }) => theme.fonts['16px']};
  font-weight: 400;
  color: ${({ theme }) => theme.colors['black-500']};
  line-height: 130%;

  > p {
    font-weight: 700;
  }
`

export const CurrentDollarIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['yellow-900']};
  padding: 0.5rem;
  border-radius: 50%;
`

export const InfoTextPayment = styled.div`
  font-size: ${({ theme }) => theme.fonts['16px']};
  font-weight: 400;
  color: ${({ theme }) => theme.colors['black-500']};
  line-height: 130%;

  > p {
    font-weight: 700;
  }
`