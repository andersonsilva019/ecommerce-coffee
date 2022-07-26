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

export const CEPInput = styled.input`
  ${BaseInput}

  width: 100%;
  max-width: 12.5rem;
`

export const StreetInput = styled.input`
  ${BaseInput}
`

export const GroupOne = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  > input:first-child {
    ${BaseInput}
  }

  > input:last-child {
    ${BaseInput}
    flex: 1;
  }
`

export const GroupTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > input:nth-child(1) {
    ${BaseInput}
  }

  > input:nth-child(2) {
    ${BaseInput}
    flex: 1;
  }

  > input:nth-child(3) {
    ${BaseInput}
    width: 100%;
    max-width: 3.75rem;
  }
`