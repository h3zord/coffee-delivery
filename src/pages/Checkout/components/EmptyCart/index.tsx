import { BackToHome, EmptyCartContainer } from './style'
import emptyCart from '../../../../assets/empty-cart.svg'
import { NavLink } from 'react-router-dom'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <h1>Seu carrinho está vazio!</h1>
      <img src={emptyCart} alt="" />
      <NavLink to={'/'}>
        <BackToHome>ESCOLHER MEU CAFÉ</BackToHome>
      </NavLink>
    </EmptyCartContainer>
  )
}
