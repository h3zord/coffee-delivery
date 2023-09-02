import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import coffeeDeliveryLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />
      <div>
        <span>{<MapPin size={22} weight="fill" />} Porto Alegre, RS</span>

        <nav>
          <NavLink to={'/checkout'} title="Redirect to checkout">
            <div className="cart-button">
              <ShoppingCart size="22" weight="fill" color="#C47F17" />
            </div>
          </NavLink>
        </nav>
        <div>3</div>
      </div>
    </HeaderContainer>
  )
}
