import styled, { css } from 'styled-components';

export const CoffeeCardContainer = styled.div`
  width: 100%;
  max-width: 16rem;
  padding: 1.25rem 1.5rem;

  background-color: ${({ theme }) => theme.colors['gray-300']};

  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;

  >img {
    margin-top: -2.75rem;
  }

  > h3 {
    color: ${({ theme }) => theme.colors['black-700']};
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0.5rem 0;
  }

  > p {
    color: ${({ theme }) => theme.colors['black-300']};
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.125rem;
    margin-bottom: 2rem;
  }
  `
export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  margin-top: -2.75rem;
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

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 0.5rem;
`

export const Badge = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors['yellow-300']};
    color: ${theme.colors['yellow-900']};
    padding: 0.25rem 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    font-size: ${theme.fonts['10px']};
    font-weight: 700;
    text-transform: uppercase;

  `}
`

export const CoffeeCardFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  gap: 1.5rem;
`

export const Price = styled.div`
  ${({ theme }) => css`
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: ${theme.fonts['14px']};
    color: ${theme.colors['black-500']};
    font-weight: 400;
    
    > span {
      font-size: ${theme.fonts['24px']}; 
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
    }
  `}
`

export const CoffeeCardFooterRightSide = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  gap: 0.5rem;
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

export const AddToCartButton = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['purple-900']};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover{
    background-color: ${({ theme }) => theme.colors['purple-500']};
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