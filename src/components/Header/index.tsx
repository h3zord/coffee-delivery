import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './style'
import { MapPin } from '@phosphor-icons/react'
import coffeeDeliveryLogo from '../../assets/logo.svg'
import cartNav from '../../assets/cart-nav.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeDeliveryLogo} alt="" />
      <div>
        <span>{<MapPin size={22} weight="fill" />} Porto Alegre, RS</span>

        <nav>
          <NavLink to={'/checkout'} title="Redirect to checkout">
            <img src={cartNav} alt="" />
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
