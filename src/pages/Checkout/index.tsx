import { EmptyCart } from './components/EmptyCart'
import { OrderInfo } from './components/OrderInfo'
import { SelectedCoffee } from './components/SelectedCoffee'
import { CheckoutContainer, CheckoutContent } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutContent>
        <EmptyCart />
        {/* <OrderInfo /> */}
        {/* <SelectedCoffee /> */}
      </CheckoutContent>
    </CheckoutContainer>
  )
}
