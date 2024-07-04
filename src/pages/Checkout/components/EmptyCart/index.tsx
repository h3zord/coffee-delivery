import { BackToHome, EmptyCartContainer } from './style'
import { Link } from 'react-router-dom'

export function EmptyCart() {
  return (
    <EmptyCartContainer>
      <img src="/public/empty-cart.svg" alt="" />

      <h1>Seu carrinho está vazio!</h1>

      <Link to={'/'}>
        <BackToHome>ESCOLHER MEU CAFÉ</BackToHome>
      </Link>
    </EmptyCartContainer>
  )
}
