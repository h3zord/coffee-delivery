import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  margin-bottom: 2rem;

  & > h6 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.3rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SelectedCoffeeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme['base-card']};

  hr {
    margin: 1.5rem 0px;
    border: 1.5px solid ${(props) => props.theme['base-button']};
  }
`

export const BoughtCoffeContent = styled.div`
  display: flex;
  gap: 2rem;

  & > div:nth-child(1) {
    display: flex;
    gap: 1rem;

    & > img {
      width: 64px;
    }
  }

  & > div:nth-child(1) > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > p {
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }

    & > div {
      display: flex;
      justify-content: space-between;
    }
  }

  .remove-button {
    border: none;
    padding: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.75rem;
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
    text-align: right;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1rem;
    width: 5rem;
  }
`
export const TotalPriceContent = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  & > div:nth-child(1),
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ConfirmButton = styled.button`
  margin-top: 2rem;
  line-height: 1.6;
  padding: 0.875rem;
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
