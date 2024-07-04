import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import {
  OrderConfirmationContainer,
  OrderConfirmationContent,
  OrderDetails,
} from './style'

export function OrderConfirmation() {
  const { buyerInfoData } = useContext(OrderContext)

  return (
    <OrderConfirmationContainer>
      <OrderConfirmationContent>
        <OrderDetails>
          <div style={{ backgroundColor: '#8047f8' }}>
            <MapPin weight="fill" color="#FAFAFA" size="16" />
          </div>

          <p>
            Entrega em <br />
            <strong>
              {`${buyerInfoData.rua}, ${buyerInfoData.numero}${
                buyerInfoData.complemento && `. ${buyerInfoData.complemento}`
              } - ${buyerInfoData.cidade}, ${buyerInfoData.uf}`}
            </strong>
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
            <strong>{buyerInfoData.metodoPagamento}</strong>
          </p>
        </OrderDetails>
      </OrderConfirmationContent>

      <img src="/delivery-man.svg" alt="" />
    </OrderConfirmationContainer>
  )
}
