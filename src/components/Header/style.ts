import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60vw;
  width: 99vw;
`

export const LocaltionAndCartButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & > span {
    padding: 0.75rem;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-light']};
    border-radius: 6px;
    gap: 0.5rem;
  }

  & > a {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }

    & > div {
      position: absolute;
      border-radius: 999px;
      line-height: 1.3;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      right: -12px;
      top: -12px;
      font-weight: 700;
      font-size: 0.75rem;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
