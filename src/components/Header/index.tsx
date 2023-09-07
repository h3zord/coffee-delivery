import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import coffeeDeliveryLogo from '../../assets/logo.svg'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function Header() {
  const { coffeeListOrder } = useContext(OrderContext)

  const coffeeQuantity = coffeeListOrder.reduce((acc, curr) => {
    return (acc += curr.quantity)
  }, 0)

  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />
      <div>
        <span>{<MapPin size={22} weight="fill" />} Porto Alegre, RS</span>

        <nav>
          <NavLink to={'/checkout'} title="Redirect to checkout">
            <div className="cart-button">
              <ShoppingCart size="22" weight="fill" color="#C47F17" />

              {coffeeListOrder.length > 0 && (
                <div className="counter-coffee">{coffeeQuantity}</div>
              )}
            </div>
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
