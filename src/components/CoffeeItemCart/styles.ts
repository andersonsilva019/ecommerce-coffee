import styled from 'styled-components'

export const CoffeeItemCartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items:center;
  gap: 1.25rem;
  background-color: transparent;
`
export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors['gray-300']};
  background-image: linear-gradient(
    to right,
    #F3F2F2 0%,
    #EDEDED 20%,
    #E6E5E5 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  img {
    width: 110%;
    height: 110%;
    object-fit: cover;
  }
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex-wrap: wrap;

  > span {
    font-size: ${({ theme }) => theme.fonts['16px']};
    line-height: 130%;
    color: ${({ theme }) => theme.colors['black-700']};
    font-weight: 400;
  }

  > strong {
    font-size: ${({ theme }) => theme.fonts['16px']};
    line-height: 130%;
    color: ${({ theme }) => theme.colors['black-500']};
    font-weight: 700;
  }
`

export const FooterContent = styled.div`
  display: flex;
  align-items:center;
  gap: 0.5rem;
  flex-wrap: wrap;
`


export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  background-color: ${({ theme }) => theme.colors['gray-700']};
  color: ${({ theme }) => theme.colors['black-900']};
  border-radius: 6px;
  padding: 0.5rem;
  > span {
    font-size: 1rem;
  }
  `

export const AmountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: transparent;
  border: none;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors['purple-500']};
  cursor: pointer;

  :disabled{
    opacity: 0.3;
    cursor: not-allowed;
  }
`
export const RemoveToCartButton = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors['gray-700']};
  color: ${({ theme }) => theme.colors['black-900']};
  border-radius: 6px;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fonts['14px']};
  text-transform: uppercase;
  font-weight: 400;
  line-height: 160%;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors['gray-900']};
  }
`