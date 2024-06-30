import styled from 'styled-components'
import { TFormProps } from '../../../../interfacesAndTypes'

export const OrderInfoContainer = styled.div`
  margin-bottom: 2rem;

  & > h6 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.3rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BuyerInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const BuyerInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
`

export const DescriptionContent = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  margin-bottom: 2rem;

  & > h6 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > p {
    grid-column: 2;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const FormContent = styled.div<TFormProps>`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: 12.5rem 17.25rem 1fr;

  & > input {
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    padding: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.3;
  }

  & > input::placeholder {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }

  & > input:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  & > input:nth-child(1) {
    grid-column: 1;
    border: 1px solid
      ${(props) => (props.$hasFormError.cep ? props.theme.red : 'transparent')};
  }

  & > input:nth-child(2) {
    grid-column: span 3;
    border: 1px solid
      ${(props) => (props.$hasFormError.rua ? props.theme.red : 'transparent')};
  }

  & > input:nth-child(3) {
    grid-column: 1;
    border: 1px solid
      ${(props) =>
        props.$hasFormError.numero ? props.theme.red : 'transparent'};
  }

  & > input:nth-child(4) {
    grid-column: span 2;
  }

  & > input:nth-child(5) {
    grid-column: 1;
    border: 1px solid
      ${(props) =>
        props.$hasFormError.bairro ? props.theme.red : 'transparent'};
  }

  & > input:nth-child(6) {
    grid-column: 2;
    cursor: not-allowed;
    border: 1px solid
      ${(props) =>
        props.$hasFormError.cidade ? props.theme.red : 'transparent'};
  }

  & > input:nth-child(7) {
    grid-column: 3;
    cursor: not-allowed;
    border: 1px solid
      ${(props) => (props.$hasFormError.uf ? props.theme.red : 'transparent')};
  }

  & > input:nth-child(6):focus,
  & > input:nth-child(7):focus {
    box-shadow: none;
  }

  & > span:nth-child(8) {
    grid-column: 2;
    grid-row: 1;
    color: ${(props) => props.theme.red};
    font-family: monospace;
    display: flex;
    align-items: center;
  }
`

export const MethodPaymentContent = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: 1fr 1fr 1fr;

  & > button {
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};
    transition: 0.1s;
    border: 1px solid transparent;
    cursor: pointer;
  }

  & > button:hover:not(.active) {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > .active {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
