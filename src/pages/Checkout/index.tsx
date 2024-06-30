import { useContext } from 'react'
import { EmptyCart } from './components/EmptyCart'
import { BuyerInfo } from './components/BuyerInfo'
import { SelectedCoffee } from './components/SelectedCoffee'
import { CheckoutContainer } from './style'
import { OrderContext } from '../../contexts/OrderContext'
import { BuyerInfoFormContext } from '../../contexts/BuyerInfoFormContext'

export function Checkout() {
  const { coffeeListOrder } = useContext(OrderContext)

  return (
    <CheckoutContainer>
      {coffeeListOrder.length ? (
        <BuyerInfoFormContext>
          <BuyerInfo />
          <SelectedCoffee />
        </BuyerInfoFormContext>
      ) : (
        <EmptyCart />
      )}
    </CheckoutContainer>
  )
}
