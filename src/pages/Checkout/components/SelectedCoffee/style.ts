import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  width: 28rem;
  margin-bottom: 2rem;

  & > h6 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SelectedCoffeeContent = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme['base-card']};

  hr {
    margin: 1.5rem 0px;
    border: 1.5px solid ${(props) => props.theme['base-button']};
  }
`

export const BoughtCoffeContent = styled.div`
  width: 23rem;
  display: flex;
  justify-content: space-between;
  padding: 4px 2px;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    width: 15.95rem;
  }

  div:nth-child(1) > img {
    width: 4rem;
  }

  div:nth-child(1) > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 10.7rem;
  }

  div:nth-child(1) > div > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div:nth-child(1) > div > div {
    display: flex;
    justify-content: space-between;
    width: 10.7rem;
  }

  .remove-button {
    border: none;
    border-radius: 6px;
    display: flex;
    width: 5.7rem;
    line-height: 1.6;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};
    transition: 0.1s;
    cursor: pointer;
  }

  .remove-button:hover {
    background-color: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > span:nth-child(2) {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1rem;
  }
`
export const TotalPriceContent = styled.div`
  width: 23rem;
  height: 5.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  & > div:nth-child(1),
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.3125rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 1.625rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ConfirmButton = styled.button`
  width: 23rem;
  height: 2.875rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  font-size: 0.875rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.1s;
  font-weight: 700;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
