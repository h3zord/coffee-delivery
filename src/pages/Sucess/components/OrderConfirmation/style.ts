import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.375rem;
  margin-top: 2rem;
`

export const OrderConfirmationContent = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 40px;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid ${(props) => props.theme.purple};
`

export const OrderDetails = styled.div`
  height: 2.625rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 100%;
  }
`
