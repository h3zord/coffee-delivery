import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.5rem;
  margin-top: 2rem;
`

export const OrderConfirmationContent = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid ${(props) => props.theme.purple};
`

export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > p {
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
  }
`
