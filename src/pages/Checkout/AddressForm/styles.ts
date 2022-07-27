import styled, { css } from 'styled-components'

export const AddressFormContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['gray-300']};

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
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
  flex-direction: column;
  gap: 1rem;
`

const BaseInput = css`
  font-size: ${({ theme }) => theme.fonts['14px']};
  color: ${({ theme }) => theme.colors['black-500']};
  font-weight: 400;

  ::placeholder {
    color: ${({ theme }) => theme.colors['black-300']};
    font-size: ${({ theme }) => theme.fonts['14px']};
    font-weight: 400;
  }

  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['gray-700']};

  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors['yellow-900']};
  }
`

type CepInputProps = {
  isError?: boolean;
}

export const CepInput = styled.input<CepInputProps>`
  ${BaseInput}

  width: 100%;
  max-width: 12.5rem;

  ${({ isError }) => isError && css`
    border: 1px solid #f5222d;
  `}
`

type StreetInputProps = {
  isError?: boolean;
}

export const StreetInput = styled.input<StreetInputProps>`
  ${BaseInput}

  ${({ isError }) => isError && css`
    border: 1px solid #f5222d;
  `}
`

type GroupOneProps = {
  isErrorNumberInput?: boolean;
  isErrorComplementInput?: boolean;
}

export const GroupOne = styled.div<GroupOneProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  > input:first-child {
    ${BaseInput}

    ${({ isErrorNumberInput }) => isErrorNumberInput && css`
        border: 1px solid #f5222d;
    `}
  }

  > input:last-child {
    ${BaseInput}
    flex: 1;

    ${({ isErrorComplementInput }) => isErrorComplementInput && css`
        border: 1px solid #f5222d;
    `}
  }
`

type GroupTwoProps = {
  isErrorCityInput?: boolean;
  isErrorStateInput?: boolean;
  isErrorNeighborhoodInput?: boolean;
}


export const GroupTwo = styled.div<GroupTwoProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  > input:nth-child(1) {
    ${BaseInput}

    ${({ isErrorNeighborhoodInput }) => isErrorNeighborhoodInput && css`
        border: 1px solid #f5222d;
    `}
  }

  > input:nth-child(2) {
    ${BaseInput}
    flex: 1;

    ${({ isErrorCityInput }) => isErrorCityInput && css`
        border: 1px solid #f5222d;
    `}
  }

  > input:nth-child(3) {
    ${BaseInput}
    width: 100%;
    max-width: 3.75rem;

    ${({ isErrorStateInput }) => isErrorStateInput && css`
        border: 1px solid #f5222d;
    `}
  }
`