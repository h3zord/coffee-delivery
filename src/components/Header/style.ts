import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 58.5%;
  width: 100vw;

  & > div {
    display: flex;
    justify-content: space-between;
    width: 12rem;
  }

  div span {
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9rem;
    height: 2.375rem;
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-light']};
    border-radius: 6px;
    gap: 0.2rem;
    font-family: 'Roboto', sans-serif;
  }

  .cart-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    opacity: 0.9;
  }

  .cart-button:hover {
    opacity: 1;
  }

  .counter-coffee {
    position: absolute;
    border-radius: 50px;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -10px;
    top: -10px;
    font-weight: 700;
    font-size: 0.75rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};
    text-decoration: none;
  }
`
