import { BackToHome, EmptyCartContainer } from './style'
import emptyCart from '../../../../assets/empty-cart.svg'
import { Link } from 'react-router-dom'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <img src={emptyCart} alt="" />

      <h1>Seu carrinho está vazio!</h1>

      <Link to={'/'}>
        <BackToHome>ESCOLHER MEU CAFÉ</BackToHome>
      </Link>
    </EmptyCartContainer>
  )
}
