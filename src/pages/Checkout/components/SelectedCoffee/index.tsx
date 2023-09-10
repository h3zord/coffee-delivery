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

export function SelectedCoffee() {
  const {
    coffeeListOrder,
    deleteCoffeeFromCart,
    addOneMoreCoffeeFromOrder,
    removeOneMoreCoffeeFromOrder,
  } = useContext(OrderContext)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const sumTotalPrice = coffeeListOrder.reduce((acc, curr) => {
      return (acc += curr.quantity * curr.price)
    }, 0)

    setTotalPrice(sumTotalPrice)
  }, [coffeeListOrder, setTotalPrice])

  return (
    <SelectedCoffeeContainer>
      <h6>Cafés selecionados</h6>
      <SelectedCoffeeContent>
        {coffeeListOrder.map((coffee) => (
          <>
            <BoughtCoffeContent key={coffee.name}>
              <div>
                <img src={coffee.thumbnail} alt="" />
                <div>
                  <p>{coffee.name}</p>
                  <div>
                    <ProductQuantity
                      dataCoffee={coffee}
                      addOneMoreCoffeeFromOrder={addOneMoreCoffeeFromOrder}
                      removeOneMoreCoffeeFromOrder={
                        removeOneMoreCoffeeFromOrder
                      }
                    />
                    <button
                      className="remove-button"
                      onClick={() => deleteCoffeeFromCart(coffee)}
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
            <span>{`R$ ${totalPrice.toFixed(2).replace('.', ',')}`}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <span>Total</span>
            <p>{`R$ ${(totalPrice + 3.5).toFixed(2).replace('.', ',')}`}</p>
          </div>
        </TotalPriceContent>
        <ConfirmButton type="submit" form="buyer-info-form">
          CONFIRMAR PEDIDO
        </ConfirmButton>
      </SelectedCoffeeContent>
    </SelectedCoffeeContainer>
  )
}
