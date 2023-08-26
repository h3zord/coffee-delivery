import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 10rem;

  div {
    display: flex;
    justify-content: space-between;
    width: 12rem;
  }

  div span {
    display: flex;
    align-items: center;
    width: 9rem;
    height: 2.375rem;
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-light']};
    border-radius: 6px;
    gap: 0.2rem;
    font-family: 'Roboto', sans-serif;
  }

  div nav img {
    display: flex;
  }
`
