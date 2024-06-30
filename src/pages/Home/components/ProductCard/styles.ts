import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 1.25rem;

  & > img {
    margin-top: -2.5rem;
  }

  & > div:nth-child(2) {
    display: flex;
    gap: 0.25rem;

    & > span {
      margin-top: 0.75rem;
      border-radius: 999px;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 1.3;
      padding: 0.5rem;
    }
  }

  & > h6 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
  }

  & > p:nth-child(4) {
    height: 3.5rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    text-align: center;
  }

  & > div:nth-child(5) {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;

    & > span {
      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;
      font-size: 0.875rem;
      margin-right: 0.2rem;
    }

    & > p {
      color: ${(props) => props.theme['base-text']};
      line-height: 1.3;
      font-size: 1.5rem;
      font-family: 'Baloo 2', sans-serif;
      margin-right: 1rem;
    }

    & > button {
      margin-left: 0.5rem;
      color: ${(props) => props.theme['base-card']};
      background-color: ${(props) => props.theme['purple-dark']};
      border-radius: 6px;
      display: flex;
      border: none;
      padding: 0.375rem;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover:not(:disabled) {
        background-color: ${(props) => props.theme.purple};
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`
