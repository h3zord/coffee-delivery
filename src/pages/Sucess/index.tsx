import { OrderConfirmation } from './components/OrderConfirmation'
import { ConfirmationContainer } from './style'

export function Sucess() {
  return (
    <>
      <ConfirmationContainer>
        <h1>Uhu! Pedido confirmado!</h1>
        <h6>Agora é só aguardar que logo o café chegará até você</h6>
        <OrderConfirmation />
      </ConfirmationContainer>
    </>
  )
}
