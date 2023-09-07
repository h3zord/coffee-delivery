import { useContext } from 'react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import { Trash } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { OrderContext } from '../../../../contexts/OrderContext'
import {
  BoughtCoffeContent,
  ConfirmButton,
  SelectedCoffeeContainer,
  SelectedCoffeeContent,
  TotalPriceContent,
} from './style'

export function SelectedCoffee() {
  const { coffeeListOrder, removeCoffeeFromCart } = useContext(OrderContext)

  return (
    <SelectedCoffeeContainer>
      <h6>Cafés selecionados</h6>
      <SelectedCoffeeContent>
        {coffeeListOrder.map((coffee) => (
          <>
            <BoughtCoffeContent key={coffee.id}>
              <div>
                <img src={coffee.thumbnail} alt="" />
                <div>
                  <p>{coffee.name}</p>
                  <div>
                    <ProductQuantity coffeeQuantity={coffee.quantity} />
                    <button
                      className="remove-button"
                      onClick={() => removeCoffeeFromCart(coffee)}
                    >
                      <Trash size="16" color="#8047f8" />
                      REMOVER
                    </button>
                  </div>
                </div>
              </div>
              <span>
                {`R$ ${(coffee.price * coffee.quantity)
                  .toFixed(2)
                  .replace('.', ',')}`}
              </span>
            </BoughtCoffeContent>
            <hr />
          </>
        ))}

        <TotalPriceContent>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
        </TotalPriceContent>
        <NavLink to={'/sucess'}>
          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </NavLink>
      </SelectedCoffeeContent>
    </SelectedCoffeeContainer>
  )
}
