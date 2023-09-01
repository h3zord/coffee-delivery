import styled from 'styled-components'

export const IntroductionContainer = styled.section`
  height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`

export const IntroductionText = styled.div`
  height: 21.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div:first-child {
    height: 12rem;
    width: 36.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > div:last-child {
    width: 36rem;
    height: 5.25rem;
    display: flex;
    flex-wrap: wrap;
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.3;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-family: 'Roboto', 'sans-serif';
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  & > div span:nth-child(1),
  & > div span:nth-child(3) {
    width: 16rem;
  }
`
