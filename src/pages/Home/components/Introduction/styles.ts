import styled from 'styled-components'

export const IntroductionText = styled.div`
  height: 21.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36.75rem;

  & > div:first-child {
    height: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme['base-title']};
    }

    & > h4 {
      font-size: 1.25rem;
      line-height: 1.3;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  & > div:last-child {
    height: 5.25rem;
    display: flex;
    flex-wrap: wrap;

    & > span {
      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    & > span:nth-child(1),
    & > span:nth-child(3) {
      width: 16rem;
    }
  }
`
