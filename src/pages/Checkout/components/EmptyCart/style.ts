import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
    border-radius: 6px;
    background-color: ${(props) => props.theme['base-card']};
  }

  & > div img {
    width: 260px;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  & > div > h1 {
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['purple-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    /* margin-top: 3rem; */
  }
`

export const BackToHome = styled.button`
  width: 20rem;
  height: 2.875rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  font-size: 0.875rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.1s;
  font-weight: 700;
  margin-bottom: 3rem;
  margin-top: 3rem;

  background-color: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['purple-dark']};
  }
`
