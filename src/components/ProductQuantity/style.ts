import styled from 'styled-components'

export const ProductQuantityContainer = styled.div`
  display: flex;
  height: 2.375rem;
  margin-right: 0.5rem;
  background-color: ${(props) => props.theme['base-button']};
  align-items: center;
  border-radius: 6px;

  & > span {
    color: ${(props) => props.theme['base-title']};
    width: 1.5rem;
    text-align: center;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif;
  }

  & > button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.purple};
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & > button:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
