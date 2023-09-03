import styled from 'styled-components'

export const ConfirmationContainer = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;
  margin-top: 5rem;

  & > h1 {
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }

  & > h6 {
    margin-top: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
