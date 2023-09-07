import { useContext } from 'react'
import { EmptyCart } from './components/EmptyCart'
import { OrderInfo } from './components/OrderInfo'
import { SelectedCoffee } from './components/SelectedCoffee'
import { CheckoutContainer, CheckoutContent } from './style'
import { OrderContext } from '../../contexts/OrderContext'

export function Checkout() {
  const { coffeeListOrder } = useContext(OrderContext)

  return (
    <CheckoutContainer>
      <CheckoutContent>
        {coffeeListOrder.length ? (
          <>
            <OrderInfo />
            <SelectedCoffee />
          </>
        ) : (
          <EmptyCart />
        )}
      </CheckoutContent>
    </CheckoutContainer>
  )
}
