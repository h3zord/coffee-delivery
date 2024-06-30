import { useContext, useEffect, useState } from 'react'
import { ProductQuantity } from '../../../../components/ProductQuantity'
import { Trash } from '@phosphor-icons/react'
import { OrderContext } from '../../../../contexts/OrderContext'
import {
  BoughtCoffeContent,
  ConfirmButton,
  SelectedCoffeeContainer,
  SelectedCoffeeContent,
  TotalPriceContent,
} from './style'
import { IDataCoffeeOrder } from '../../../../interfacesAndTypes'

export function SelectedCoffee() {
  const {
    coffeeListOrder,
    deleteCoffeeFromOrder,
    addOneMoreCoffeeToOrder,
    removeOneMoreCoffeeFromOrder,
  } = useContext(OrderContext)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const sumTotalPrice = coffeeListOrder.reduce((acc, curr) => {
      return (acc += curr.quantity * curr.price)
    }, 0)

    setTotalPrice(sumTotalPrice)
  }, [coffeeListOrder, setTotalPrice])

  function handleDeleteCoffeeFromOrder(coffee: IDataCoffeeOrder) {
    deleteCoffeeFromOrder(coffee)
  }

  return (
    <SelectedCoffeeContainer data-testid="selected-coffee">
      <h6>Cafés selecionados</h6>
      <SelectedCoffeeContent>
        {coffeeListOrder.map((coffee) => (
          <>
            <BoughtCoffeContent key={coffee.id}>
              <div>
                <img src={coffee.thumbnail} alt="Coffee Thumbnail" />

                <div>
                  <p>{coffee.name}</p>

                  <div>
                    <ProductQuantity
                      dataCoffee={coffee}
                      addOneMoreCoffeeToOrder={addOneMoreCoffeeToOrder}
                      removeOneMoreCoffeeFromOrder={
                        removeOneMoreCoffeeFromOrder
                      }
                    />

                    <button
                      type="button"
                      className="remove-button"
                      onClick={() => handleDeleteCoffeeFromOrder(coffee)}
                    >
                      <Trash size="16" color="#8047f8" />
                      REMOVER
                    </button>
                  </div>
                </div>
              </div>

              <span>
                {`${(coffee.price * coffee.quantity).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}`}
              </span>
            </BoughtCoffeContent>

            <hr />
          </>
        ))}

        <TotalPriceContent>
          <div>
            <span>Total de itens</span>
            <span>
              {totalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>

          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>

          <div>
            <span>Total</span>
            <p>
              {(totalPrice + 3.5).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        </TotalPriceContent>

        <ConfirmButton type="submit" form="buyer-info-form">
          CONFIRMAR PEDIDO
        </ConfirmButton>
      </SelectedCoffeeContent>
    </SelectedCoffeeContainer>
  )
}
