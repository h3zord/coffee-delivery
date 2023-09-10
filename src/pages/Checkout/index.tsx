import { useContext } from 'react'
import { EmptyCart } from './components/EmptyCart'
import { BuyerInfo } from './components/BuyerInfo'
import { SelectedCoffee } from './components/SelectedCoffee'
import { CheckoutContainer, CheckoutContent } from './style'
import { OrderContext } from '../../contexts/OrderContext'
import { BuyerInfoContext } from '../../contexts/BuyerInfoContext'

export function Checkout() {
  const { coffeeListOrder } = useContext(OrderContext)

  return (
    <CheckoutContainer>
      <CheckoutContent>
        {coffeeListOrder.length ? (
          <BuyerInfoContext>
            <BuyerInfo />
            <SelectedCoffee />
          </BuyerInfoContext>
        ) : (
          <EmptyCart />
        )}
      </CheckoutContent>
    </CheckoutContainer>
  )
}
