import { BackToHome, EmptyCartContainer } from './style'
import emptyCart from '../../../../assets/empty-cart.svg'
import { NavLink } from 'react-router-dom'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <div>
        <img src={emptyCart} alt="" />
        <h1>Seu carrinho está vazio!</h1>
        <NavLink to={'/'}>
          <BackToHome>ESCOLHER MEU CAFÉ</BackToHome>
        </NavLink>
      </div>
    </EmptyCartContainer>
  )
}
