import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  width: 28rem;

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
  border: 1px solid purple;
`
