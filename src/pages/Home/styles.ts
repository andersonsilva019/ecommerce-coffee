import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
  margin: 6rem 0;
`

export const BrandingSection = styled.section`
  display: flex;
  align-items: center;
  gap: 5rem;
`

export const HomeContentLeft = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
    color: ${({ theme }) => theme.colors['black-900']};
    margin-bottom: 1rem;
  }

  > p {
    font-size: ${({ theme }) => theme.fonts['20px']};
    font-weight: 400;
    color: ${({ theme }) => theme.colors['black-700']};
    line-height: 130%;
    margin-bottom: 4rem;
  }
`

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-gap: 1.5rem 0;
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    font-size: ${({ theme }) => theme.fonts['16px']};
    font-weight: 400;
    color: ${({ theme }) => theme.colors['black-500']};
    line-height: 130%;
  }
`

type IconBoxProps = {
  bgColor: 'yellow-900' | 'black-500' | 'yellow-500' | 'purple-500'
}

export const IconBox = styled.div<IconBoxProps>`
  ${({ bgColor, theme }) => css`
    background-color: ${theme.colors[bgColor]};
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const CoffeesSection = styled.section`
  margin-top: 10rem;
  
  > h2 {
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['black-700']};
    margin-bottom: 5rem;
  }
`

export const Coffees = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 3.5rem 1.5rem;
`