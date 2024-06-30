import styled from 'styled-components'

export const ConfirmationContainer = styled.div`
  margin: 5rem auto;
  width: 70vw;

  & > h1 {
    font-size: 2rem;
    line-height: 1.5;
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }

  & > h6 {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
