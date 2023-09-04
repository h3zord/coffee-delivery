import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  & > img {
    width: 260px;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  & > h1 {
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    margin-top: 3rem;
  }
`
