import deliveryMan from '../../../../assets/delivery-man.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  OrderConfirmationContainer,
  OrderConfirmationContent,
  OrderDetails,
} from './style'

export function OrderConfirmation() {
  return (
    <OrderConfirmationContainer>
      <OrderConfirmationContent>
        <OrderDetails>
          <div style={{ backgroundColor: '#8047f8' }}>
            <MapPin weight="fill" color="#FAFAFA" size="16" />
          </div>
          <p>
            Entrega em <br />
            <strong>Rua João Daniel Martinelli, 102 - Porto Alegre, RS</strong>
          </p>
        </OrderDetails>
        <OrderDetails>
          <div style={{ backgroundColor: '#DBAC2C' }}>
            <Timer weight="fill" color="#FAFAFA" size="16" />
          </div>
          <p>
            Previsão de entrega <br />
            <strong>20 min - 30 min</strong>
          </p>
        </OrderDetails>
        <OrderDetails>
          <div style={{ backgroundColor: '#C47F17' }}>
            <CurrencyDollar color="#FAFAFA" size="16" />
          </div>
          <p>
            Pagamento na entrega <br />
            <strong>Cartão de Crédito</strong>
          </p>
        </OrderDetails>
      </OrderConfirmationContent>
      <img src={deliveryMan} alt="" />
    </OrderConfirmationContainer>
  )
}
