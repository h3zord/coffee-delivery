import styled from 'styled-components'

export const EmptyCartContainer = styled.div`
  margin: 3rem auto;
  padding: 2.5rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};

  & > img {
    width: 260px;
  }

  & > h1 {
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
  }
`

export const BackToHome = styled.button`
  margin-top: 2rem;
  line-height: 1.6;
  padding: 0.875rem 5rem;
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
