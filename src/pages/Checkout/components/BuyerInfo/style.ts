import styled from 'styled-components'

export const OrderInfoContainer = styled.div`
  width: 40rem;

  & > h6 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const OrderInfoContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
  background-color: ${(props) => props.theme['base-card']};
`

export const DescriptionContent = styled.div`
  display: grid;
  grid-template-columns: 1.875rem 33.125rem;
  grid-template-rows: 1fr 1fr;
  width: 35rem;
  margin-bottom: 2rem;

  & > h6 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > p {
    grid-row: 2;
    grid-column: 2;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }
`

export const FormContent = styled.form`
  display: grid;
  grid-gap: 0.75rem;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 35rem;

  input {
    height: 2.625rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme['base-input']};
    border: none;
    color: ${(props) => props.theme['base-text']};
    padding: 12px;
    font-size: 0.875rem;
    line-height: 1.3;
  }

  input:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
  }

  input::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }

  input:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  input:nth-child(2) {
    grid-column: span 3;
    grid-row: 2;
  }

  input:nth-child(3) {
    grid-column: 1;
    grid-row: 3;
  }

  input:nth-child(4) {
    grid-column: span 2;
    grid-row: 3;
  }

  input:nth-child(5) {
    grid-column: 1;
    grid-row: 4;
  }

  input:nth-child(6) {
    grid-column: 2;
    grid-row: 4;
  }

  input:nth-child(7) {
    grid-column: 3;
    grid-row: 4;
  }
`

export const MethodPaymentContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35rem;

  & > button {
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    width: 11rem;
    height: 3.2rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    line-height: 1.6;
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

  .active {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
