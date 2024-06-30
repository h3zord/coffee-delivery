import { Link } from 'react-router-dom'
import { HeaderContainer, LocaltionAndCartButton } from './style'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import coffeeDeliveryLogo from '../../assets/logo.svg'
import { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { IGeoInfoData } from '../../interfacesAndTypes'

export function Header() {
  const [userLocation, setUserLocation] = useState({} as IGeoInfoData)

  const { coffeeListOrder } = useContext(OrderContext)

  async function getLocation() {
    const response = await fetch('https://ipinfo.io/json')
    const data = await response.json()

    setUserLocation(data)
  }

  useEffect(() => {
    getLocation()
  }, [])

  const coffeeQuantity = coffeeListOrder.reduce(
    (acc, curr) => (acc += curr.quantity),
    0,
  )

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeDeliveryLogo} alt="" data-testid="logo-image" />
      </Link>

      <LocaltionAndCartButton>
        <span data-testid="location">
          <MapPin size={22} weight="fill" />
          {`${userLocation.city} - ${userLocation.region}`}
        </span>

        <Link to={'/checkout'} title="Redirect to checkout">
          <ShoppingCart size="22" weight="fill" color="#C47F17" />

          {coffeeListOrder.length > 0 && <div>{coffeeQuantity}</div>}
        </Link>
      </LocaltionAndCartButton>
    </HeaderContainer>
  )
}
