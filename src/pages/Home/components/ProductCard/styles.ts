import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['base-card']};

  img {
    width: 120px;
    height: 120px;
    margin-top: -20px;
    margin-bottom: 0.75rem;
  }

  div:nth-child(2) > span {
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.3;
    padding: 8px 8px;
    margin: 3px;
  }

  h6 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  :nth-child(4) {
    width: 13.5rem;
    height: 2.25rem;
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    text-align: center;
  }

  div:nth-child(5) {
    width: 13rem;
    height: 2.375rem;
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
  }

  div:nth-child(5) > span {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    margin-right: 0.2rem;
  }

  div:nth-child(5) p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    margin-right: 1.8rem;
  }

  div:nth-child(5) > button {
    color: ${(props) => props.theme['base-card']};
    background-color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  div:nth-child(5) > button:hover {
    background-color: ${(props) => props.theme.purple};
  }

  div:nth-child(5) > button:disabled {
    cursor: not-allowed;
  }
`
