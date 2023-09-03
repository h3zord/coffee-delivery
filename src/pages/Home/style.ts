import styled from 'styled-components'

export const IntroductionContainer = styled.section`
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`
export const ProductsContainer = styled.section`
  width: 70rem;
  margin: auto;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 1.3;
    margin-top: 2rem;
    margin-bottom: 3.375rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-bottom: 2rem;
  }
`
